import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Antropocene from "./pages/Antropocene";
import CrisiClimatica from "./pages/CrisiClimatica";
import Agenda2030 from "./pages/Agenda2030";
import RisorseEnergetiche from "./pages/RisorseEnergetiche";
import Acqua from "./pages/Acqua";
import Rifiuti from "./pages/Rifiuti";
import EconomiaCircolare from "./pages/EconomiaCircolare";
import Crediti from "./pages/Crediti";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter basename="/earth-guardians">
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/antropocene" element={<Antropocene />} />
      <Route path="/crisi-climatica" element={<CrisiClimatica />} />
      <Route path="/agenda-2030" element={<Agenda2030 />} />
      <Route path="/risorse-energetiche" element={<RisorseEnergetiche />} />
      <Route path="/acqua" element={<Acqua />} />
      <Route path="/rifiuti" element={<Rifiuti />} />
      <Route path="/economia-circolare" element={<EconomiaCircolare />} />
      <Route path="/crediti" element={<Crediti />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
