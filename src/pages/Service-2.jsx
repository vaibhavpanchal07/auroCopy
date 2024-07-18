import Landing from "../components/Landing";
import background from '../assets/service_1-bg.jpg'
import ServiceDetail from "../components/ServiceDetail";
import service2 from "../utils/serviceData/service2.js";
const Service2 = () => {
    return (
        <div className="service_1 page">
            <Landing background={background} heading={"Application Development "} subHeading={"Building High Performing Web/Mobile Apps To Accelerate Business Outcomes "} desc={"Launch Applications that Heightens Your Business Reputation "}/>
            <ServiceDetail data={service2}/>
        </div>
    );
}

export default Service2;
