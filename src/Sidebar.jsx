import logo from "./logo.svg";
import { useGlobalContext } from "./context";
import { social, links } from "./data";
import { FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img
          src={logo}
          className="logo"
          alt="coding addict logo"
          data-testid="logo"
        />
        <button
          className="close-btn"
          onClick={closeSidebar}
          data-testid="close-btn"
        >
          <FaTimes />
        </button>
      </div>

      <ul className="links" data-testid="nav-links">
        {links.map((link) => {
          const { id, url, text, icon } = link;

          return (
            <li key={id} data-testid={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-links" data-testid="social-links">
        {social.map((link) => {
          const { id, url, icon } = link;

          return (
            <li key={id} data-testid={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default Sidebar;
