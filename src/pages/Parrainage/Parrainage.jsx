import Navbar from "../components/Navbar";
import Systeme from "./components/Systeme";
import Footer from "../components/Footer";

const Parrainage = () => {
    return(
        <>
            <Navbar variant="simple" showOnScroll={false} />

            {/* Animation d'apparition initiale pour Systeme */}
            <div data-aos="fade-in" data-aos-duration="1200">
                <Systeme />
            </div>

            <Footer showQuickLinks={false} variant="compact" />
        </>
    );
}

export default Parrainage;