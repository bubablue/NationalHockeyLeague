import axios from "axios";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { TeamLogo } from "../../Images/TeamLogo";
import useStyles from "./Styles";

export const Teams = () => {
  const NHL_URL = "https://statsapi.web.nhl.com/api/v1/teams";
  const [teams, setTeams] = React.useState<any[]>([]);
  const navigate = useNavigate();
  const classes = useStyles({});

  async function getTeams() {
    const response = await axios.get(NHL_URL)
    return response.data.teams;
  }

  const { data, status, error } = useQuery("teams", getTeams);

  useEffect(() => {
    setTeams(data);
  }, [data]);

  const handleClick = () => {
    navigate("/teams");
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.header} onClick={handleClick}>
        NHL TEAMS
      </h1>
      <div className={classes.teams}>
        {teams?.map((team) => (
          <div className={classes.team} key={team.shortName}>
            {/* <a key={team.name} className={classes.names} href={team.officialSiteUrl}> */}
            <a
              key={team.name}
              className={classes.names}
              href={`/teams/${team.id}/stats`}
            >
              <TeamLogo
                classProp={classes.images}
                team={team.name}
                teamId={team.id}
              />
              {team.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
