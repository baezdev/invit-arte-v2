interface Props {
  text: string;
  href: string;
}

export const LinkButton = ({ text, href }: Props) => {
  return (
    <a
      class="bg-primary leading-none inline-block font-semibold text-white px-6 py-4 rounded-3xl transition ease-in-out hover:scale-110 duration-300 capitalize"
      href={href}
    >
      {text}
    </a>
  );
};
