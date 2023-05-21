import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

export default function useAnimation({ children }) {
  const component = useRef();

  useLayoutEffect(() => {
    gsap.from(component, {
      x: "-10%",
    });
    gsap.to(component, {
      x: 0,
      once: true,
      duration: 3,
      scrollTrigger: {
        trigger: component,
        toggleActions: "play",
      },
    });
    return () => {};
  }, []);

  return <>{children}</>;
}
