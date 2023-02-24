import { Box } from "@material-ui/core";
import React, { useEffect } from "react";
import useStyles from "./PlayerStyles";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

interface Props {
  gamePk: any;
  children?: any;
}

export const Players = (props: Props) => {
  const classes = useStyles();
  const [data, setData] = React.useState<any>([]);
  const navigate = useNavigate();
  const { gamePk } = props;

  async function getStats() {
    const url = `https://statsapi.web.nhl.com/api/v1/game/${gamePk.gamePk}/feed/live`;
    const response = await axios.get(url);
    return response.data;
  }

  const [loading, setLoading] = React.useState<boolean>(false);
  const [status, setStatus] = React.useState<string>("");

  const {
    data: playersData,
    status: reqStatus,
    isLoading,
  } = useQuery(["stats", gamePk], getStats, {
    enabled: true,
    refetchOnWindowFocus: false,
    refetchInterval: 5000,
  });

  useEffect(() => {
    if (reqStatus === "loading" || isLoading) {
      setLoading(true);
    }
    if (reqStatus === "success") {
      setStatus("success");
    }
    if (reqStatus === "error") {
      setStatus("error");
    }
    return () => {
      setLoading(false);
      setStatus("");
    };
  }, [isLoading, status]);

  useEffect(() => {
    if (playersData) {
      setData(playersData);
    }
  }, [playersData]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (status === "error") {
    return <p>Error</p>;
  }

  return (
    <Box className={classes.stats}>
      {/* <h1 className={classes.title}>{data.gamePk}</h1> */}
      <Box className={classes.team}>
        <Box className={classes.title}>
          {data.liveData &&
            data.liveData.linescore &&
            data.liveData.linescore.teams &&
            data.liveData.linescore.teams.home && (
              <h3>{data.liveData.linescore.teams.home.team.name}</h3>
            )}
        </Box>
        <Box className={classes.players}>
          <Box>
            {data.liveData &&
              data.liveData.boxscore &&
              data.liveData.boxscore.teams &&
              Object.keys(data.liveData.boxscore.teams.home.players).length &&
              Object.keys(data.liveData.boxscore.teams.home.players).map(
                (key) => {
                  return (
                    <p
                      onClick={() =>
                        navigate(
                          `/stats/${data.liveData.boxscore.teams.home.players[key].person.id}`
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {
                        data.liveData.boxscore.teams.home.players[key].person
                          .fullName
                      }{" "}
                      {
                        data.liveData.boxscore.teams.home.players[key]
                          .jerseyNumber
                      }
                    </p>
                  );
                }
              )}
          </Box>
        </Box>
      </Box>
      {props.children}
      <Box className={classes.team}>
        <Box className={classes.title}>
          {data.liveData &&
            data.liveData.linescore &&
            data.liveData.linescore.teams &&
            data.liveData.linescore.teams.away && (
              <h3>{data.liveData.linescore.teams.away.team.name}</h3>
            )}
        </Box>
        <Box className={classes.players}>
          <Box>
            {data.liveData &&
              data.liveData.boxscore &&
              data.liveData.boxscore.teams &&
              Object.keys(data.liveData.boxscore.teams.away.players).length &&
              Object.keys(data.liveData.boxscore.teams.away.players).map(
                (key) => {
                  return (
                    <p
                      onClick={() =>
                        navigate(
                          `/stats/${data.liveData.boxscore.teams.away.players[key].person.id}`
                        )
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {
                        data.liveData.boxscore.teams.away.players[key].person
                          .fullName
                      }{" "}
                      {
                        data.liveData.boxscore.teams.away.players[key]
                          .jerseyNumber
                      }
                    </p>
                  );
                }
              )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
