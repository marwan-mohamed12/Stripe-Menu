import logo from "./assets/images/logo.svg";
import { FaBars } from "react-icons/fa";
import links from "./data";
import { nanoid } from "nanoid";
import { useGlobalContext } from "./Context";

const Navbar = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

    const displaySubmenu = (e) => {
        const page = e.target.textContent;
        const tempBtn = e.target.getBoundingClientRect();
        const center = (tempBtn.left + tempBtn.right) / 2;
        const bottom = tempBtn.bottom - 3;
        openSubmenu(page, { center, bottom });
    };

    const handleSubmenu = (e) => {
        if (!e.target.classList.contains("link-btn")) {
            closeSubmenu();
        }
    };

    return (
        <nav className="nav" onMouseOver={handleSubmenu}>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="Logo" className="nav-logo" />
                    <button className="btn toggle-btn" onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    {links.map(({ page }) => {
                        return (
                            <li key={nanoid()}>
                                <button
                                    className="link-btn"
                                    onMouseOver={displaySubmenu}
                                >
                                    {page}
                                </button>
                            </li>
                        );
                    })}
                </ul>
                <button className="btn signin-btn">sign in</button>
            </div>
        </nav>
    );
};
export default Navbar;
