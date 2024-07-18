import './contactForm.css';

const ContactForm = () => {
    const handleSubmit = (e)=>{
        e.preventDefault()
        const form = new FormData()
        const formData = Object.fromEntries(form);

        console.log(formData);
    }
    return (
        <div id='conatctForm' data-aos="fade-up" data-aos-delay='1000' data-aos-duration="1000">
            <div className="container">
                <h1 className='text-3xl text-center font-bold py-8'>Contact</h1>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-wrap items-center">
                        <div className='md:w-1/2 md:pr-5 min-w-[280px]'>
                            <input type="text" name='' placeholder='First Name' />
                            <input type="text" name='' placeholder='Company' />
                            <input type="text" name='' placeholder='Work Email' />
                        </div>
                        <div className='md:w-1/2 min-w-[280px] sm:w-full'>
                            <input type="text" name='' placeholder='Last Name' />
                            <input type="text" name='' placeholder='Job Title' />
                            <input type="text" name='' placeholder='Phone Number' />
                        </div>
                    </div>
                    <textarea name="" id="" placeholder='Message'></textarea>
                    <input type="checkbox" className='mr-2' id='privacy'/><label htmlFor="privacy">I agree to the privacy policy</label> <br />
                    <input type="checkbox" className='mr-2' id='subscribe'/><label htmlFor="subscribe">Subscribe me to Auropro's Newsletter</label> <br />
                    <div className="text-center my-5">
                        <button type='submit' className='btn white'>Submit</button>
                    </div>
                    <p className='text-center'>You can also mail us at info@auropro.com</p>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
