import React, { useContext } from "react";
import { TeamsContext } from "../Context/TeamProvider";

interface props {
  team: string;
  teamId: string;
  classProp: string;
}

export const TeamLogo = (props: props) => {
  const {
    Boston_Bruins,
    Buffalo_Sabres,
    Detroit_Red_Wings,
    Florida_Panthers,
    Montreal_Canadiens,
    Ottawa_Senators,
    Tampa_Bay_Lightning,
    Toronto_Maple_Leafs,
    Carolina_Hurricanes,
    Columbus_Blue_Jackets,
    New_Jersey_Devils,
    New_York_Islanders,
    New_York_Rangers,
    Philadelphia_Flyers,
    Pittsburgh_Penguins,
    Washington_Capitals,
    Chicago_Blackhawks,
    Colorado_Avalanche,
    Dallas_Stars,
    Minnesota_Wild,
    Nashville_Predators,
    St_Louis_Blues,
    Winnipeg_Jets,
    Anaheim_Ducks,
    Arizona_Coyotes,
    Calgary_Flames,
    Edmonton_Oilers,
    Los_Angeles_Kings,
    San_Jose_Sharks,
    Seattle_Kraken,
    Vancouver_Canucks,
    Vegas_Golden_Knights,
  } = useContext(TeamsContext);

  function switchTeams(team: string, teamId: string) {
    switch (team) {
      case "Boston Bruins":
        return (
          <img
            key={`Boston_Bruins-${teamId}`}
            className={props.classProp}
            src={Boston_Bruins}
            alt="Boston Bruins"
          />
        );
      case "Buffalo Sabres":
        return (
          <img
            key={`Buffalo_Sabres-${teamId}`}
            className={props.classProp}
            src={Buffalo_Sabres}
            alt="Buffalo Sabres"
          />
        );
      case "Detroit Red Wings":
        return (
          <img
            key={`Detroit_Red_Wings-${teamId}`}
            className={props.classProp}
            src={Detroit_Red_Wings}
            alt="Detroit Red Wings"
          />
        );
      case "Florida Panthers":
        return (
          <img
            key={`Florida_Panthers-${teamId}`}
            className={props.classProp}
            src={Florida_Panthers}
            alt="Florida Panthers"
          />
        );
      case "Montréal Canadiens":
        return (
          <img
            key={`Montreal_Canadiens-${teamId}`}
            className={props.classProp}
            src={Montreal_Canadiens}
            alt="Montreal Canadiens"
          />
        );
      case "Ottawa Senators":
        return (
          <img
            key={`Ottawa_Senators-${teamId}`}
            className={props.classProp}
            src={Ottawa_Senators}
            alt="Ottawa Senators"
          />
        );
      case "Tampa Bay Lightning":
        return (
          <img
            key={`Tampa_Bay_Lightning-${teamId}`}
            className={props.classProp}
            src={Tampa_Bay_Lightning}
            alt="Tampa Bay Lightning"
          />
        );
      case "Toronto Maple Leafs":
        return (
          <img
            key={`Toronto_Maple_Leafs-${teamId}`}
            className={props.classProp}
            src={Toronto_Maple_Leafs}
            alt="Toronto Maple Leafs"
          />
        );
      case "Carolina Hurricanes":
        return (
          <img
            className={props.classProp}
            key={`Carolina_Hurricanes-${teamId}`}
            src={Carolina_Hurricanes}
            alt="Carolina Hurricanes"
          />
        );
      case "Columbus Blue Jackets":
        return (
          <img
            className={props.classProp}
            key={`Columbus_Blue_Jackets-${teamId}`}
            src={Columbus_Blue_Jackets}
            alt="Columbus Blue Jackets"
          />
        );
      case "New Jersey Devils":
        return (
          <img
            className={props.classProp}
            key={`New_Jersey_Devils-${teamId}`}
            src={New_Jersey_Devils}
            alt="New Jersey Devils"
          />
        );
      case "New York Islanders":
        return (
          <img
            className={props.classProp}
            key={`New_York_Islanders-${teamId}`}
            src={New_York_Islanders}
            alt="New York Islanders"
          />
        );
      case "New York Rangers":
        return (
          <img
            className={props.classProp}
            key={`New_York_Rangers-${teamId}`}
            src={New_York_Rangers}
            alt="New York Rangers"
          />
        );
      case "Philadelphia Flyers":
        return (
          <img
            className={props.classProp}
            key={`Philadelphia_Flyers-${teamId}`}
            src={Philadelphia_Flyers}
            alt="Philadelphia Flyers"
          />
        );
      case "Pittsburgh Penguins":
        return (
          <img
            className={props.classProp}
            key={`Pittsburgh_Penguins-${teamId}`}
            src={Pittsburgh_Penguins}
            alt="Pittsburgh Penguins"
          />
        );
      case "Washington Capitals":
        return (
          <img
            className={props.classProp}
            key={`Washington_Capitals-${teamId}`}
            src={Washington_Capitals}
            alt="Washington Capitals"
          />
        );
      case "Chicago Blackhawks":
        return (
          <img
            className={props.classProp}
            key={`Chicago_Blackhawks-${teamId}`}
            src={Chicago_Blackhawks}
            alt="Chicago Blackhawks"
          />
        );
      case "Colorado Avalanche":
        return (
          <img
            className={props.classProp}
            key={`Colorado_Avalanche-${teamId}`}
            src={Colorado_Avalanche}
            alt="Colorado Avalanche"
          />
        );
      case "Dallas Stars":
        return (
          <img
            className={props.classProp}
            key={`Dallas_Stars-${teamId}`}
            src={Dallas_Stars}
            alt="Dallas Stars"
          />
        );
      case "Minnesota Wild":
        return (
          <img
            className={props.classProp}
            key={`Minnesota_Wild-${teamId}`}
            src={Minnesota_Wild}
            alt="Minnesota Wild"
          />
        );
      case "Nashville Predators":
        return (
          <img
            className={props.classProp}
            key={`Nashville_Predators-${teamId}`}
            src={Nashville_Predators}
            alt="Nashville Predators"
          />
        );
      case "St. Louis Blues":
        return (
          <img
            className={props.classProp}
            key={`St_Louis_Blues-${teamId}`}
            src={St_Louis_Blues}
            alt="St. Louis Blues"
          />
        );
      case "Winnipeg Jets":
        return (
          <img
            className={props.classProp}
            key={`Winnipeg_Jets-${teamId}`}
            src={Winnipeg_Jets}
            alt="Winnipeg Jets"
          />
        );
      case "Anaheim Ducks":
        return (
          <img
            className={props.classProp}
            key={`Anaheim_Ducks-${teamId}`}
            src={Anaheim_Ducks}
            alt="Anaheim Ducks"
          />
        );
      case "Arizona Coyotes":
        return (
          <img
            className={props.classProp}
            key={`Arizona_Coyotes-${teamId}`}
            src={Arizona_Coyotes}
            alt="Arizona Coyotes"
          />
        );
      case "Calgary Flames":
        return (
          <img
            className={props.classProp}
            key={`Calgary_Flames-${teamId}`}
            src={Calgary_Flames}
            alt="Calgary Flames"
          />
        );
      case "Edmonton Oilers":
        return (
          <img
            className={props.classProp}
            key={`Edmonton_Oilers-${teamId}`}
            src={Edmonton_Oilers}
            alt="Edmonton Oilers"
          />
        );
      case "Los Angeles Kings":
        return (
          <img
            className={props.classProp}
            key={`Los_Angeles_Kings-${teamId}`}
            src={Los_Angeles_Kings}
            alt="Los Angeles Kings"
          />
        );
      case "San Jose Sharks":
        return (
          <img
            className={props.classProp}
            key={`San_Jose_Sharks-${teamId}`}
            src={San_Jose_Sharks}
            alt="San Jose Sharks"
          />
        );
      case "Vancouver Canucks":
        return (
          <img
            className={props.classProp}
            key={`Vancouver_Canucks-${teamId}`}
            src={Vancouver_Canucks}
            alt="Vancouver Canucks"
          />
        );
      case "Vegas Golden Knights":
        return (
          <img
            className={props.classProp}
            key={`Vegas_Golden_Knights-${teamId}`}
            src={Vegas_Golden_Knights}
            alt="Vegas Golden Knights"
          />
        );
      case "Seattle Kraken":
        return (
          <img
            className={props.classProp}
            key={`Seattle_Kraken-${props.teamId}`}
            src={Seattle_Kraken}
            alt="Seattle Kraken"
          />
        );
      default:
        return <img />;    }
  }
  return switchTeams(props.team, props.teamId);
};
