interface Props {
  children: string | JSX.Element;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export const LoginSocialNetworkButton = ({ children, onClick }: Props) => {
  return (
    <button
      className="p-4 rounded-full border-2 border-gray-200 bg-gray-50 transition ease-in-out duration-200 hover:fill-white hover:bg-third hover:scale-110 hover:border-third"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
