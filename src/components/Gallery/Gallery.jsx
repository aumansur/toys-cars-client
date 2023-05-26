import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Gallery = () => {
    return (
        <div data-aos="flip-left">
            <h1 className='text-5xl font-bold text-white text-center py-16 '>Gallery</h1>
            <div className='my-container grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 '>
                <div data-aos="flip-down" className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-full rounded-xl' src="https://static.uksportimports.com/media/catalog/product/cache/280ea0ee05f10de555e58360e732488a/g/6/g65amg-red.png" alt="Shoes" /></figure>
                </div>
                <div data-aos="flip-up" className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-full rounded-xl' src="https://static.uksportimports.com/media/catalog/product/cache/280ea0ee05f10de555e58360e732488a/l/a/lambo-orange-000.png" alt="Shoes" /></figure>
                </div>
                <div data-aos="flip-left" className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-full rounded-xl' src="https://static.uksportimports.com/media/catalog/product/cache/280ea0ee05f10de555e58360e732488a/e/v/evoque-pink-000.png" alt="Shoes" /></figure>
                </div>
                <div data-aos="slide-up" className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-full rounded-xl' src="https://static.uksportimports.com/media/catalog/product/cache/280ea0ee05f10de555e58360e732488a/f/e/ferrari-fxx-k-2.png " alt="Shoes" /></figure>
                </div>
                <div data-aos="zoom-in" className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-full rounded-xl' src="https://static.uksportimports.com/media/wysiwyg/kci/all-ride-on-kids-cars.png " alt="Shoes" /></figure>
                </div>
                <div data-aos="zoom-out" className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img className='w-full rounded-xl' src=" https://static.uksportimports.com/media/wysiwyg/kci/ferrari_small.png" alt="Shoes" /></figure>
                </div>

            </div>
        </div>
    );
};

export default Gallery;