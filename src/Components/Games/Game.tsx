import { Box, Card } from "@material-ui/core";
import axios from "axios";
import {
  ArcElement,
  Chart as ChartJS,
  Legend,
  LineController,
  LineElement,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import React, { useCallback } from "react";
import { Doughnut } from "react-chartjs-2";
import { useQuery } from "react-query";
import { TeamLogo } from "../../Images/TeamLogo";
import useStyles from "./Styles";
import { useParams } from "react-router-dom";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  ArcElement,
  Tooltip,
  Legend
);

const Game = () => {
  const classes = useStyles();
  const { gameId } = useParams();

  const getStats = useCallback(async () => {
    const url = `https://statsapi.web.nhl.com/api/v1/game/${gameId}/feed/live`;
    const response = await axios.get(url);
    return response.data;
  }, [gameId]);

  const {
    data: data,
    status,
    isLoading,
  } = useQuery(["stats", gameId], getStats, {
    enabled: true,
    refetchOnWindowFocus: false,
    refetchInterval: 5000,
  });
  if (status === "loading" || isLoading) {
    return <p>Loading...</p>;
  }
  if (status === "error") {
    return <p>Error</p>;
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.stats}>
        <Box className={classes.team}>
          <Box className={classes.title}>
            {
              // <h3>{data.liveData.linescore.teams.home.team.name}</h3>
              <TeamLogo
                team={data.liveData.linescore.teams.home.team.name}
                teamId={`${data.gameData.gamePk}${data.gameData.teams.home.id}`}
                classProp={classes.images}
              />
            }
          </Box>
          <Box>
            <Box>
              {
                <Box className={classes.statistics}>
                  <Doughnut
                    className={classes.chart}
                    options={{
                      responsive: true,
                      clip: 100,
                      plugins: {
                        legend: {
                          position: "left",
                          labels: {
                            color: "grey",
                          },
                        },
                      },
                    }}
                    data={{
                      labels: [
                        `Takeaways: ${data.liveData.boxscore.teams.home.teamStats.teamSkaterStats.takeaways}`,
                        `Blocked: ${data.liveData.boxscore.teams.home.teamStats.teamSkaterStats.blocked}`,
                        `Shots: ${data.liveData.boxscore.teams.home.teamStats.teamSkaterStats.shots}`,
                        `Powerplay Opportunities: ${data.liveData.boxscore.teams.home.teamStats.teamSkaterStats.powerPlayOpportunities}`,
                        `Giveaways: ${data.liveData.boxscore.teams.home.teamStats.teamSkaterStats.giveaways}`,
                        `Powerplay Goals: ${data.liveData.boxscore.teams.home.teamStats.teamSkaterStats.powerPlayGoals}`,
                        `Goals: ${data.liveData.linescore.teams.home.goals}`,
                      ],
                      datasets: [
                        {
                          // label: "Count ",
                          data: [
                            data.liveData.boxscore.teams.home.teamStats
                              .teamSkaterStats.takeaways,
                            data.liveData.boxscore.teams.home.teamStats
                              .teamSkaterStats.blocked,
                            data.liveData.boxscore.teams.home.teamStats
                              .teamSkaterStats.shots,
                            data.liveData.boxscore.teams.home.teamStats
                              .teamSkaterStats.powerPlayOpportunities,
                            data.liveData.boxscore.teams.home.teamStats
                              .teamSkaterStats.giveaways,
                            data.liveData.boxscore.teams.home.teamStats
                              .teamSkaterStats.powerPlayGoals,
                            data.liveData.linescore.teams.home.goals,
                          ],
                          borderWidth: 1,
                          backgroundColor: [
                            "darkred",
                            "darkblue",
                            "#FFCE56",
                            "darkorange",
                            "purple",
                            "darkgreen",
                            "black",
                          ],
                        },
                      ],
                    }}
                  />
                </Box>
              }
            </Box>
          </Box>
        </Box>
        <Box className={classes.vs}>
          <h1 style={{ display: "inline" }}>
            {data.liveData.linescore.teams.home.goals} -{" "}
            {data.liveData.linescore.teams.away.goals}
          </h1>
        </Box>
        <Box className={classes.team}>
          <Box className={classes.title}>
            {
              // <h3>{data.liveData.linescore.teams.away.team.name}</h3>
              <TeamLogo
                team={data.liveData.linescore.teams.away.team.name}
                teamId={`${data.gameData.gamePk}${data.gameData.teams.away.id}`}
                classProp={classes.images}
              />
            }
          </Box>
          <Box>
            <Box>
              {
                <Box className={classes.statistics}>
                  <Doughnut
                    className={classes.chart}
                    options={{
                      responsive: true,
                      clip: 100,
                      plugins: {
                        legend: {
                          position: "right",
                          labels: {
                            color: "grey",
                          },
                        },
                      },
                    }}
                    data={{
                      labels: [
                        `Takeaways: ${data.liveData.boxscore.teams.away.teamStats.teamSkaterStats.takeaways}`,
                        `Blocked: ${data.liveData.boxscore.teams.away.teamStats.teamSkaterStats.blocked}`,
                        `Shots: ${data.liveData.boxscore.teams.away.teamStats.teamSkaterStats.shots}`,
                        `Powerplay Opportunities: ${data.liveData.boxscore.teams.away.teamStats.teamSkaterStats.powerPlayOpportunities}`,
                        `Giveaways: ${data.liveData.boxscore.teams.away.teamStats.teamSkaterStats.giveaways}`,
                        `Powerplay Goals: ${data.liveData.boxscore.teams.away.teamStats.teamSkaterStats.powerPlayGoals}`,
                        `Goals: ${data.liveData.linescore.teams.away.goals}`,
                      ],
                      datasets: [
                        {
                          // label: "Count ",
                          data: [
                            data.liveData.boxscore.teams.away.teamStats
                              .teamSkaterStats.takeaways,
                            data.liveData.boxscore.teams.away.teamStats
                              .teamSkaterStats.blocked,
                            data.liveData.boxscore.teams.away.teamStats
                              .teamSkaterStats.shots,
                            data.liveData.boxscore.teams.away.teamStats
                              .teamSkaterStats.powerPlayOpportunities,
                            data.liveData.boxscore.teams.away.teamStats
                              .teamSkaterStats.giveaways,
                            data.liveData.boxscore.teams.away.teamStats
                              .teamSkaterStats.powerPlayGoals,
                            data.liveData.linescore.teams.away.goals,
                          ],
                          borderWidth: 1,
                          backgroundColor: [
                            "darkred",
                            "darkblue",
                            "#FFCE56",
                            "darkorange",
                            "purple",
                            "darkgreen",
                            "black",
                          ],
                        },
                      ],
                    }}
                  />
                </Box>
              }
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Game;
