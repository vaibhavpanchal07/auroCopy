import { NavLink, Link } from "react-router-dom";
import logo from '/logo.png'
import './header.css'
import { FaChevronDown } from "react-icons/fa";
const Header = () => {
    return (
        <nav className="container">
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
                            <Link to={'/oracle-services'}>Oracle Services</Link></li>
                        <li>
                            <Link to={'/appication-development'}>Appication Development</Link>
                        </li>
                        <li>
                            <Link to={'/application-integration'}>Appication Integration</Link>
                        </li>
                        <li>
                            <Link to={'/digital-operations'}>Digital Operations</Link>
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
            <Link className="btn white" to={'/contact'}>Contact Us</Link>
        </nav>
    );
}

export default Header;
