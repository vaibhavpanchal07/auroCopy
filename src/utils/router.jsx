import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Service1 from "../pages/Service-1";
import Services from "./Services";
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>
            <Route path="" element={<Home />}/>
            <Route path="services" element={<Services />}>
                <Route path="oracle_services" element={<Service1 />}/>
            </Route>
        </Route>
    )
)

export default router