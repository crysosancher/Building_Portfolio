import CountUp from "react-countup";
import { useEffect, useRef, useState } from "react";
const Counter = ({ end, decimals }) => {
  const nodeRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  return (
    <CountUp
      end={end ? end : 100}
      duration={3}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => {
        // Merge refs so we can observe visibility and attach CountUp ref
        const setRefs = (el) => {
          nodeRef.current = el;
          if (typeof countUpRef === "function") countUpRef(el);
          else if (countUpRef && "current" in countUpRef)
            countUpRef.current = el;
        };

        useEffect(() => {
          if (!nodeRef.current || hasStarted) return;
          const observer = new IntersectionObserver(
            (entries) => {
              entries.forEach((entry) => {
                if (entry.isIntersecting && !hasStarted) {
                  setHasStarted(true);
                  start();
                  observer.disconnect();
                }
              });
            },
            { threshold: 0.2 }
          );
          observer.observe(nodeRef.current);
          return () => observer.disconnect();
        }, [hasStarted]);

        return (
          <span
            className="count-text"
            data-from="0"
            data-to={end}
            ref={setRefs}
          >
            count
          </span>
        );
      }}
    </CountUp>
  );
};

export default Counter;
