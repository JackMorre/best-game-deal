import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import "./MainNavBar.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppProvider";

const pages = [
  { title: "Search", url: "/search" },
  { title: "Watch List", url: "/watchlist" },
];

export const MainNavBar = () => {
  const [mobile, setMobile] = useState(true);
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const { watchlist } = useApp();

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

  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <header className="header">
      <p
        className="company-name"
        onClick={() => {
          navigate("/");
          handleOpen();
        }}
      >
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
                <div
                  className="clickable"
                  onClick={() => {
                    navigate(page.url);
                    handleOpen();
                  }}
                >
                  {page.title}
                  {page.title === "Watch List" ? (
                    <span className="watchlist-number">
                      {watchlist?.length}
                    </span>
                  ) : undefined}
                </div>
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
