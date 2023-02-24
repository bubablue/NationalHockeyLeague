import { Box, Button, Card } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useCallback } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { TeamLogo } from "../../Images/TeamLogo";
import Stats from "./Game/Stats";
import useStyles from "./styles";
import { Players } from "./Game/Players";

export const TeamStats = () => {
  const { teamId } = useParams();
  const NHL_URL = `https://statsapi.web.nhl.com/api/v1/schedule?startDate=2023-01-01&endDate=2023-12-31&hydrate=team,linescore,metadata,seriesSummary(series)&teamId=${teamId}&site=en_nhlCA&expand=schedule.teams,schedule.linescore,schedule.broadcasts.all,schedule.ticket,schedule.game.seriesSummary`;
  const classes = useStyles();

  const [display, setDisplay] = React.useState<boolean>(false);
  const [data, setData] = React.useState<any>([]);

  let getStats = useCallback(
    async (url: string) => {
      const response = await axios.get(url);
      setData(response.data.dates);
      return response.data;
    },
    [teamId]
  );

  let getTeamName = useCallback(async () => {
    const response = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/teams/${teamId}`
    );
    return response.data.teams[0].name;
  }, [teamId]);

  const { data: teamName } = useQuery(["Team", teamId], () => getTeamName(), {
    enabled: true,
    refetchOnWindowFocus: false,
  });
  
  const {
    status: statsStatus,
    isLoading,
  } = useQuery(["Schedule", teamId], () => getStats(NHL_URL), {
    enabled: true,
    refetchOnWindowFocus: false,
    refetchInterval: 5000,
    refetchOnMount: true,
  });

  useEffect(() => {
    getStats(NHL_URL);
  }, [getStats]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (statsStatus === "error") {
    return <p>Error</p>;
  }

  const handleChange = () => {
    setDisplay(!display);
  };

  return (
    <Box className={classes.root}>
      <h1 className={classes.title}>Team Stats</h1>
      <Box className={classes.subtitle}>
        <h2>{teamName}</h2>
      </Box>
      <Box className={classes.section}>
        <h2>Team Stats</h2>
        {
          <Box>
            {data.map((stats: any) => {
              return (
                <Box>
                  {stats.games.map((game: any) => {
                    return (
                      <Card className={classes.accordion}>
                        <Box className={classes.teams}>
                          <Box className={classes.date} onClick={handleChange}>
                            <h3>
                              {game.teams.home.team.name} -{" "}
                              {game.teams.away.team.name}
                            </h3>
                            <p style={{ color: "grey" }}>
                              {new Date(game.gameDate).toLocaleDateString(
                                "en-US",
                                {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                                }
                              )}
                            </p>
                          </Box>
                          {display ? (
                            <Box>
                              <h3
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <TeamLogo
                                  classProp={classes.images}
                                  team={game.teams.home.team.name}
                                  teamId={game.teams.home.team.id}
                                />
                                <Box className={classes.score}>
                                  {game.teams.home.score} -{" "}
                                  {game.teams.away.score}
                                </Box>
                                <TeamLogo
                                  classProp={classes.images}
                                  team={game.teams.away.team.name}
                                  teamId={game.teams.home.team.id}
                                />
                              </h3>
                            </Box>
                          ) : (
                            <Box className={classes.components}>
                              <h1>Stats</h1>
                              <Stats gamePk={{ gamePk: game.gamePk }}>
                                <Players gamePk={{ gamePk: game.gamePk }}>
                                  <Box className={classes.score}>
                                    {game.teams.home.score} -{" "}
                                    {game.teams.away.score}
                                  </Box>
                                </Players>
                              </Stats>
                            </Box>
                          )}
                        </Box>
                        <Box>
                          {game.tickets?.map((ticket: any) => {
                            return (
                              game.status.abstractGameState != "Final" && (
                                <Box>
                                  <Button href={ticket.ticketLink} className={classes.link}>
                                    {ticket.ticketType}
                                  </Button>
                                </Box>
                              )
                            );
                          })}
                        </Box>
                      </Card>
                    );
                  })}
                </Box>
              );
            })}
          </Box>
        }
      </Box>
    </Box>
  );
};
