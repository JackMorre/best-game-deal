import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import "./MainNavBar.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const pages = [
  { title: "Search", url: "/search" },
  { title: "Watch List", url: "/watchlist" },
  { title: "Deals", url: "/deals" },
];

export const MainNavBar = () => {
  const [mobile, setMobile] = useState(true);
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    if (width >= 700) {
      setMobile(false);
    } else {
      setMobile(true);
    }

    window.addEventListener("resize", handleResize);
  }, [width]);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  function handleOpen() {
    setOpen(!open);
  }
  return (
    <header className="header">
      <p className="company-name" onClick={routeChange}>
        Acme ❌ Games
      </p>

      <nav
        className={`main-nav ${width > 700 ? "desktop" : ""} ${
          !open && width < 700 ? "open" : ""
        }`}
      >
        <ul className="list-items">
          {pages.map((page) => {
            return (
              <li key={page.title}>
                <a href={page.url}>{page.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      {mobile ? (
        <div className="mobile-nav-c" onClick={handleOpen}>
          {!open ? (
            <FiMenu className="icon" />
          ) : (
            <IoClose className="icon close" />
          )}
        </div>
      ) : undefined}
    </header>
  );
};
