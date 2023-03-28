import { useState } from "react";
import { about } from "../data/about.js";

enum AboutSections {
  about = "Nosotros",
  mission = "Misión",
  vision = "Visión",
}

export const About = () => {
  const [activeSection, setActiveSection] = useState(AboutSections.about);

  const selectedSection = about.find(({ title }) => title === activeSection);

  return (
    <>
      <div className="flex gap-5 justify-center md:justify-start">
        {about.map(({ title, id }) => (
          <button
            className={`border-4 border-gray-200 leading-none inline-block font-semibold text-black px-4 py-3 rounded-3xl transition ease-in-out hover:scale-110 duration-300 capitalize cursor-pointer ${
              activeSection === title && "border-primary"
            }`}
            onClick={() =>
              setActiveSection(AboutSections[id as keyof typeof AboutSections])
            }
          >
            {title}
          </button>
        ))}
      </div>
      <article className="flex gap-6 md:gap-14 items-center flex-col md:flex-row">
        {/* Todo: Hacer que tenga un delay al mostrar la seccion */}
        <div className="mt-10 md:mt-0">
          <h4 className="text-center mb-6 font-semibold text-xl md:text-3xl pb-2 relative w-fit before:content-[''] before:h-1 before:w-14 before:bg-secon before:absolute before:bottom-0 before:left-0 before:rounded mx-auto">
            {selectedSection?.title}
          </h4>
          <p className="text-base md:text-lg text-center">
            {selectedSection?.desc}
          </p>
        </div>
        <img
          src={`/images/${selectedSection?.id}.svg`}
          alt=""
          className="w-60 md:w-96"
        />
      </article>
    </>
  );
};
