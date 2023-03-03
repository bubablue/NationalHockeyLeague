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

export const PlayersGeneral = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
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
      <div className={classes.section}>
        <h2>Players</h2>
      </div>
      {rows.map((row) => {
        console.log(row);
        return (
          <TableContainer
            component={Paper}
            className={classes.playerStatsPaper}
          >
            <Table aria-label="simple table" className={classes.defaultTable}>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h2>Team</h2>
                  </TableCell>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Position</TableCell>
                  <TableCell align="left">Id</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {row.map((player: any) => {
                  return (
                    <TableRow hover={true}>
                      <TableCell component="th" scope="row">
                        {player.team}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {player.name}
                      </TableCell>
                      <TableCell align="left">{player.position}</TableCell>
                      <TableCell align="left">{player.id}</TableCell>
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
