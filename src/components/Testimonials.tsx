import { useTestimonial } from "src/hooks/useTestimonial";
import { ArrowButton } from "./ArrowButton";

export const Testimonials = () => {
  const { name, message, stars, previusTestimonial, nextTestimonial } =
    useTestimonial();

  return (
    <div class="flex items-center justify-center gap-10">
      <ArrowButton onClick={previusTestimonial} arrowDirection="left" />
      <div class="w-[650px] h-72 flex items-center justify-center flex-col text-center rounded-3xl p-5">
        <p class="text-xl font-semibold mb-5">{name}</p>
        <p class="text-lg mb-7">{message}</p>
        <div class="flex gap-3">
          {stars.map(() => (
            <img src="/icons/star.svg" />
          ))}
        </div>
      </div>
      <ArrowButton onClick={nextTestimonial} arrowDirection="right" />
    </div>
  );
};
