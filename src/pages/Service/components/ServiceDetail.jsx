import { useEffect, useState } from 'react';
import './service_details.css';
import imgPlaceholder from '../../../assets/placeholder-image.png'
import Review from '../../../components/Review';
import Partner from '../../../components/Partner';
import ContactForm from '../../../components/ContactForm';
import blogInsightImg from '../../../assets/service-Page_4.jpg'
const ServiceDetail = ({ data }) => {
    const [activeTab, setActiveTab] = useState(1)

    const handleTab = (e) => {
        const activeClasses = document.querySelectorAll("#tabs .active");
        activeClasses.forEach((ele) => {
            ele.classList.remove("active");
        })
        setActiveTab(Number(e.target.getAttribute('data-id')))
    }

    return (
        <div className='service_details pt-32'>
            <div className="container">
                <p className='description' data-aos="fade-left" data-aos-delay="200" data-aos-duration="500">{data.serviceDetail.serviceDescription}</p>
            </div>
            <div id="tabs">
                {data.tabsdata.map((item) => {
                    return <div className={`tab ${activeTab == item.id ? 'active' : ''}`} data-id={item.id} id={`tab${item.id}`} onClick={handleTab}>{item.tabName}</div>
                })}
            </div>
            {data.tabsdata.map((item) => {
                if (activeTab == item.id) {
                    return (
                        <div className={`tab${item.id}_body tab_body`}>
                            <div className="img-container w-1/2">
                                <img src={item.img || imgPlaceholder} alt="" />
                            </div>
                            <div className="content-container w-1/2">
                                <img src={item.ico || imgPlaceholder} alt="" />
                                <h1>{item.contentHeading || 'No Heading'}</h1>
                                <p className='text-[24px]'>{item.contentDesc || 'No Desc'}</p>
                            </div>
                        </div>
                    )
                }
            })}
            <div className='bg-[#ebebeb]'>
                <div className="container">
                    <p className='text-center py-10 text-[#4c5253] text-[20px]'>{data.serviceDetail.secondHeading}</p>
                    <img className='mx-auto pb-10' src={data.serviceDetail.overviewImg} alt="" />
                    {data.serviceDetail.onPremisesImg && <div className="premises" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
                        <h1 className='text-2xl font-bold text-center pb-5'>On Premises</h1>
                        <img className='w-[230px] mx-auto pb-5' src={data.serviceDetail.onPremisesImg} alt="" />
                    </div>}
                </div>
            </div>
            <Review />
            <div className='jumbStart'>
                <p className='text-xl font-bold text-white text-center'>Jumpstart Your Digital Journey With Microservices Enablement That’s Fast, Efficient And Tailored To Your Business Needs</p>
            </div>
            <div className="differentiators bg-white py-10" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                <h1 className='text-3xl font-bold text-center py-5'>Our Differentiators </h1>
                <div className="container">
                    <div className="box min-w-[215px]" data-aos="fade-right" data-aos-delay="200" data-aos-duration="500">
                        <h1>Domain Expertise</h1>
                        <p>Our deep domain expertise in process manufacturing, GMP practices, compliances, quality management, and implementations in pharmaceuticals industry is what makes us  undisputed leader and a partner of choice.</p>
                    </div>
                    <div className="box min-w-[215px]">
                        <h1>Product Mastery</h1>
                        <p>Over two decades of experience with Oracle EBS, Oracle Process Manufacturing (OPM), Supply Chain Management (SCM), Transportation Management (OTM), and Oracle Cloud Infrastructure (OCI), and DBA,  Oracle Technical capabilities, positions us to deliver agile and flexible business capabilities for a composable enterprise.</p>
                    </div>
                    <div className="box min-w-[215px]" data-aos="fade-left" data-aos-delay="200" data-aos-duration="500">
                        <h1>Customer Centricity</h1>
                        <p>Serving highly regulated industry taught us non-negotiable values of quality consciousness, customer centricity, and offering ease of doing business. We believ that “We are successful when our customer’s are successful”.</p>
                    </div>
                </div>
            </div>
            <div className="blog-insights bg-[#f3f6f6] py-16">
                <div className="container">
                    <h1 className='text-3xl font-bold text-center'>Blogs & Insights </h1>
                    <p className='text-[#555] font-semibold py-5 text-center'>Access our latest thought leadership and updates on Digital Strategy & Design. View all Insights</p>
                    <div className="flex justify-center">
                        <img src={blogInsightImg} alt="" />
                        <div className="content bg-[#333] flex flex-col justify-center p-6">
                            <h2 className='text-[var(--primary-color)] text-2xl font-bold'>Report</h2>
                            <p className='text-white font-bold text-xl'>Digital Banking CX Trends in a Post Covid-19 World</p>
                        </div>
                    </div>
                </div>
            </div>
            <Partner />
            <ContactForm />
        </div>
    );
}

export default ServiceDetail;
