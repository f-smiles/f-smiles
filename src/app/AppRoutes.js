import { Routes, Route } from "react-router";
import { useLocation } from "react-router-dom";
import Home from "../components/home/Home";
import Error404 from "../components/Error404";
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
import Testimonials from "../components/about/Testimonials";
import Allentown from "../components/OurLocations/Allentown";
import Bethlehem from "../components/OurLocations/Bethlehem";
import Schnecksville from "../components/OurLocations/Schnecksville";
import Lehighton from "../components/OurLocations/Lehighton";
import Bag from "../components/bag/Bag";
import Products from "../components/products/Products";
import SingleProduct from "../components/products/SingleProduct";
import CheckoutSuccess from "../components/bag/CheckoutSuccess";

const AppRoutes = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const sessionId = queryParams.get('session_id');

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/allentown" element={<Allentown />} />
      <Route path="/bethlehem" element={<Bethlehem />} />
      <Route path="/schnecksville" element={<Schnecksville />} />
      <Route path="/lehighton" element={<Lehighton />} />
      <Route path="/our-team" element={<OurTeam />} />
      <Route path="/why-choose-us" element={<WhyChooseUs />} />
      <Route path="/your-care" element={<YourCare />} />
      <Route path="/financing-treatment" element={<FinancingTreatment />} />
      <Route path="/caring-for-your-braces" element={<CaringForYourBraces />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/virtual-consultation" element={<VirtualConsultation />} />
      <Route path="/invisalign" element={<Invisalign />} />
      <Route path="/braces" element={<Braces />} />
      <Route path="/early-orthodontics" element={<EarlyOrthodontics />} />
      <Route path="/adult-orthodontics" element={<AdultOrthodontics />} />
      <Route path="/locations" element={<Locations />} />
      <Route path="/book-now" element={<BookNow />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="/bag" element={<Bag />} />
      <Route 
        path="/checkout/success" 
        element={sessionId ? <CheckoutSuccess /> : <Error404 />} 
      />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default AppRoutes;
