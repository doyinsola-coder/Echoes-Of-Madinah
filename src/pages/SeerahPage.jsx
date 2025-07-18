import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SeerahCard from "../components/SeerahCard";
import { seerahEvents } from "../data/seerahData";

const SeerahPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="min-h-screen bg-cover bg-center relative text-white"
      style={{ backgroundImage: "url('/prophet mosque.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      <div className="relative z-10 px-6 pt-44 pb-16">
        <h1
          className="text-4xl font-bold text-center mb-10"
          data-aos="fade-down"
        >
          The Seerah of the Prophet ﷺ and other beneficial books.
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {seerahEvents.map((event) => (
            <SeerahCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeerahPage;
