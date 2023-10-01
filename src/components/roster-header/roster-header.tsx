import React from "react";
import { SectionTitle } from "../section-title/section-title";

export const RosterHeader: React.FC = () => {
  return (
    <div className="mt-10 text-white flex justify-center">
      <section className="flex flex-col container">
        <SectionTitle title="Meet our World of Warcraft Roster !" />
        <h4 className="text-zinc-400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          voluptatibus ipsam tempora, quaerat odio error unde libero,
          repudiandae corrupti nemo itaque, omnis amet autem! Et error quam
          ducimus hic tempora.
        </h4>
      </section>
    </div>
  );
};
