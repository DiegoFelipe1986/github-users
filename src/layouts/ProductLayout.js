import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import ProductPage from "../pages/ProductPage";

function ProductLayout() {
    return (
        <>
            <Navbar />
            <ProductPage />
            <Footer />
        </>
    )
}

export default ProductLayout