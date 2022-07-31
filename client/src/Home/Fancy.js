import React, { useRef, useEffect } from "react";
import Typed from "typed.js";

const Fancy = () => {
  const typeTarget = useRef(null);

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: ["Notes","Pdf","Question Paper","Learning Resource"],
      typeSpeed: 150,
      loop:true,
      backSpeed:180
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={typeTarget} />;
};

export default Fancy;