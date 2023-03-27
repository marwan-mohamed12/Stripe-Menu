import { createContext, useContext, useState } from "react";
import sublinks from "./data";

const ContextApp = createContext();

export const useGlobalContext = () => useContext(ContextApp);
const AppProvider = ({ children }) => {
    //Sidebar
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const openSidebar = () => setIsSidebarOpen(true);
    const closeSidebar = () => setIsSidebarOpen(false);

    //Submenu
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({ page: "", links: [] });
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    };
    const closeSubmenu = () => setIsSubmenuOpen(false);

    return (
        <ContextApp.Provider
            value={{
                isSidebarOpen,
                openSidebar,
                closeSidebar,
                isSubmenuOpen,
                openSubmenu,
                closeSubmenu,
                location,
                page,
            }}
        >
            {children}
        </ContextApp.Provider>
    );
};
export default AppProvider;
