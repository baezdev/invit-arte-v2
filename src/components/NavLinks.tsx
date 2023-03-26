import { useState } from "react";
import { Close, Menu } from "./icons/IconsForm";
import { LinkButton } from "./LinkButton";

export const NavLinks = () => {
  const [openMenu, setOpenMenu] = useState(false);
  /* ${
    !openMenu ? "hidden" : "flex"
  } */

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
    <div>
      <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
        {!openMenu ? <Menu /> : <Close />}
      </button>
      <ul
        className={`absolute right-0 flex flex-col items-center w-full gap-20 pb-14 text-lg font-medium capitalize bg-white cursor-pointer md:w-fit md:static md:pb-0 md:items-center md:flex-row md:gap-7 top-24 ${
          !openMenu ? "hidden" : "flex"
        }`}
      >
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
    </div>
  );
};
