import React from "react";
import { GiAtomicSlashes } from "react-icons/gi";
import { FaDiscord, FaTwitch } from "react-icons/fa";

export interface PlayerCardProps {
  name: string;
  spec: string;
  role?: string;
  battleNet?: string;
  discord?: string;
  twitch?: string;
}

export const PlayerCard: React.FC<PlayerCardProps> = ({
  name,
  spec,
  role,
  battleNet,
  discord,
  twitch,
}) => {
  return (
    <div className="bg-zinc-900 w-72 border-zinc-800 border p-4 rounded-lg flex flex-col mt-5">
      <div className="mb-3 flex">
        <div className="flex flex-col">
          <div className="flex gap-2 items-center">
            <span className="font-bold text-purple-600">{name}</span>
            <div className="badge badge-sm badge-accent">{role}</div>
          </div>
          <small className="italic text-zinc-500">{spec}</small>
        </div>
      </div>

      <div className="flex items-center">
        <GiAtomicSlashes />
        <span className="ms-2 text-sm">{battleNet}</span>
      </div>

      <div className="flex items-center">
        <FaDiscord /> <span className="ms-2 text-sm">{discord}</span>
      </div>

      <div className="flex items-center">
        <FaTwitch /> <span className="ms-2 text-sm">{twitch}</span>
      </div>
    </div>
  );
};
