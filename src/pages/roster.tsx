import React from "react";
import { RosterHeader } from "../components/roster-header/roster-header";
import { GiAtomicSlashes } from "react-icons/gi";
import { FaDiscord, FaTwitch } from "react-icons/fa";
import { PlayerCard } from "../components/player-card/player-card";

export const Roster: React.FC = () => {
  return (
    <>
      <></>
      <RosterHeader />
      
      <div className="p-20 flex gab-3">
        {/* <div className="flex gap-4">
          <span className="flex items-center">
            Tanks <div className="w-3 h-3 ms-2 rounded-full bg-blue-600"></div>
          </span>
          <span className="flex items-center">
            Heals <div className="w-3 h-3 ms-2 rounded-full bg-red-200"></div>
          </span>
          <span className="flex items-center">
            Dps{" "}
            <div className="w-3 h-3 ms-2 rounded-full bg-orange-200"></div>
          </span>
        </div> */}
                <h3 className="text-2xl text-white">Tanks</h3>

        <div className="bg-zinc-900 w-72 border-zinc-800 border p-4 rounded-lg flex flex-col mt-5">
          <div className="mb-3 flex">
            <div className="flex flex-col">
              <div className="flex gap-2 items-center">
                <span className="font-bold text-purple-600">{`"Xdsmiley"`}</span>
                <div className="badge badge-sm badge-accent">
                  GM & Raid Leader
                </div>
              </div>
              <small className="italic text-zinc-500">
                Vengeance Demon Hunter
              </small>
            </div>
          </div>

          <div className="flex items-center">
            <GiAtomicSlashes />
            <span className="ms-2 text-sm">xdsmiley777</span>
          </div>

          <div className="flex items-center">
            <FaDiscord /> <span className="ms-2 text-sm">xdsmiley</span>
          </div>

          <div className="flex items-center">
            <FaTwitch /> <span className="ms-2 text-sm">xdsmiley</span>
          </div>
        </div>

        <PlayerCard
          name={"Dhkaan"}
          spec={"Vengeance Demon Hunter"}
          twitch={""}
        />
      </div>
    </>
  );
};
