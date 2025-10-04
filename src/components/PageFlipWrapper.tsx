import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const PageFlipWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    setIsFlipping(true);
    const timer = setTimeout(() => setIsFlipping(false), 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="perspective-container">
      <div className={`flip-card ${isFlipping ? "flipping" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default PageFlipWrapper;
