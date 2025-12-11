import Navbar2 from "./components/Navbar2";
import Systeme from "./components/Systeme";
import Footer from "../components/Footer";

const Parrainage = () => {
    return(
        <>
            <Navbar2 />

            {/* Animation d'apparition initiale pour Systeme */}
            <div data-aos="fade-in" data-aos-duration="1200">
                <Systeme />
            </div>

            <Footer showQuickLinks={false} variant="compact" />
        </>
    );
}

export default Parrainage;