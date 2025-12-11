import Navbar2 from "./components/Navbar2";
import Systeme from "./components/Systeme";
import Footer2 from "./components/Footer2";

const Parrainage = () => {
    return(
        <>
            <Navbar2 />

            {/* Animation d'apparition initiale pour Systeme */}
            <div data-aos="fade-in" data-aos-duration="1200">
                <Systeme />
            </div>

            <Footer2 />
        </>
    );
}

export default Parrainage;