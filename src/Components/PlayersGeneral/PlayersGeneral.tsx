import React, { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useStyles from "./Styles";
import axios from "axios";
import { useQuery } from "react-query";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";
import { TeamLogo } from "../../Images/TeamLogo";

export const PlayersGeneral = () => {
  const [teams, setTeams] = React.useState<any[]>([]);

  const NHL_URL =
    "https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster";
  const navigate = useNavigate();
  const classes = useStyles();

  async function getTeams() {
    const response = await axios.get(NHL_URL);
    return response.data.teams;
  }

  const { data, status, error } = useQuery("teams", getTeams, {
    onSuccess: (data) => {
      setTeams(data);
    },
  });

  useEffect(() => {
    getTeams();
  }, []);

  const players = useCallback(async (id: string) => {
    const response = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/people/${id}/stats?stats=statsSingleSeason&season=20192020`
    );
    return response.data;
  }, []);

  const createData = (
    team: string,
    name: string | number,
    position: string,
    id: number
  ) => {
    return {
      team,
      name,
      position,
      id,
    };
  };

  const handleClick = (id: number) => {
    navigate(`/stats/${id}`);
  };

  const rows = React.useMemo(
    () =>
      teams.map((team: any) => {
        return team.roster.roster.map((player: any) => {
          return createData(
            team.name,
            player.person.fullName,
            player.position.name,
            player.person.id
          );
        });
      }),
    [teams]
  );

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Players</h1>
      {rows.map((row: any, index: number) => {
        return (
          <TableContainer
            component={Paper}
            className={classes.playerStatsPaper}
          >
            {/* <h1 className={classes.title}>{teams[index].name}</h1> */}
            <TeamLogo
              team={teams[index].name}
              teamId={teams[index].name}
              classProp={classes.images}
            />
            <Table aria-label="simple table" className={classes.defaultTable}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.defaultTable}>
                    <h2>Team</h2>
                  </TableCell>
                  <TableCell className={classes.defaultTable} align="left">
                    Name
                  </TableCell>
                  <TableCell className={classes.defaultTable} align="left">
                    Position
                  </TableCell>
                  <TableCell className={classes.defaultTable} align="left">
                    Id
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.map((player: any) => {
                  return (
                    <TableRow hover={true}>
                      <TableCell component="th" scope="row" className={classes.defaultTable}>
                        {player.team}
                      </TableCell>
                      <TableCell component="th" scope="row" className={classes.defaultTable}>
                        {player.name}
                      </TableCell>
                      <TableCell align="left" className={classes.defaultTable}>{player.position}</TableCell>
                      <TableCell
                        align="left"
                        className={classes.defaultTable}
                        onClick={() => handleClick(player.id)}
                        style={{ cursor: "pointer" }}
                      >
                        {player.id}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        );
      })}
    </div>
  );
};
