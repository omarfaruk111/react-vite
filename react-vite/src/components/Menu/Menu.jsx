import * as React from "react";
import { useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import './Index.css';
import { Link } from "react-scroll";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            delay: 0.1,
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.1,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

const Menu = () => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);

    return (
        <motion.nav className="animation-menu"
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >
            <motion.div className="background" variants={sidebar} />

            {isOpen && (
                <motion.div className="nav-li">
                    <motion.ul>
                        <li>
                            <Link
                                onClick={() => toggleOpen(false)}
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                            >Home</Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => toggleOpen(false)}
                                to="about"
                                spy={true}
                                smooth={true}
                            >About</Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => toggleOpen(false)}
                                to="experience"
                                spy={true}
                                smooth={true}
                            >Experience</Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => toggleOpen(false)}
                                to="service"
                                spy={true}
                                smooth={true}
                            >Service</Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => toggleOpen(false)}
                                to="project"
                                spy={true}
                                smooth={true}
                            >Project</Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => toggleOpen(false)}
                                to="travel"
                                spy={true}
                                smooth={true}
                            >Travel</Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => toggleOpen(false)}
                                to="testimonials"
                                spy={true}
                                smooth={true}
                            >Testimonials</Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => toggleOpen(false)}
                                to="price"
                                spy={true}
                                smooth={true}
                            >Price</Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => toggleOpen(false)}
                                to="blog"
                                spy={true}
                                smooth={true}
                            >Blog</Link>
                        </li>
                        <li>
                            <Link
                                onClick={() => toggleOpen(false)}
                                to="contact"
                                spy={true}
                                smooth={true}
                            >Contact</Link>
                        </li>
                    </motion.ul>
                </motion.div>
            )}
            <MenuToggle toggle={() => toggleOpen()} />
        </motion.nav>
    );
};

export default Menu
