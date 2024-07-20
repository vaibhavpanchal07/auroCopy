import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Service1 from "../pages/Service/Service-1";
import Services from "../pages/Service/Services";
import Service2 from "../pages/Service/Service-2";
import Service3 from "../pages/Service/Service-3";
import Service4 from "../pages/Service/Service-4";
import Insights from "../pages/Insights/insights";
import ClientSuccess from "../pages/ClientSuccess/ClientSuccess";
import Contact from "../pages/Contact/Contact";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<Home />} />
            <Route path="services" element={<Services />}>
                <Route path="oracle_services" element={<Service1 />} />
                <Route path="appication-development" element={<Service2 />} />
                <Route path="application-integration" element={<Service3 />} />
                <Route path="digital-operations" element={<Service4 />} />
            </Route>
            <Route path="/insights" element={<Insights />} />
            <Route path="/client_success" element={<ClientSuccess />} />
            <Route path="/contact" element={<Contact />} />
        </Route>
    )
)

export default router