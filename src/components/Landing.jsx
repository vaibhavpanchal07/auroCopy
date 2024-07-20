import './landing.css';

const Landing = ({ background, heading, subHeading, desc, pt }) => {

    const bgStyle = {
        paddingTop: `${pt}px`,
        background: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
    }

    return (
        <div className='landing' style={bgStyle}>
            <div className="overlay">
                <div className="container">
                    <div className="content">
                        <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">{heading}</h1>
                        <h3 data-aos="fade-up" data-aos-duration="1500">{subHeading}</h3>
                    </div>
                </div>
            </div>
            <div className="floting-desc">
                <h2>{desc}</h2>
            </div>
        </div>
    );
}

export default Landing;
