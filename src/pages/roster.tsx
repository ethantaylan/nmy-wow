import React from "react";
import { RosterHeader } from "../components/roster-header/roster-header";
import { PlayerCard } from "../components/player-card/player-card";
import { useAxios } from "../hooks/use-axios";
import { getPlayers } from "../services/supabase/players";
import { Player, PlayerResponse } from "../models/players";

export const Roster: React.FC = () => {
  const [players, setPlayers] = React.useState<Player[]>([]);
  const [rosterPlayers, setRosterPlayers] = React.useState<Player[]>([]);

  const getPlayersFetch = useAxios<PlayerResponse[]>(getPlayers(), false);

  React.useEffect(() => {
    getPlayersFetch.executeFetch();
  }, []);

  React.useEffect(() => {
    if (getPlayersFetch.response) {
      setPlayers(
        getPlayersFetch.response.map(
          (playerResponse: PlayerResponse) => new Player(playerResponse)
        )
      );
    }
  }, [getPlayersFetch.response]);

  React.useEffect(() => {
    setRosterPlayers(players.filter((player) => player.isInRoster));

  
  }, [players]);

  const specColors: { [key: string]: string } = {
    "Demon Hunter": "text-purple-600",
    Shaman: "text-blue-600",
    Mage: "text-cyan-500",
    Druid: "text-orange-600",
    Warlock: "text-indigo-500",
    Monk: "text-green-400",
    Warrior: "text-orange-300",
    Dracthyr: "text-emerald-600",
    Hunter: "text-lime-500",
  };

  return (
    <div>
      <RosterHeader />
      <div className="flex pb-20 flex-col items-center">
        <div className="container">
          <h1 className="text-2xl mt-10 text-white">
            Tanks
            <span className="ms-2 ">
              {rosterPlayers.filter((player) => player.role === "Tank").length}
            </span>
          </h1>
          <div className="flex gap-4">
            {rosterPlayers
              ? rosterPlayers
                  .filter((player) => player.role === "Tank")
                  .map((player: Player, index: number) => (
                    <PlayerCard
                      key={index}
                      name={player.name}
                      spec={player.spec}
                      battleNet={player.battleNet}
                      discord={player.discord}
                      specColor={specColors[player.spec]}
                    />
                  ))
              : "Loading..."}
          </div>

          <h1 className="text-2xl mt-10 text-white">
            Healers
            <span className="ms-2 ">
              {
                rosterPlayers.filter((player) => player.role === "Healer")
                  .length
              }
            </span>
          </h1>
          <div className="flex gap-4">
            {rosterPlayers
              ? rosterPlayers
                  .filter((player) => player.role === "Healer")
                  .map((player: Player, index: number) => (
                    <PlayerCard
                      key={index}
                      name={player.name}
                      spec={player.spec}
                      battleNet={player.battleNet}
                      discord={player.discord}
                      specColor={specColors[player.spec]}
                    />
                  ))
              : "Loading..."}
          </div>

          <h1 className="text-2xl mt-10 text-white">
            Dps
            <span className="ms-2 ">
              {rosterPlayers.filter((player) => player.role === "Dps").length}
            </span>
          </h1>
          <div className="flex flex-wrap gap-4">
            {rosterPlayers
              ? rosterPlayers
                  .filter((player) => player.role === "Dps")
                  .map((player: Player, index: number) => (
                    <PlayerCard
                      key={index}
                      name={player.name}
                      spec={player.spec}
                      battleNet={player.battleNet}
                      discord={player.discord}
                      specColor={specColors[player.spec]}
                    />
                  ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
