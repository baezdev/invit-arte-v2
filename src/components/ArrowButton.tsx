interface Props {
  onClick: any;
  arrowDirection: "left" | "right";
}

export const ArrowButton = ({ onClick, arrowDirection }: Props) => {
  return (
    <button
      class="bg-primary inline-block p-3 rounded-3xl transition ease-in-out hover:scale-110 duration-300"
      onClick={onClick}
    >
      <img
        src={`/icons/${arrowDirection}.svg`}
        alt="flecha izquierda"
        class="invert w-8 h-8"
      />
    </button>
  );
};
