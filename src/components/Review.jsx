
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import './review.css';
import testimonial1 from '../assets/ava-man-1.jpg'
import testimonial2 from '../assets/Ellipse-2870.jpg'
const Review = () => {
    return (
        <div className='review' data-aos="fade-up" data-aos-delay="500" data-aos-duration="1000">
            <div className="container">
                <h3 className='text-2xl font-bold mb-3'>What Our Clients Are Saying About Us </h3>
                <p className=''>Value is the One Sentiment We Swear By, Read our Case Studies</p>
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    <SwiperSlide className='py-10'>
                        <img className='rounded-full m-auto' src={testimonial1} alt="" />
                        <h3 className='text-xl font-bold'>Sr. Talent Acquisition ​</h3>
                        <p>specialist at a Healthcare ISV​</p>
                        <p className='my-10'>"I recommend Auropro to everyone I know. They are my best bet for niche IT requirements"​</p>
                    </SwiperSlide>
                    <SwiperSlide className='py-10'>
                        <img className='rounded-full m-auto' src={testimonial2} alt="" />
                        <h3 className='text-xl font-bold'>Pharma Major</h3>
                        <p>specialist at a Healthcare ISV​</p>
                        <p className='my-10 mx-auto w-[78%]'>“AuroPro is a highly skilled, professional and a process driven organization. Their contribution in terms of providing highly skilled IT resources for us is a huge value addition to us and played a huge role in our digitization journey. They are magical in terms of retaining their resources and filling in the open positions quickly during these tough times”​</p>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}

export default Review;
