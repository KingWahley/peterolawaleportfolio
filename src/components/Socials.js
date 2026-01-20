import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const Socials = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    const gitHub = ref1.current;
    const linkedIn = ref2.current;
    const twitter = ref3.current;

    gsap.from([gitHub, linkedIn, twitter], 1, {
      delay: 1,
      ease: "Bounce.easeOut",
      opacity: 0,
      y: 65,
      rotate: 360,
      stagger: {
        amount: 0.18,
      },
    });
  }, []);

  return (
    <ul
      style={{
        listStyle: "none",
        display: "flex",
        gap: "20px",
        padding: 0,
        margin: 0,
      }}
    >
      <li ref={ref1}>
        <a
          href="https://github.com/KingWahley"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#000",
            fontSize: "28px",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          <i className="fab fa-github"></i>
        </a>
      </li>

      <li ref={ref2}>
        <a
          href="https://linkedin.com/in/olawale-peter-5898a9249"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#000",
            fontSize: "28px",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </li>

      <li ref={ref3}>
        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noreferrer"
          style={{
            color: "#000",
            fontSize: "28px",
            fontWeight: "700",
            textDecoration: "none",
          }}
        >
          <i className="fab fa-instagram"></i>
        </a>
      </li>
    </ul>
  );
};

export default Socials;
