import { useState } from "react";
import { NavLink } from "react-router-dom";

function Topbar() {
  const [topBarColor, setColor] = useState(false);

  const navColor1 =
    "bg-gray-100 w-full text-black mx-auto max-w-screen p-1 md:flex md:items-center md:justify-between z-50 fixed ";
  const navColor2 =
    "w-full text-black mx-auto max-w-screen p-1 md:flex md:items-center md:justify-between z-50 fixed backdrop-blur-2xl backdrop-saturate-200";

  const changeColor = () => {
    if (window.scrollY >= 150) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const pages = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Events",
      path: "/events",
    },
    {
      name: "What We Do",
      path: "/services",
    },
    {
      name: "Gallery",
      path: "/gallery",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },

    {
      name: "FAQ",
      path: "/faq",
    },
    {
      name: "Login",
      path: "/landing",
    },
    {
      name: "Profile",
      path: "/profile",
    },
    // {
    //   name: "Dashboard",
    //   path: "/admin/dashboard",
    // },
  ];
  return (
    <>
      <nav className={topBarColor ? navColor2 : navColor1}>
        <div className="flex flex-row items-start justify-start font-bold">
          <img
            src="https://ik.imagekit.io/gokulnathk/PartyEvent/GoldenGlitz(1).svg"
            className="h-8 me-3"
            alt="FlowBite Logo"
          />
        </div>
        <ul className="flex flex-wrap items-center font-bold py-4">
          {pages &&
            pages.map((page, index) => (
              <li key={index}>
                <NavLink
                  to={page.path}
                  className="py-2 px-5 hover:bg-orange-400 hover:text-black rounded mx-3 border-b-2 border-transparent sticky"
                >
                  {page.name}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
    </>
  );
}

export default Topbar;
