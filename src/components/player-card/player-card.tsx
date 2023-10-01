import React from "react";
import { GiAtomicSlashes } from "react-icons/gi";
import { FaDiscord } from "react-icons/fa";

export interface PlayerCardProps {
  name: string;
  spec: string;
  role?: string;
  battleNet?: string;
  discord?: string;
  twitch?: string;
  specColor: string;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({
  name,
  spec,
  role,
  battleNet,
  discord,
  specColor,
}) => {
  return (
    <div className="bg-zinc-900 hover:scale-105 transition cursor-pointer w-60 border-zinc-800 border p-4 rounded-lg flex flex-col mt-5">
      <div className="mb-3 flex">
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <span className={`font-bold ${specColor}`}>{`"${name}"`}</span>
            {role && <div className="badge badge-sm badge-accent">{role}</div>}
          </div>
          <small className="italic text-zinc-500">{spec}</small>
        </div>
      </div>

      <div className="flex items-center">
        <GiAtomicSlashes />
        <span className="ms-2 text-sm">{battleNet ? battleNet : "N/A"}</span>
      </div>

      <div className="flex items-center">
        <FaDiscord />
        <span className="ms-2 text-sm">{discord ? discord : "N/A"}</span>
      </div>
    </div>
  );
};
