import Landing from "../../components/Landing.jsx";
import background from '../../assets/service_1-bg.jpg'
import ServiceDetail from "./components/ServiceDetail.jsx";
import service1 from "./serviceData/service1.js";
const Service1 = () => {
    return (
        <div className="service_1 page">
            <Landing background={background} heading={"Oracle Services"} subHeading={"Accelerate Digital Business Transformation with Oracle ERP Solutions"} desc={"Build business capabilities to deliver operational excellence and competitive advantage"}/>
            <ServiceDetail data={service1}/>
        </div>
    );
}

export default Service1;
