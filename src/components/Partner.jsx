import './partner.css';
import clients from '../assets/clients.jpg'
const Partner = () => {
    return (
        <div id='partners' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
            <div className="container">
                <h3 className='text-2xl font-bold'>Our Partner Ecosystem</h3>
                <h3 className='text-2xl my-5 font-bold text-[#555]'>Bringing together the best of our partner network to create competitive advantage for your business.</h3>
                <img className='m-auto mt-10' src={clients} alt="" />
            </div>
        </div>
    );
}

export default Partner;
