import { useRef } from "react";
import CaseStudy from "./components/CaseStudy";
import CoreOffer from "./components/CoreOffer";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Painkillers from "./components/Painkillers";
import Vision from "./components/Vision";
import Background from "./components/Background";

function App() {
  const heroRef = useRef(null);
  const coreOfferRef = useRef(null);
  const painkillersRef = useRef(null);
  const caseStudyRef = useRef(null);
  const faqRef = useRef(null);
  const visionRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <div className="relative min-h-screen text-white">
      <Background />
      <Navbar
        refs={{
          heroRef,
          coreOfferRef,
          painkillersRef,
          caseStudyRef,
          faqRef,
          visionRef,
          footerRef,
        }}
      />
      <section ref={heroRef}><Hero /></section>
      <section ref={coreOfferRef}><CoreOffer /></section>
      <section ref={painkillersRef}><Painkillers /></section>
      <section ref={caseStudyRef}><CaseStudy /></section>
      <section ref={faqRef}><FAQSection /></section>
      <section ref={visionRef}><Vision /></section>
      <section ref={footerRef}><Footer /></section>
    </div>
  );
}

export default App;
