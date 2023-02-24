import { Box } from "@material-ui/core";
import React from "react";
import { useQuery } from "react-query";
import { TeamLogo } from "../../Images/TeamLogo";
import useStyles from "./style";

export const Standings = () => {
  const classes = useStyles();

  async function stand() {
    const response = await fetch(
      "https://statsapi.web.nhl.com/api/v1/standings"
    );
    const data = await response.json();
    return data;
  }

  const { data, status } = useQuery("Standings", stand, {
    enabled: true,
    refetchOnWindowFocus: false,
  });

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "error") {
    return <p>Error</p>;
  }

  return (
    <Box className={classes.root}>
      <h1 className={classes.mainHeader}>Standings</h1>
      {data.records.map((record: any) => {
        return (
          <Box>
            <h2 className={classes.header}>{record.division.name}</h2>
            {record.teamRecords.map((team: any) => {
              return (
                <Box className={classes.teams}>
                  <TeamLogo
                    team={team.team.name}
                    teamId={team.team.name}
                    classProp={classes.images}
                  />
                  <Box className={classes.team}>
                    <Box className={classes.textBox}>
                        <h3>Points</h3>
                      <p className={classes.numbers}>{team.points}</p>
                    </Box>
                    <Box className={classes.textBox}>
                        <h3>Wins</h3>
                      <p className={classes.numbers}>{team.leagueRecord.wins}</p>
                    </Box>
                    <Box className={classes.textBox}>
                        <h3>Losses</h3>
                      <p className={classes.numbers}>{team.leagueRecord.losses}</p>
                    </Box>
                    <Box className={classes.textBox}>
                        <h3>Overtime Losses</h3>
                      <p className={classes.numbers}>{team.leagueRecord.ot}</p>
                    </Box>
                    <Box className={classes.textBox}>
                        <h3>Games Played</h3>
                      <p className={classes.numbers}>{team.gamesPlayed}</p>
                    </Box>
                    <Box className={classes.textBox}>
                        <h3>Streak</h3>
                      <p className={classes.numbers}>{team.streak.streakCode}</p>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        );
      })}
      {/* {schedule.dates.map((date) => {
                    return date.games.map((game) => {
                      if (game.teams.home.team.id === team.id || game.teams.away.team.id === team.id) {
                        wins.push({team: team.name, wins: game.teams.home.leagueRecord.wins})
                        return console.log(team.name, wins)
                      }
                    });
                  })} */}
    </Box>
  );
};
