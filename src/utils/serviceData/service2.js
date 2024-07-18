import tab1ico from '../../assets/serviceIcon-1.jpg'
import tab2ico from '../../assets/serviceIcon_cloud.jpg'
import tab4ico from '../../assets/serviceIcon_pro.jpg'
import onpremisesImg from '../../assets/onpremissesapplicationdev.jpg'
import tab1img from '../../assets/servicepage1.jpg'
import tab2img from '../../assets/AppDev2.jpg'
import tab3img from '../../assets/AppDev3.jpg'
import tab4img from '../../assets/AppDev4-1.jpg'
const service2 = {
    serviceDetail:{
        serviceDescription:"The success of your business today depends on your capability of meeting customer demands, creating a connected experience for your enterprise, optimizing operations, and building enterprise partnerships. We create solutions that help you keep in line with the ever-changing modern technological landscape.",
        onPremisesImg : onpremisesImg,
    },
    tabsdata : [
        {
            id: 1,
            tabName: "Microservices ",
            img: tab1img,
            ico: tab1ico,
            contentHeading: "Microservices ",
            contentDesc: "Accelerate adoption and enablement of Microservices Architecture with our focused & automation integrated Microservices offering.",
        },
        {
            id: 2,
            tabName: "Cloud Native Development",
            img: tab2img,
            ico: tab2ico,
            contentHeading: "Cloud Native Development",
            contentDesc: "Build highly resilient, efficient. scalable applications on cloud with our cloud-native accelerators.",
        },
        {
            id: 3,
            tabName: "Application Modernization",
            img: tab3img,
            ico: tab1ico,
            contentHeading: "Application Modernization",
            contentDesc: "Modernize monolith/legacy applications to scale quickly, reduce time and cost in the long-term, with our application modernisation approach.",
        },
        {
            id: 4,
            tabName: "Product Engineering",
            img: tab4img,
            ico: tab4ico,
            contentHeading: "Product Engineering",
            contentDesc: "Ensure digital continuity across the enterprise with Product Lifecycle Management (PLM). We perfect every step of your product journey from ideation to launch.",
        },
    ]
}

export default service2