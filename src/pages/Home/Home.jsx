
import './home.css';
import { CgScrollV } from "react-icons/cg";
import { Link } from 'react-router-dom';
import Box from '../../components/Box';
import vector1 from '../../assets/Vector.jpg'
import vector2 from '../../assets/Vector-1-1.jpg'
import vector3 from '../../assets/Vector-2.jpg'
import Insights from '../../assets/Insights.jpg'
import successStories from '../../assets/success-stories.jpg'
import career from '../../assets/career.jpg'
import Review from '../../components/Review';
import Partner from '../../components/Partner';
import ContactForm from '../../components/ContactForm';
const Home = () => {
    return (
        <div className='home page'>
            <div className="main_landing">
                <div className="overlay">
                    <div className="landing container">
                        <h1 data-aos="fade-up" data-aos-duration="1000">Create Transformative Experiences For Your</h1>
                        <h1 data-aos="fade-up" data-aos-duration="2000"> Enterprise and End Users With Digital Enablement</h1>
                        <h4 data-aos="fade-up" data-aos-duration="3000">Gift Your Organization The Wings it Always Deserved</h4>
                        <div className="line"></div>
                        <div id="scroll">
                            <a href="#"><CgScrollV /> Scroll Down</a>
                        </div>
                    </div>
                </div>
            </div>
            <section className='service_overview' data-aos="fade-up" data-aos-duration="1000">
                <div className="box app">
                    <div className="overlay">
                        <h3 data-aos="fade-up" data-aos-duration="1000">Building High Performing Web/Mobile Apps to accelerate business outcomes</h3>
                    </div>
                </div>
                <div className="box app_int">
                    <div className="overlay">
                        <h3 data-aos="fade-up" data-aos-duration="2000">Building High Performing Web/Mobile Apps to accelerate business outcomes</h3>
                    </div>
                </div>
                <div className="box digi_op">
                    <div className="overlay">
                        <h3 data-aos="fade-up" data-aos-duration="1000">Building High Performing Web/Mobile Apps to accelerate business outcomes</h3>
                    </div>
                </div>
                <div className="box start_up">
                    <div className="overlay">
                        <h3 data-aos="fade-up" data-aos-duration="2000">Building High Performing Web/Mobile Apps to accelerate business outcomes</h3>
                    </div>
                </div>
            </section>
            <section className='industries'>
                <div className="industries_background">
                    <h1 className='text-center py-10 text-3xl font-bold text-white'>Industries</h1>
                </div>
                <div className="container">
                    <Box animationDelay={100} img={vector1} heading={"BFSI"} desc={"We help modernize core banking and financial applications that provide a seamless and omni-channel online experience to customers. We help BFSI solutions achieve 2x faster delivery for new features with our accelerators. "} />
                    <Box animationDelay={300} img={vector2} heading={"Healthcare"} desc={"Improving operational efficiency through digital integration and cutting down on manual tasks is what the healthcare industry requires to focus on RnD. We help healthcare services harness technology to improve patient outcomes while reducing time and cost."} />
                    <Box animationDelay={500} img={vector3} heading={"Retail"} desc={"Our accelerators for retail digital enablement are focused on creating transformative journeys for customers, supply chain, merchandising et al. We help retail businesses respond to mission critical technological demands immediately and maintain business perpetuity. "} />
                </div>
                <article className='container'>
                    <div className="info w-1/2 pr-10 min-w-[280px]" data-aos="fade-right" data-aos-duration="1000">
                        <h2 className='text-2xl font-bold mb-2'>Get The Latest Insights into Business Automation, Digital Integration, System Modernization and More</h2>
                        <p className='text-[#555]'>Keep Abreast Of The Current and Future of Technological Transformation</p>
                        <Link className="btn green mt-6 inline-block" to={'/'}>Click Here</Link>
                    </div>
                    <img className='w-1/2 min-w-[280px]' src={Insights} alt="" data-aos="fade-left" data-aos-duration="1000" />
                </article>
                <article className='container'>
                    <img className='w-1/2 pr-10 min-w-[280px]' src={successStories} alt="" data-aos="fade-right" data-aos-delay="500" data-aos-duration="2000" />
                    <div className="info w-1/2 min-w-[280px]" data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000">
                        <h2 className='text-2xl font-bold mb-2'>Client Success Stories</h2>
                        <p className='text-[#555]'>Value is the One Sentiment We Swear By, Read our Case Studies</p>
                        <Link className="btn green mt-6 inline-block" to={'/'}>Click Here</Link>
                    </div>
                </article>
            </section>
            <Review />
            <Partner />
            <section id="career" data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                <div className="container" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
                    <h1>Careers</h1>
                    <p className='text-xl py-5'>Expand your professional horizon with the best brains in the ecosystem. We are enabling digital transformation for some of the most renowned businesses, and working with us means tapping into that uninhibited growth. See where your skills might fit in and hit that Apply button.</p>
                </div>
                <img className='w-full' src={career} alt="" />
            </section>
            <div className='bg-[#00E699] py-10 text-center' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
                <div className="container" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
                    <h4 className='mb-8 text-2xl font-semibold text-white'>Find Opportunities right for you </h4>
                    <Link className='btn white' to={'/'}>Explore More</Link>
                </div>
            </div>
            <ContactForm />
        </div>
    );
}

export default Home;
