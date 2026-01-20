import { useDarkMode } from "./DarkModeContext";

const DarkModeToggle = () => {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      style={{
        background: "transparent",
        border: "2px solid #000",
        borderRadius: "50px",
        padding: "8px 12px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "48px",
        height: "48px",
        transition: "transform 0.25s ease, border-color 0.25s ease",
      }}
      aria-label="Toggle dark mode"
    >
      <i
        className={isDark ? "fas fa-sun" : "fas fa-moon"}
        style={{
          fontSize: "20px",
          color: isDark ? "#ffe600" : "#000",
          transition: "transform 0.35s ease, opacity 0.25s ease",
          transform: isDark
            ? "rotate(180deg) scale(1.1)"
            : "rotate(0deg) scale(1)",
        }}
      />
    </button>
  );
};

export default DarkModeToggle;
