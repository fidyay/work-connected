"use client";
import { useState, useEffect } from "react";
const useWindowSize = () => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    if (size.width === 0 && size.height === 0) {
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    }
    const handleSize = () => {
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  return size;
};

export default useWindowSize;
