import Landing from "../../components/Landing.jsx";
import background from '../../assets/AppIntigra_Banner.jpg'
import ServiceDetail from "./components/ServiceDetail.jsx";
import service from "./serviceData/service3.js";
const Service3 = () => {
    return (
        <div className="service_1 page">
            <Landing background={background} heading={"Application Integration"} subHeading={"Reinforcing Your Path to a Connected Future With an API-first Design "} desc={"Refine Business Workflow With API Led Connectivity"}/>
            <ServiceDetail data={service}/>
        </div>
    );
}

export default Service3;
