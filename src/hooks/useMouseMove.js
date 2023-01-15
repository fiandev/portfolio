import { useEffect, useRef } from 'react';

export const useMouseMove = (onMouseMove = (mouseX = 0, mouseY = 0) => {}) => {
  // use a ref to avoid an infinite loop when passing `onMouseMove` to useEffect dependency array
  const _onMouseMove = useRef(onMouseMove);
  _onMouseMove.current = onMouseMove;

  useEffect(() => {
    let currentMouseX = 0;
    let currentMouseY = 0;
    let currentWinWidth = window.innerWidth || 0;
    let currentWinHeight = window.innerHeight || 0;
    let prevMouseX = currentMouseX;
    let prevMouseY = currentMouseY;
    let prevWinWidth = currentWinWidth;
    let prevWinHeight = currentWinHeight;

    const onTick = () => {
      // prettier-ignore
      if (
        prevMouseX !== currentMouseX ||
        prevMouseY !== currentMouseY ||
        prevWinWidth !== currentWinWidth ||
        prevWinHeight !== currentWinHeight
      ) {
        _onMouseMove.current(
          -(currentWinWidth * 0.5 - currentMouseX) / (currentWinWidth * 0.5),
          (currentWinHeight * 0.5 - currentMouseY) / (currentWinHeight * 0.5),
        );
      }

      prevMouseX = currentMouseX;
      prevMouseY = currentMouseY;
      prevWinWidth = currentWinWidth;
      prevWinHeight = currentWinHeight;
      window.requestAnimationFrame(onTick);
    };
    onTick();

    const onMouseMove = (e) => {
      currentMouseX = e.clientX;
      currentMouseY = e.clientY;
    };

    const onResize = (e) => {
      currentWinHeight = window.innerHeight || 0;
      currentWinWidth = window.innerWidth || 0;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
    };
  }, [_onMouseMove]);
};
