import Landing from "../../components/Landing.jsx";
import background from '../../assets/Digital-Operation_banner.jpg'
import ServiceDetail from "./components/ServiceDetail.jsx";
import service from "./serviceData/service4.js";
const Service4 = () => {
    return (
        <div className="service_1 page">
            <Landing background={background} heading={"Digital Operations"} subHeading={"Adopt the Next-gen of Digital Transformation, Improve Resilience and Accelerate Business Outcomes"} desc={"Enable Scalability with CloudOps, Accelerate secured software development with DevSecOps"}/>
            <ServiceDetail data={service}/>
        </div>
    );
}

export default Service4;
