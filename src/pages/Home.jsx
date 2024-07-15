
import './home.css';
import { CgScrollV } from "react-icons/cg";
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
            <section className='service_overview'>
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
        </div>
    );
}

export default Home;
