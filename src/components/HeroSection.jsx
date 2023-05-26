import { Link } from "react-router-dom";


const HeroSection = () => {
    return (
        <div data-aos="fade-up" className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative h-[600px] w-full">
                <img src="https://www.seekpng.com/png/detail/79-799630_youtube-thumbnail-kids-videos-banners-teal-banner-sports.png" className="w-full rounded-xl" />

                <div className="absolute flex items-center rounded-xl  h-full    bg-gradient-to-r from-[#000000] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-7 lg:pl-16 text-white w-[450px]'>
                        <h2 className='text-6xl font-bold pc'>
                            Welcome to the Toys  cars direct online store!
                        </h2>
                        <p className="text-gray-200">
                            Kids Cars Direct is a UK-based importer of high-quality ride on cars to suit everyone’s needs.
                        </p>
                        <div>
                            <Link to='/alltoys'><button className='my-btn mr-5'>View All Toys</button></Link>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative h-[600px] w-full">
                <img src='https://as2.ftcdn.net/v2/jpg/02/08/74/75/1000_F_208747516_rX1r04ATrM2u6aoN1OICB9yyroU9dgUL.jpg' className="w-full rounded-xl" />
                <div className="absolute flex items-center  h-full  rounded-xl   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div data-aos="fade-left" className='space-y-7 lg:pl-16 text-white w-[450px]'>
                        <h2 className='text-6xl font-bold pc'>
                            Welcome to the Toys  cars direct online store!
                        </h2>
                        <p className="text-gray-200">
                            Kids Cars Direct is a UK-based importer of high-quality ride on cars to suit everyone’s needs.
                        </p>
                        <div>
                            <Link to='/alltoys'><button className='my-btn mr-5'>View All Toys</button></Link>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative h-[600px] w-full">
                <img src="https://as2.ftcdn.net/v2/jpg/05/94/67/61/1000_F_594676180_IDuv1NuzrHhhAHl26SBCfoUyXYpynMcw.jpg" className="w-full rounded-xl" />
                <div className="absolute flex items-center  h-full rounded-xl    bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-7 lg:pl-16 text-white w-[450px]'>
                        <h2 className='text-6xl font-bold pc'>
                            Welcome to the Toys  cars direct online store!
                        </h2>
                        <p className="text-gray-200">
                            Kids Cars Direct is a UK-based importer of high-quality ride on cars to suit everyone’s needs.
                        </p>
                        <div>
                            <Link to='/alltoys'><button className='my-btn mr-5'>View All Toys</button></Link>

                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative h-[600px] w-full">
                <img src="https://as2.ftcdn.net/v2/jpg/00/04/63/21/1000_F_4632146_wRUrlrJjieJ3ldKuWhVd6eHT12WTPnnB.jpg" className="w-full rounded-xl" />
                <div className="absolute flex items-center  h-full rounded-xl     bg-gradient-to-r from-[#050505] to-[rgba(21, 21, 21, 0)]">
                    <div className='space-y-7 lg:pl-16 text-white w-[450px]'>
                        <h2 className='text-6xl font-bold pc'>
                            Welcome to the Toys  cars direct online store!
                        </h2>
                        <p className="text-gray-200">
                            Kids Cars Direct is a UK-based importer of high-quality ride on cars to suit everyone’s needs.
                        </p>
                        <div>
                            <Link to='/alltoys'><button className='my-btn mr-5'>View All Toys</button></Link>
                        </div>
                    </div>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;