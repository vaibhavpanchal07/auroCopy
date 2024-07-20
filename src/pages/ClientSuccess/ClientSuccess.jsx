import Landing from "../../components/Landing";
import background from '../../assets/Client-Success_banner.jpg'
import Review from "../../components/Review";
import Vector from '../../assets/clientSucess_Vector.jpg'
import Vector2 from '../../assets/clientSucess_Vector-2.jpg'
import Vector3 from '../../assets/clientSucess_Vector-3.jpg'
import Box from "../../components/Box";
const ClientSuccess = () => {
    return (
        <div className="client-success page">
            <Landing background={background} heading={"We Lead By Example to Lead Business Success"} desc={"Driving Value From Ground Zero "}/>
            <Review/>
            <div className="flex justify-center py-10 space-x-4 pb-10">
                <Box animationDelay={100} heading={"Mortgage Bank "} img={Vector} desc={"Auropro assisted in modernizing the core banking application and providing seamless, omni-channel online experience leading to the onboarding of 1k+ new customers. "} />
                <Box animationDelay={200} heading={"Insurance organization "} img={Vector2} desc={"Auropro helped enhance agent experience leveraging microservices architecture. Result? The Insurance organization transformed agent engagement to more experience driven for policy submissions & management capabilities."} />
                <Box animationDelay={300} heading={"Data Analytics Provider "} img={Vector3} desc={"AuroPro helped the organization from strategy to release, enabling automated and self-service product platform operations through a UI driven DevSecOps Catalog. Our efforts led to its adoption by 110+ product features. "} />
            </div>
        </div>
    );
}

export default ClientSuccess;
