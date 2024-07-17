import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from '/logo.png'
import './header.css'
import { FaChevronDown } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <nav className={scrolled ? 'scrolled' : ''}>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="nav_links">
                    <li>
                        <NavLink to={'/'} >Home</NavLink>
                    </li>
                    <li className={"has_dropdown"}>
                        <NavLink to={'/services'} >Services <FaChevronDown /></NavLink>
                        <ul className="dropdown">
                            <li>
                                <NavLink to={'services/oracle_services'}>Oracle Services</NavLink></li>
                            <li>
                                <Link to={'services/appication-development'}>Appication Development</Link>
                            </li>
                            <li>
                                <Link to={'services/application-integration'}>Appication Integration</Link>
                            </li>
                            <li>
                                <Link to={'services/digital-operations'}>Digital Operations</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <NavLink to={'/insights'} >Insights</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/client_success'} >Client Success</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/about-us'} >About Us</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/career'} >Careers</NavLink>
                    </li>

                </ul>
                <Link className="btn white contact-nav" to={'/contact'}>Contact Us</Link>
                <div className="menu">
                    <CgMenuRight className="text-white" />
                </div>
            </div>
        </nav>
    );
}

export default Header;
