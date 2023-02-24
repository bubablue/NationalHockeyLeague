import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TeamStats } from "./Components/TeamStats/TeamStats";
import { Teams } from "./Components/Teams/Teams";
import { Standings } from "./Components/Standings/Standings";
import { News } from "./Components/News/news";
import { Schedule } from "./Components/General/Schedule";
import { PlayerStats } from "./Components/GeneralStats/PlayerStats";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { Registration } from "./Components/auth/Registration";
import { Login } from "./Components/auth/LogIn";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { MyTeam } from "./Components/MyTeam/MyTeam";
import Game from "./Components/Games/Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App>
        <Teams />
        <Schedule />
      </App>
    ),
  },
  {
    path: "/teams",
    element: (
      <App>
        <Teams />
      </App>
    ),
  },
  {
    path: "/teams/:teamId",
    element: <div>Team</div>,
  },
  {
    path: "/players",
    element: <div>Players</div>,
  },
  {
    path: "/registration",
    element: (
      <App>
        <Registration />
      </App>
    ),
  },
  {
    path: "/login",
    element: (
      <App>
        <Login />
      </App>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <App>
        <Dashboard />
      </App>
    ),
  },
  {
    path: "/myteam",
    element: (
      <App>
        <MyTeam />
      </App>
    ),
  },
  // {
  //   path: "/players/:playerId",
  //   element: (
  //     <App>
  //       <Player />
  //     </App>
  //   ),
  // },
  {
    path: "/games",
    element: <div>Games</div>,
  },
  {
    path: "/games/:gameId",
    element: (
      <App>
        <Game />
      </App>
    ),
  },
  {
    path: "/standings",
    element: (
      <App>
        <Standings />
      </App>
    ),
  },
  {
    path: "/standings/:standingId",
    element: <div>Standing</div>,
  },
  {
    path: "/stats",
    element: <div>Stats</div>,
  },
  {
    path: "/stats/:statId",
    element: (
      <App>
        <PlayerStats />
      </App>
    ),
  },
  {
    path: "/draft",
    element: <div>Draft</div>,
  },
  {
    path: "/draft/:draftId",
    element: <div>Draft</div>,
  },
  {
    path: "/awards",
    element: <div>Awards</div>,
  },
  {
    path: "/awards/:awardId",
    element: <div>Award</div>,
  },
  {
    path: "/news",
    element: (
      <App>
        <News />
      </App>
    ),
  },
  {
    path: "/news/:newsId",
    element: <div>News</div>,
  },
  {
    path: "/schedule",
    element: (
      <App>
        <Schedule />
      </App>
    ),
  },
  {
    path: "/schedule/:scheduleId",
    element: <div>Schedule</div>,
  },
  {
    path: "/transactions",
    element: <div>Transactions</div>,
  },
  {
    path: "/transactions/:transactionId",
    element: <div>Transaction</div>,
  },
  {
    path: "/injuries",
    element: <div>Injuries</div>,
  },
  {
    path: "/injuries/:injuryId",
    element: <div>Injury</div>,
  },
  {
    path: "/teams/:teamId/roster",
    element: <div>Team Roster</div>,
  },
  {
    path: "/teams/:teamId/roster/:rosterId",
    element: <div>Team Roster</div>,
  },
  {
    path: "/teams/:teamId/stats",
    element: (
      <App>
        <TeamStats />
      </App>
    ),
  },
  {
    path: "/teams/:teamId/stats/:statId",
    element: <div>Team Stats</div>,
  },
  {
    path: "/teams/:teamId/schedule",
    element: <div>Team Schedule</div>,
  },
  {
    path: "/teams/:teamId/schedule/:scheduleId",
    element: <div>Team Schedule</div>,
  },
  {
    path: "/teams/:teamId/transactions",
    element: <div>Team Transactions</div>,
  },
  {
    path: "/teams/:teamId/transactions/:transactionId",
    element: <div>Team Transactions</div>,
  },
  {
    path: "/teams/:teamId/injuries",
    element: <div>Team Injuries</div>,
  },
  {
    path: "/teams/:teamId/injuries/:injuryId",
    element: <div>Team Injuries</div>,
  },
  {
    path: "/teams/:teamId/news",
    element: <div>Team News</div>,
  },
]);
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <App /> */}
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </React.StrictMode>
);
