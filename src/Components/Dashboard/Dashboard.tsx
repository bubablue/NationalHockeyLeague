import { Box } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useCallback, useContext } from "react";
import { useQuery } from "react-query";
import useStyles from "./styles";
import { TeamLogo } from "../../Images/TeamLogo";
import { useNavigate } from "react-router-dom";
import { TeamsContext, useTeams } from "../../Context/TeamProvider";

export const Dashboard = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [team, setTeam] = React.useState<any>([]);

  const getPlayers = useCallback(async () => {
    const login = await axios.get("http://localhost:3001/logged_in", {
      withCredentials: true,
    });
    const response = await axios.get("http://localhost:3001/players", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      params: {
        user_id: login.data.user.id,
      },
    });
    return response.data;
  }, []);

  const { data: players, status: playersStatus } = useQuery(
    "players",
    getPlayers,
    {
      enabled: true,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        return !team.length && data.map(async (player: any) => {
          let response = await axios.get(
            `https://statsapi.web.nhl.com/api/v1/people/${player.player_id}`
          );
          setTeam((prev: any) => [...prev, response.data]);
          return response.data;
        });
      },
    }
  );

  return (
    <Box>
      <Box className={classes.root}>
        {players && team.length ? (
          team.map((player: any) => {
            return (
              <Box
                className={classes.team}
                onClick={() => navigate(`/stats/${player.people[0].id}`)}
              >
                <TeamLogo
                  team={player.people[0].currentTeam.name}
                  teamId={player.people[0].currentTeam.id}
                  classProp={classes.images}
                />
                <Box className={classes.player}>
                  <h2 className={classes.playerName}>
                    {player.people[0].fullName}
                  </h2>
                  <p>
                    {player.people[0].primaryPosition.name} -{" "}
                    {player.people[0].primaryPosition.type}
                  </p>
                  <h3>{player.people[0].primaryNumber}</h3>
                  <p>{player.people[0].currentTeam.name}</p>
                  <p>{player.people[0].currentTeam.abbreviation}</p>
                </Box>
              </Box>
            );
          })
        ) : (
          <p>Add new players</p>
        )}
      </Box>
    </Box>
  );
};
