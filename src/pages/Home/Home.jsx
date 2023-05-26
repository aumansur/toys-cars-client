
import AboutUs from "../../components/AboutUs";
import CategoryTab from "../../components/Category/CategoryTab";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery/Gallery";
import HeroSection from "../../components/HeroSection";
import OurBrand from "../../components/OurBrand";


const Home = () => {
    return (
        <div className="bg-slate-500">
            <HeroSection></HeroSection>
            <CategoryTab></CategoryTab>
            <Gallery></Gallery>
            <AboutUs></AboutUs>
            <OurBrand></OurBrand>



        </div>
    );
};

export default Home;