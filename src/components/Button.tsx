interface Props {
  children: string | JSX.Element;
}

export const Button = ({ children }: Props) => {
  return (
    <button className="bg-primary w-full leading-none inline-block font-semibold text-white px-6 py-[18px] rounded-3xl transition ease-in-out hover:scale-110 duration-300 capitalize text-lg">
      {children}
    </button>
  );
};
