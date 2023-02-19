import { useState, useEffect } from "preact/hooks";
import type { Testimonial } from "src/interfaces";

import { testimonials } from "../data/testimonials";

export const Testimonials = () => {
  const [testimonialNumber, setTestimonialNumber] = useState(0);
  const [testimonialData, setTestimonialData] = useState<Testimonial>();

  useEffect(() => {
    setTestimonialData(testimonials[testimonialNumber]);
  }, [testimonialNumber]);

  const rating = testimonialData?.rating;
  const stars: Array<number> = [];

  /* for (let i = 1; i <= rating; i++) {
    stars.push(i);
  } */

  console.log(testimonialNumber);

  return (
    <div class="flex items-center justify-center gap-10">
      <button class="bg-primary inline-block p-3 rounded-3xl transition ease-in-out hover:scale-110 duration-300">
        <img
          src="/icons/left.svg"
          alt="flecha izquierda"
          class="invert w-8 h-8"
        />
      </button>
      <div class="w-[650px] h-72 flex items-center justify-center flex-col text-center rounded-3xl p-5">
        <p class="text-xl font-semibold mb-5">{testimonialData?.name}</p>
        <p class="text-lg mb-7">{testimonialData?.message}</p>
        <div class="flex gap-3">
          {stars.map(() => (
            <img src="/icons/star.svg" />
          ))}
        </div>
      </div>
      <button
        class="bg-third inline-block p-3 rounded-3xl transition ease-in-out hover:scale-110 duration-300"
        onClick={() => setTestimonialNumber(testimonialNumber + 1)}
      >
        <img
          src="/icons/right.svg"
          alt="flecha derecha"
          class="invert w-8 h-8"
        />
      </button>
    </div>
  );
};
