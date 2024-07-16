import './footer.css';
import logo from '../assets/logo-footer.png'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"; 
const Footer = () => {
    return (
        <footer>
            <img className='m-auto' src={logo} alt="" />
            <div className="flex items-center justify-center text-white space-x-2 my-5">
            <FaInstagram className='text-2xl' />
            <FaFacebook className='text-2xl' />
            <FaLinkedin className='text-2xl' />
            </div>
            <h4 className='text-xl font-bold'>© 2024 AuroPro Soft Systems Pvt Ltd</h4>
        </footer>
    );
}

export default Footer;
