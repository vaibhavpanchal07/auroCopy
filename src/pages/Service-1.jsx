import Landing from "../components/Landing";
import background from '../assets/service_1-bg.jpg'
import ServiceDetail from "../components/ServiceDetail";
const Oracle = () => {
    return (
        <div className="service_1 page">
            <Landing background={background} heading={"Oracle Services"} subHeading={"Accelerate Digital Business Transformation with Oracle ERP Solutions"} desc={"Build business capabilities to deliver operational excellence and competitive advantage"}/>
            <ServiceDetail />
        </div>
    );
}

export default Oracle;
