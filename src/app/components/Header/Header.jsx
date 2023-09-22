"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";

import data from "../../data/header.json";

const Header = () => {
  const pathname = usePathname();

  const handleClick = (e) => {
    document.querySelectorAll(".link").forEach((link) => {
      link.classList.remove("active-link");
    });
    e.target.classList.add("active-link");
  };

  const handleRemove = (e) => {
    document.querySelectorAll(".link").forEach((link) => {
      link.classList.remove("active-link");
    });
  };

  return (
    <header className="bg-main/70 py-5 fixed top-0 w-full z-50">
      <div className="container">
        <div className="flex gap-3 items-center justify-between">
          <Link onClick={handleRemove} href="/" className="cursor-pointer">
            <Image
              src={"/images/header/logo.svg"}
              alt="logo"
              width={70}
              height={70}
            />
          </Link>
          {pathname === "/policy" ? (
            <></>
          ) : (
            <nav>
              <ul className="flex gap-x-5 flex-wrap justify-end">
                {data.header.nav.map(({ title, href }) => (
                  <li key={href}>
                    <ScrollLink
                      onClick={handleClick}
                      smooth={true}
                      duration={500}
                      className="text-white cursor-pointer link"
                      to={href}
                      offset={-112}
                    >
                      {title}
                    </ScrollLink>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
