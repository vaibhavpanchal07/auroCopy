import './box.css';


const Box = ({img, heading, desc, animationDelay}) => {
    return (
        <div className='info-box' data-aos="fade-up" data-aos-delay={animationDelay} data-aos-duration="1000">
            <img src={img} alt="" />
            <div className="body">
                <h1>{heading}</h1>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default Box;
