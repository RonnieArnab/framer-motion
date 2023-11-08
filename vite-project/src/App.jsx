import { useEffect, useState } from "react";
import { motion } from "framer-motion";
function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setcursorVarient] = useState("default");

  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference",
    },
  };

  const mouseEnter = () => setcursorVarient("text");
  const mouseLeave = () => setcursorVarient("default");

  return (
    <div className="flex justify-center items-center h-[100vh] bg-yellow-400">
      <h1
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        className="font-bold text-8xl">
        Arnab
      </h1>
      <motion.div
        variants={variants}
        animate={cursorVariant}
        className="bg-black h-[32px] w-[32px] rounded-full fixed top-0 left-0 pointer-events-none"></motion.div>
    </div>
  );
}

export default App;
