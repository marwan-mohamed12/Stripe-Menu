import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { nanoid } from "nanoid";
import { useGlobalContext } from "./Context";

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        <div
            className={`${
                isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
            }`}
        >
            <aside className="sidebar">
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes />
                </button>
                <div className="sidebar-links">
                    {sublinks.map(({ page, links }) => {
                        return (
                            <article key={nanoid()}>
                                <h4>{page}</h4>
                                <div className="sidebar-sublinks">
                                    {links.map(({ label, icon, url }) => {
                                        return (
                                            <a href={url} key={nanoid()}>
                                                {icon}
                                                {label}
                                            </a>
                                        );
                                    })}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </aside>
        </div>
    );
};
export default Sidebar;
