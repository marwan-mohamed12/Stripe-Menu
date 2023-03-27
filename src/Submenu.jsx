import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./Context";
import { nanoid } from "nanoid";

const Submenu = () => {
    const {
        isSubmenuOpen,
        location,
        page: { page, links },
    } = useGlobalContext();

    const container = useRef(null);
    const [columns, setColumns] = useState("col-2");
    useEffect(() => {
        setColumns("col-2");
        const submenu = container.current;
        const { center, bottom } = location;
        submenu.style.left = `${center}px`;
        submenu.style.top = `${bottom}px`;

        if (links.length === 3) {
            setColumns("col-3");
        }

        if (links.length > 3) {
            setColumns("col-4");
        }
    }, [location, page, links]);

    return (
        <aside
            className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
            ref={container}
        >
            <section>
                <h4>{page}</h4>
                <div className={`submenu-center ${columns}`}>
                    {links.map(({ label, icon, url }) => {
                        return (
                            <a href={url} key={nanoid()}>
                                {icon}
                                {label}
                            </a>
                        );
                    })}
                </div>
            </section>
        </aside>
    );
};
export default Submenu;
