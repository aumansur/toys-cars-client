import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const AboutUs = () => {
    return (
        <section className=" py-20">
            <div
                data-aos="fade-right"
                data-aos-duration="2000"
                className="my-container  shadow-xl rounded-md  bg-gray-100 mx-auto px-4">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2">
                        <img
                            className="w-full"
                            src="https://www.kidscarstore.co.uk/cdn/shop/products/atvquad3_270x.progressive.jpg?v=1619111762"
                            alt="About Us"
                        />
                    </div>
                    <div data-aos="fade-left"
                        data-aos-duration="2000"
                        className="md:w-1/2 p-10 md:pl-8 mt-6 md:mt-0">
                        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Car Toys is your one-stop destination for all things related to automotive entertainment. We are passionate about enhancing your driving experience by providing top-quality car audio, video, and accessories.
                        </p>
                        <p className="text-gray-400 leading-relaxed mt-4">
                            With a wide range of products from leading brands, we offer the latest in car audio technology, including premium speakers, subwoofers, amplifiers, and head units. Whether you're a music enthusiast or a movie lover, we have the perfect solutions to transform your car into a mobile entertainment hub.
                        </p>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;