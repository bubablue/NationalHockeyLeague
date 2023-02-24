import { Box, Button } from "@material-ui/core";
import axios from "axios";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import React, { useCallback, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { useQuery } from "react-query";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { TeamLogo } from "../../Images/TeamLogo";
import useStyles from "./styles";
import { useTeams } from "../../Context/TeamProvider";
import { useTheme } from "@mui/material";
import Colours from "../../Context/Theme/Colours";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const PlayerStats = () => {
  const { statId } = useParams();
  const classes = useStyles();
  const navigate = useNavigate();
  const { state, mode } = useTeams();
  const theme = useTheme();
  // /api/v1/game/2022020823/content
  // /api/v1/game/2022020823/feed/live
  const [hasPlayer, setPlayer] = React.useState<boolean>(false);

  const getPlayerData = useCallback(async () => {
    let response = await axios.get(`http://localhost:3001/players`, {
      params: { user_id: state.user.user.id },
    });
    response.data.map((player: any) => {
      if (player.player_id === statId) {
        setPlayer(true);
      }
    });
    return response.data;
  }, []);

  useEffect(() => {
    getPlayerData();
  }, []);

  const getPlayerStats = useCallback(async () => {
    let response = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/people/${statId}`
    );
    return response.data;
  }, [statId]);

  const getStats = useCallback(async () => {
    const response = await axios.get(
      `https://statsapi.web.nhl.com/api/v1/people/${statId}/stats?stats=gameLog&season=20222023`
    );
    return response.data;
  }, [statId]);

  const { data: player } = useQuery(
    ["player", statId],
    () => getPlayerStats(),
    {
      enabled: true,
      refetchOnWindowFocus: false,
    }
  );

  const { data: teamStats, status: statsStatus } = useQuery(
    ["teamStats", statId],
    () => getStats(),
    {
      enabled: true,
      refetchOnWindowFocus: false,
    }
  );

  const addPlayer = async () => {
    const response = await axios.post("http://localhost:3001/players", {
      user: state.user.user.email,
      user_id: state.user.user.id,
      player_id: statId,
    });
    getPlayerData()
    return response.data;
  };

  const options = {
    plugins: {
      title: {
        display: false,
        text: "Chart.js Bar Chart - Stacked",
      },
      legend: {
        labels: {
          color: Colours.BW_02[theme.palette.mode],
        },
        display: true,
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  if (statsStatus === "loading") {
    return <p>Loading...</p>;
  }
  if (statsStatus === "error") {
    return <p>Error</p>;
  }

  return (
    <div>
      <Box className={classes.root}>
        <h1 className={classes.header}>{player.people[0].fullName}</h1>
        <Box className={classes.team}>
          <TeamLogo
            team={player.people[0].currentTeam.name}
            teamId={player.people[0].currentTeam.name}
            classProp={classes.images}
          />
          <Box className={classes.textBox}>
            <p>Position: {player.people[0].primaryPosition.name}</p>
            <p>Height: {player.people[0].height}</p>
            <p>Weight: {player.people[0].weight}</p>
            <p>Birthdate: {player.people[0].birthDate}</p>
            <p>Birthplace: {player.people[0].birthCity}</p>
            <p>Birth Country: {player.people[0].birthCountry}</p>
            <p>Shoots: {player.people[0].shootsCatches}</p>
            <p>Number: {player.people[0].primaryNumber}</p>
            <p>Active: {player.people[0].active ? "Yes" : "No"}</p>
          </Box>
        </Box>
      </Box>
      {teamStats.stats[0].splits.map((stats: any) => {
        return (
          <Box className={classes.teams}>
            <h2 className={classes.header}>{stats.date}</h2>
            <Box className={classes.team}>
              <TeamLogo
                team={stats.team.name}
                teamId={stats.team.name}
                classProp={classes.images}
              />{" "}
              VS{" "}
              <TeamLogo
                team={stats.opponent.name}
                teamId={stats.team.name}
                classProp={classes.images}
              />
            </Box>
            <Box className={classes.team}>
              <Bar
                options={options}
                data={{
                  labels: [
                    `Assists`,
                    `Goals`,
                    `Blocked`,
                    `Hits`,
                    `Over time goals`,
                    `Powerplay goals`,
                  ],
                  datasets: [
                    {
                      label: "Stats",
                      data: [
                        stats.stat.assists,
                        stats.stat.goals,
                        stats.stat.blocked,
                        stats.stat.hits,
                        stats.stat.overTimeGoals,
                        stats.stat.powerPlayGoals,
                      ],
                      backgroundColor: "green",
                    },
                  ],
                }}
              />
              <Button className={classes.gameDetail}>
                <Link
                  to={`/games/${stats.game.gamePk}`}
                  className={classes.link}
                >
                  Game Details
                </Link>
              </Button>
              {!hasPlayer && <Button
                onClick={(e) => addPlayer()}
                className={classes.addPlayer}
              >
                Add player to my team
              </Button>}
            </Box>
            <Box className={classes.textBox}>
              <p>Goals: {stats.stat.goals}</p>
              <p>Shots: {stats.stat.shots}</p>
              <p>Assists: {stats.stat.assists}</p>
              <p>Blocked: {stats.stat.blocked}</p>
              <p>Hits: {stats.stat.hits}</p>
              <p>Time on Ice: {stats.stat.evenTimeOnIce}</p>
              <p>Game winning goals: {stats.stat.gameWinningGoals}</p>
              <p>Games: {stats.stat.games}</p>
              <p>Over time goals: {stats.stat.overTimeGoals}</p>
              <p>Penalty minutes: {stats.stat.penaltyMinutes}</p>
              <p>Pim: {stats.stat.pim}</p>
              <p>Points: {stats.stat.points}</p>
              <p>Plus minus: {stats.stat.plusMinus}</p>
              <p>Powe play goals: {stats.stat.powerPlayGoals}</p>
              <p>Power play points: {stats.stat.powerPlayPoints}</p>
              <p>Power play time on ice: {stats.stat.powerPlayTimeOnIce}</p>
              <p>Shifts: {stats.stat.shifts}</p>
              <p>Short handed goals: {stats.stat.shortHandedGoals}</p>
              <p>short handed points: {stats.stat.shortHandedPoints}</p>
              <p>Short handed time on ice: {stats.stat.shortHandedTimeOnIce}</p>
            </Box>
          </Box>
        );
      })}
    </div>
  );
};
