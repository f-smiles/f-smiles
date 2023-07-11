import { Routes, Route, useParams } from "react-router";
import Home from "../components/home/Home";
import Error404 from '../components/Error404';
import OurTeam from "../components/about/OurTeam";
import WhyChooseUs from "../components/about/WhyChooseUs";
import YourCare from "../components/patient/YourCare";
import FinancingTreatment from "../components/patient/FinancingTreatment";
import CaringForYourBraces from "../components/patient/CaringForYourBraces";
import Emergency from "../components/patient/Emergency";
import VirtualConsultation from "../components/patient/VirtualConsultation";
import Invisalign from "../components/treatments/Invisalign";
import Braces from "../components/treatments/Braces";
import EarlyOrthodontics from "../components/treatments/EarlyOrthodontics";
import AdultOrthodontics from "../components/treatments/AdultOrthodontics";
import Locations from "../components/OurLocations/Locations";
import BookNow from "../components/BookNow";
import StripeCheckoutForm from "../components/stripe/StripeCheckoutForm";
// import Bag from "../components/stripe/Bag";
import ProductsPage from "../components/stripe/ProductsPage";
import SingleProductPage from "../components/stripe/SingleProductPage";
import Checkout from "../components/stripe/checkout";
// import LogoSlider from "../components/logoslider";
import Testimonials from "../components/about/Testimonials";

import Bag from "../components/bag/Bag";
import Products from "../components/products/Products";
import SingleProduct from "../components/products/SingleProduct"
import CheckoutSuccess from "../components/bag/CheckoutSuccess";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/why-choose-us" element={<WhyChooseUs />} />
      <Route path="/your-care" element={<YourCare />} />
      <Route path="/financing-treatment" element={<FinancingTreatment />} />
      <Route path="/caring-for-your-braces" element={<CaringForYourBraces />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/virtual-consultation" element={<VirtualConsultation />}/>
      <Route path="/invisalign" element={<Invisalign />} />
      <Route path="/braces" element={<Braces />} />
      <Route path="/early-orthodontics" element={<EarlyOrthodontics />} />
      <Route path="/adult-orthodontics" element={<AdultOrthodontics />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/book-now" element={<BookNow />} />
      <Route path="/stripe-checkout" element={<StripeCheckoutForm />} />
      {/* <Route path="/products" element={<ProductsPage />} /> */}
      {/* <Route path="/bag" element={<Bag />} /> */}
      {/* <Route path="/products/:productId" element={<SingleProductPage id={productId} />} /> */}
      {/* <Route path="/checkout" element={<Checkout />} /> */}
      {/* <Route path="/slider" element={<LogoSlider />} /> */}
      <Route path="/testimonials" element={<Testimonials />} />

      {/* <Route path="/products" element={<ProductsPage />} />
      <Route path="/products/:productId" element={<SingleProductPage />} /> */}

      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/bag" element={<Bag />} />
      <Route path="/checkout/success" element={<CheckoutSuccess />} />
      
      <Route path='*' element={<Error404/>} />
    </Routes>
  );
};

export default AppRoutes;
