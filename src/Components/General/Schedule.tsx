import { Accordion, Box, Button } from "@material-ui/core";
import React, { useEffect, useState, useCallback } from "react";
import useStyles from "./Styles";
import { TeamLogo } from "../../Images/TeamLogo";
import { useQuery } from "react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Schedule = () => {
  const classes = useStyles({});
  const navigate = useNavigate();
  const [schedule, setSchedule] = useState<any>([]);
  const [dates, setDates] = useState<any>([]);
  const array = new Array(100).fill(true);
  const [expanded, setExpanded] = useState<boolean[]>(array);
  const getSchedule = useCallback(async () => {
    const NHL_URL =
      "https://statsapi.web.nhl.com/api/v1/schedule?startDate=2023-01-01&endDate=2023-12-31&hydrate=team,linescore,metadata,seriesSummary(series)";
    await axios
      .get(NHL_URL)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        // setSchedule(data);
        setDates(data.dates);
      });
    // return response.data;
  }, []);

  const {
    data: scheduleData,
    status: _reqStatus,
    isLoading,
  } = useQuery(["schedule"], getSchedule, {
    refetchInterval: 5000,
    // onSuccess: (data: any) => {
    //   const newData: any = scheduleData
    //   setDates(newData.dates)
    // },
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }

  const isUpToDate = (date: { date: string | number | Date }) => {
    console.log(new Date(Date.now()).getUTCDate());
    return new Date(Date.now()).getMonth() > new Date(date.date).getMonth() ||
      (new Date(Date.now()).getMonth() === new Date(date.date).getMonth() &&
        new Date(Date.now()).getUTCDate() - 2 >=
          new Date(date.date).getUTCDate())
      ? true
      : false;
  };

  const isToday = (date: { date: string | number | Date }) => {
    return new Date(Date.now()).getUTCFullYear() ===
      new Date(date.date).getUTCFullYear() &&
      new Date(Date.now()).getMonth() === new Date(date.date).getMonth() &&
      new Date(Date.now()).getUTCDate() === new Date(date.date).getUTCDate()
      ? true
      : false;
  };

  const scheduled = (game: { gameDate: string | number | Date }) => {
    return new Date(Date.now()).getUTCFullYear() ===
      new Date(game.gameDate).getUTCFullYear() &&
      new Date(Date.now()).getMonth() === new Date(game.gameDate).getMonth() &&
      new Date(Date.now()).getUTCDate() === new Date(game.gameDate).getUTCDate()
      ? true
      : false;
  };

  const setGames = () => {
    dates.map((date: any) => {
      setExpanded((prev) => {
        const newExpanded = [...prev];
        const oldExpanded = [...prev];
        newExpanded[dates.indexOf(date)] = !newExpanded[dates.indexOf(date)];
        return isUpToDate(date) ? newExpanded : oldExpanded;
      });
    });
  };

  const status = (game: any) => {
    switch (game.status.abstractGameState) {
      case "Live":
        return (
          <Box>
            <p
              className={classes.live}
              onClick={() => navigate(`/games/${game.gamePk}`)}
            >
              LIVE
            </p>
            <p className={classes.score}>
              {game.teams.home.score} - {game.teams.away.score}
            </p>
          </Box>
        );
      case "Final":
        return (
          <p className={classes.score}>
            {game.teams.home.score} - {game.teams.away.score}
          </p>
        );
      case "Postponed":
        return <p>Not Played Yet</p>;
      case "Cancelled":
        return <p>Not Available</p>;
      case "Preview":
        return <p></p>;
      default:
        return <p>Not Available</p>;
    }
  };

  const scheduledGames = (date: any) => {
    return date.games.map(
      (game: { gamePk?: any; teams?: any; gameDate: any; status?: any }) => {
        return (
          <Box
            className={classes.game}
            key={`game-${game.gamePk}`}
            id={`schedule-${game.gamePk}`}
          >
            <p className={classes.teams}>
              {game.teams.home.team.name} vs {game.teams.away.team.name}
            </p>
            <Box className={classes.versus}>
              <TeamLogo
                team={game.teams.home.team.name}
                teamId={game.teams.home.team.id}
                classProp={classes.images}
              />
              <p>VS</p>
              <TeamLogo
                team={game.teams.away.team.name}
                teamId={game.teams.away.team.id}
                classProp={classes.images}
              />
            </Box>
            <p className={classes.time}>
              {`${new Date(game.gameDate).getHours()}:${
                new Date(game.gameDate).getMinutes() === 0
                  ? "00"
                  : new Date(game.gameDate).getMinutes()
              }`}
            </p>
            {status(game)}
            {(scheduled(game) ||
              game.status.abstractGameState === "Preview") && (
              <Button
                className={classes.link}
                onClick={() => {
                  window.open("https://www.espnplayer.com/home", "_blank");
                }}
              >
                Watch Live on ESPN
              </Button>
            )}
          </Box>
        );
      }
    );
  };

  return (
    <Box className={classes.root}>
      <Box>
        <Box className={classes.titleBox}>
          <h1 className={classes.title}>Schedule</h1>
        </Box>
        {dates.map((date: any, index: any) => {
          return (
            isToday(date) && (
              <Box className={classes.section}>
                <Accordion
                  expanded={true}
                  className={classes.accordion}
                  key={`accordion-${date.date}`}
                >
                  <Box
                    className={classes.date}
                    onClick={() => {
                      setGames();
                    }}
                    key={`title-${date.date}`}
                  >
                    <h2>Available Today</h2>
                  </Box>
                  <Box
                    className={classes.schedule}
                    key={`schedule-${date.date}`}
                  >
                    {scheduledGames(date)}
                  </Box>
                </Accordion>
              </Box>
            )
          );
        })}
      </Box>
      <Box className={classes.titleBox}>
        <h2 className={classes.title}>Scheduled Games</h2>
      </Box>
      <Box className={classes.section}>
        {dates.map((date: any, index: number) => {
          return (
            <Accordion
              expanded={expanded[index]}
              className={classes.accordion}
              key={`accordion-${index}`}
            >
              <Box
                className={classes.date}
                onClick={() => {
                  setExpanded((prev) => {
                    const newExpanded = [...prev];
                    newExpanded[index] = !newExpanded[index];
                    return newExpanded;
                  });
                }}
                key={`title-${index}`}
              >
                <h2 key={`date-${index}`}>{date.date}</h2>
              </Box>
              <Box className={classes.schedule} key={`schedule-${index}`}>
                {scheduledGames(date)}
              </Box>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
};

export default Schedule;
