import { LinkButton } from "./LinkButton";

export const NavLinks = () => {
  const links = [
    {
      text: "planes",
      href: "/#plans",
    },
    {
      text: "diseños",
      href: "/designs",
    },
    {
      text: "conócenos",
      href: "/#about",
    },
    {
      text: "contáctanos",
      href: "/contact",
    },
  ];

  return (
    <ul className="flex gap-7 font-medium capitalize text-lg items-center cursor-pointer">
      {links.map(({ text, href }) => (
        <li key={text}>
          <a
            className="px-1 py-px relative after:content-[''] after:absolute  after:w-0 after:hover:w-full after:h-[3px] after:bg-black after:left-0 after:bottom-0 after:rounded after:transition-all after:duration-300"
            href={href}
          >
            {text}
          </a>
        </li>
      ))}
      <li>
        <LinkButton text="acceder" href="/login" />
      </li>
    </ul>
  );
};
