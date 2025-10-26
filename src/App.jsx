import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import EquityCalculator from "./components/EquityCalculator";
import FooterCTA from "./components/FooterCTA";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <HowItWorks />
      <EquityCalculator />
      <FooterCTA />
    </div>
  );
}

export default App;
