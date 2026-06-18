import ReactLenis, { type LenisRef } from "lenis/react";
import { useRef } from "react";
import Gallery from "./components/Gallery";

function App() {
  const lenisRef = useRef<LenisRef>(null);

  return (
    <>
      <ReactLenis root options={{ autoRaf: true }} ref={lenisRef} />
      <main className="bg-amber-50">
        <Gallery />
      </main>
    </>
  );
}

export default App;
