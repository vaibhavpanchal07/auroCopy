import tab1ico from '../../../assets/digitalOpe_icon1.jpg'
import tab2ico from '../../../assets/digitalOpe_icon2.jpg'
import tab3ico from '../../../assets/digitalOpe_icon3.jpg'
import tab1img from '../../../assets/digitalOpe_1.jpg'
import tab2img from '../../../assets/digitalOpe_2.jpg'
import tab3img from '../../../assets/digitalOpe_3.jpg'
import overviewImg from '../../../assets/AppIntigra_sec.jpg'
const service4 = {
    serviceDetail:{
        serviceDescription:"Whether it be migrating from an on-premise to a cloud native infrastructure, inculcating security in your operations, or moving from a manual to an automated approach, we help you adopt Devsecops at different stages of your digital enablement journey.",
        secondHeading: "Setup end-to-end DevOps capabilities, run-time monitoring, deployments of API management configurations and proxies",
        overviewImg: overviewImg,
    },
    tabsdata : [
        {
            id: 1,
            tabName: "CloudOps",
            img: tab1img,
            ico: tab1ico,
            contentHeading: "CloudOps",
            contentDesc: "We help you accelerate your cloud adoption with our specialized cloudops offering to transform your enterprise into a cloud-native operating model.",
        },
        {
            id: 2,
            tabName: " Containerization",
            img: tab2img,
            ico: tab2ico,
            contentHeading: " Containerization",
            contentDesc: "Run releases for your organization in an agile manner, facilitating independent delivery. Containerize your workload with AuroPro’s pre-built assets to bring more acceleration in your releases.",
        },
        {
            id: 3,
            tabName: "DevSecOps ",
            img: tab3img,
            ico: tab3ico,
            contentHeading: "DevSecOps ",
            contentDesc: "Establish a highly secured and automated DevOps process to promote agility. Streamline continuous deployment and optimize operational efforts",
        },
    ]
}

export default service4