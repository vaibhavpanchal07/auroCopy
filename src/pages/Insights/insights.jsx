
import Landing from '../../components/Landing';
import background from '../../assets/insite_page_banner.jpg'
import Vector from '../../assets/Vector.jpg'
import Vector2 from '../../assets/Vector-1-1.jpg'
import Vector3 from '../../assets/Vector-2.jpg'
import Box from '../../components/Box';
import './insight.css'
const Insights = () => {
    return (
        <div className='insights page'>
            <Landing background={background} heading={"The Path To Action Starts Here "} subHeading={""} desc={"Drive 360-degree Value with Business Intelligence That Matters "}/>
            <div className="insight-overview space-x-4 pb-10">
                <Box animationDelay={100} heading={"Thrive in Digital disruption with APIs and Microservices Architecture"} img={Vector} desc={"According to studies, 90% of the Fortune 500 tech companies are currently using a mix of monolithic architectures and microservices. In fact, 50% of them have already fully transitioned to entirely distributed architectures."} />
                <Box animationDelay={200} heading={"Adopt Microservices to achieve operational resiliency and delivery acceleration"} img={Vector2} desc={"Microservices architectures make applications faster to develop and easier to scale, thus enabling innovative ideas to gain fruition at an accelerated speed."} />
                <Box animationDelay={300} heading={"Role of APIs in building new revenue streams"} img={Vector3} desc={"There are multi-million dollar companies like Stripe and Twillo that have earned revenues by just selling their API services. A holistic API management approach can bring indirect revenue streams through retention."} />
            </div>
        </div>
    );
}

export default Insights;
