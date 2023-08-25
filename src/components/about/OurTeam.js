import React from "react";
import DoctorsSection from "./DoctorsSection";
import MembersSection from "./MembersSection";

export default function OurTeam() {
  return (
    <main className="min-h-screen">
      <section className="pt-32 dark:bg-gray-900">
        <DoctorsSection />
      </section>

      <section className="pt-24 pb-40 ">
        <MembersSection />
      </section>
    </main>
  );
}