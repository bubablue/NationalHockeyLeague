import React, { createContext, useContext, useState } from "react";
import Anaheim_Ducks from "../Logos/Icons/Anaheim_Ducks.png";
import Arizona_Coyotes from "../Logos/Icons/Arizona_Coyotes.png";
import Boston_Bruins from "../Logos/Icons/Boston_Bruins.png";
import Buffalo_Sabres from "../Logos/Icons/Buffalo_Sabres.png";
import Calgary_Flames from "../Logos/Icons/Calgary_Flames.png";
import Carolina_Hurricanes from "../Logos/Icons/Carolina_Hurricanes.png";
import Chicago_Blackhawks from "../Logos/Icons/Chicago_Blackhawks.png";
import Colorado_Avalanche from "../Logos/Icons/Colorado_Avalanche.png";
import Columbus_Blue_Jackets from "../Logos/Icons/Columbus_Blue_Jackets.png";
import Dallas_Stars from "../Logos/Icons/Dallas_Stars.png";
import Detroit_Red_Wings from "../Logos/Icons/Detroit_Red_Wings.png";
import Edmonton_Oilers from "../Logos/Icons/Edmonton_Oilers.png";
import Florida_Panthers from "../Logos/Icons/Florida_Panthers.png";
import Los_Angeles_Kings from "../Logos/Icons/Los_Angeles_Kings.png";
import Minnesota_Wild from "../Logos/Icons/Minnesota_Wild.png";
import Montreal_Canadiens from "../Logos/Icons/Montreal_Canadiens.png";
import Nashville_Predators from "../Logos/Icons/Nashville_Predators.png";
import New_Jersey_Devils from "../Logos/Icons/New_Jersey_Devils.png";
import New_York_Islanders from "../Logos/Icons/New_York_Islanders.png";
import New_York_Rangers from "../Logos/Icons/New_York_Rangers.png";
import Ottawa_Senators from "../Logos/Icons/Ottawa_Senators.png";
import Philadelphia_Flyers from "../Logos/Icons/Philadelphia_Flyers.png";
import Pittsburgh_Penguins from "../Logos/Icons/Pittsburgh_Penguins.png";
import San_Jose_Sharks from "../Logos/Icons/San_Jose_Sharks.png";
import Seattle_Kraken from "../Logos/Icons/Seattle_Kraken.png";
import St_Louis_Blues from "../Logos/Icons/St_Louis_Blues.png";
import Tampa_Bay_Lightning from "../Logos/Icons/Tampa_Bay_Lightning.png";
import Toronto_Maple_Leafs from "../Logos/Icons/Toronto_Maple_Leafs.png";
import Vancouver_Canucks from "../Logos/Icons/Vancouver_Canucks.png";
import Vegas_Golden_Knights from "../Logos/Icons/Vegas_Golden_Knights.png";
import Washington_Capitals from "../Logos/Icons/Washington_Capitals.png";
import Winnipeg_Jets from "../Logos/Icons/Winnipeg_Jets.png";

export interface IAppcontext {
  Anaheim_Ducks: string;
  Arizona_Coyotes: string;
  Boston_Bruins: string;
  Buffalo_Sabres: string;
  Calgary_Flames: string;
  Carolina_Hurricanes: string;
  Chicago_Blackhawks: string;
  Colorado_Avalanche: string;
  Columbus_Blue_Jackets: string;
  Dallas_Stars: string;
  Detroit_Red_Wings: string;
  Edmonton_Oilers: string;
  Florida_Panthers: string;
  Los_Angeles_Kings: string;
  Minnesota_Wild: string;
  Montreal_Canadiens: string;
  Nashville_Predators: string;
  New_Jersey_Devils: string;
  New_York_Islanders: string;
  New_York_Rangers: string;
  Ottawa_Senators: string;
  Philadelphia_Flyers: string;
  Pittsburgh_Penguins: string;
  San_Jose_Sharks: string;
  Seattle_Kraken: string;
  St_Louis_Blues: string;
  Tampa_Bay_Lightning: string;
  Toronto_Maple_Leafs: string;
  Vancouver_Canucks: string;
  Vegas_Golden_Knights: string;
  Washington_Capitals: string;
  Winnipeg_Jets: string;
  mode: "dark" | "light";
  setMode: (mode: "dark" | "light") => void;
  state: any;
}

export const TeamsContext = createContext<IAppcontext>({
  Anaheim_Ducks,
  Arizona_Coyotes,
  Boston_Bruins,
  Buffalo_Sabres,
  Calgary_Flames,
  Carolina_Hurricanes,
  Chicago_Blackhawks,
  Colorado_Avalanche,
  Columbus_Blue_Jackets,
  Dallas_Stars,
  Detroit_Red_Wings,
  Edmonton_Oilers,
  Florida_Panthers,
  Los_Angeles_Kings,
  Minnesota_Wild,
  Montreal_Canadiens,
  Nashville_Predators,
  New_Jersey_Devils,
  New_York_Islanders,
  New_York_Rangers,
  Ottawa_Senators,
  Philadelphia_Flyers,
  Pittsburgh_Penguins,
  San_Jose_Sharks,
  Seattle_Kraken,
  St_Louis_Blues,
  Tampa_Bay_Lightning,
  Toronto_Maple_Leafs,
  Vancouver_Canucks,
  Vegas_Golden_Knights,
  Washington_Capitals,
  Winnipeg_Jets,
  mode: "light",
  setMode: () => {},
  state: {},
});

export const TeamsProvider = (props: { children?: React.ReactNode, state: any }) => {
  const [mode, setMode] = useState<"dark" | "light">("light");

  const toggleDarkMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark'
    setMode(newMode)
    if (typeof window !== 'undefined') {
      localStorage.setItem('UserTheme', newMode)
    }
    // document.documentElement.style.removeProperty('background')
    // document.body.style.removeProperty('background')
  }

  React.useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      localStorage.getItem('UserTheme')
    ) {
      const newMode = localStorage.getItem('UserTheme')
      if (newMode === 'light' || newMode === 'dark') {
        setMode(newMode)
      }
    }
  }, [])
  return (
    <TeamsContext.Provider
      value={{
        Anaheim_Ducks,
        Arizona_Coyotes,
        Boston_Bruins,
        Buffalo_Sabres,
        Calgary_Flames,
        Carolina_Hurricanes,
        Chicago_Blackhawks,
        Colorado_Avalanche,
        Columbus_Blue_Jackets,
        Dallas_Stars,
        Detroit_Red_Wings,
        Edmonton_Oilers,
        Florida_Panthers,
        Los_Angeles_Kings,
        Minnesota_Wild,
        Montreal_Canadiens,
        Nashville_Predators,
        New_Jersey_Devils,
        New_York_Islanders,
        New_York_Rangers,
        Ottawa_Senators,
        Philadelphia_Flyers,
        Pittsburgh_Penguins,
        San_Jose_Sharks,
        Seattle_Kraken,
        St_Louis_Blues,
        Tampa_Bay_Lightning,
        Toronto_Maple_Leafs,
        Vancouver_Canucks,
        Vegas_Golden_Knights,
        Washington_Capitals,
        Winnipeg_Jets,
        mode,
        setMode: toggleDarkMode,
        state: props.state,
      }}
    >
      {props.children}
    </TeamsContext.Provider>
  );
};

export const useTeams = () => useContext(TeamsContext);
