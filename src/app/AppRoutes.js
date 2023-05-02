import { Routes, Route } from "react-router";
import Home from "../components/Home";
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
import Allentown from "../components/OurLocations/Allentown";
import BookNow from "../components/BookNow";
import StripeCheckoutForm from "../components/stripe/StripeCheckoutForm";
import ProductsPage from "../components/stripe/ProductsPage";
import Cart from "../components/stripe/Cart";
import SingleProductPage from "../components/stripe/SingleProductPage";

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
      <Route path="adult-orthodontics" element={<AdultOrthodontics />} />
      <Route path="/allentown" element={<Allentown />} />
      <Route path="/book-now" element={<BookNow />} />
      <Route path="/stripe-checkout" element={<StripeCheckoutForm />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:id" element={<SingleProductPage />} />
    </Routes>
  );
};

export default AppRoutes;
