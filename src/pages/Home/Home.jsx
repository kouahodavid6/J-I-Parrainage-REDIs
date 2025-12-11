import Navbar from "../components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programme from "./components/Programme";
import Processus from "./components/Processus";
import Footer from "../components/Footer";

const Home = () => {
    return(
        <>
            <Navbar />
            {/* Animation d'apparition initiale pour Hero */}
            <div data-aos="fade-in" data-aos-duration="1200">
                <Hero />
            </div>

            {/* Animations au scroll pour les autres sections */}
            <div data-aos="fade-up" data-aos-delay="100">
                <About />
            </div>            
            <div data-aos="fade-up" data-aos-delay="100">
                <Programme />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <Processus />
            </div>
            <Footer showQuickLinks={true} variant="default" />
        </>
    );
}

export default Home;