import { useEffect, useState } from 'react';
import './service_details.css';

const ServiceDetail = () => {
    const [tab1, setTab1] = useState(true)
    const [tab2, setTab2] = useState(false)
    const [tab3, setTab3] = useState(false)
    const [tab4, setTab4] = useState(false)
    const handleTab = (e) => {
        const activeClasses = document.querySelectorAll("#tabs .active");
        activeClasses.forEach((ele) => {
            ele.classList.remove("active");
        })
        e.target.classList.add("active");

        if (e.target.getAttribute('id') === 'tab1') {
            setTab1(true);
        } else {
            setTab1(false);
        }
        if (e.target.getAttribute('id') === 'tab2') {
            setTab2(true);
        } else {
            setTab2(false);
        }
        if (e.target.getAttribute('id') === 'tab3') {
            setTab3(true);
        } else {
            setTab3(false);
        }
        if (e.target.getAttribute('id') === 'tab4') {
            setTab4(true);
        } else {
            setTab4(false);
        }
    }
    useEffect(() => {

    }, [])
    return (
        <div className='service_details pt-32'>
            <div className="container">
                <p className='description'>Evolve your Enterprise Resource Planning (ERP) Systems from being systems of record (SoR) to vehicles of growth with business process and business model innovation. Oracle EBS solutions are at the forefront of embracing this paradigm with capabilities to empower their users with composable, seamless, smart, and intelligent processes.</p>
            </div>
            <div id="tabs">
                <div className='tab active' id="tab1" onClick={handleTab}>Oracle Process Manufacturing (OPM)</div>
                <div className='tab' id="tab2" onClick={handleTab}>Enterprise Business Suite (EBS)</div>
                <div className='tab' id="tab3" onClick={handleTab}>Managed Services</div>
                <div className='tab' id="tab4" onClick={handleTab}>Oracle Cloud Solutions</div>
            </div>
            <div className="tab_body">
                {tab1 &&
                    <div className='tab1_body'>
                        tab1Body
                    </div>
                }
                {tab2 &&
                    <div className='tab1_body'>
                        tab2Body
                    </div>
                }
                {tab3 &&
                    <div className='tab1_body'>
                        tab3Body
                    </div>
                }
                {tab4 &&
                    <div className='tab1_body'>
                        tab4Body
                    </div>
                }
            </div>
        </div>
    );
}

export default ServiceDetail;
