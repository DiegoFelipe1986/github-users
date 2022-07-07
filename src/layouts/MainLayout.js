import { HomePage } from "../pages/HomePage";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

function MainLayout() {
    return (
        <>
            <Navbar />
            <HomePage />
            <Footer />
        </>
    )
}

export default MainLayout