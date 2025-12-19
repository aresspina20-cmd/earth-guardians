import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log('App mounting...');

try {

createRoot(document.getElementById("root")!).render(<App />);
  } catch (error) { console.error('App mounting error:', error)
