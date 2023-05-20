import { GlobalScrollProvider } from "../hooks/useGlobalScroll";
import { GlobalMouseMoveProvider } from "../hooks/useGlobalMouseMove";

export default function Wrapper({ children }) {
  return (
    <GlobalScrollProvider>
      <GlobalMouseMoveProvider>{children}</GlobalMouseMoveProvider>
    </GlobalScrollProvider>
  );
}
