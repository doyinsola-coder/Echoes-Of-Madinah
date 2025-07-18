import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { reflections } from "../data/reflections";
import ReflectionCard from "../components/ReflectionCard";

const ReflectionsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section
      className="min-h-screen bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/pattern.jpg')" }}
    >
      <div className="bg-black/70 w-full h-full absolute top-0 left-0 z-0"></div>
      <div className="relative z-10 p-8 pt-32">
        <h1 className="text-4xl font-bold text-center mb-10">Daily Reflections</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reflections.map((item) => (
            <ReflectionCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReflectionsPage;
