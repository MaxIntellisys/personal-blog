import useDarkMode from "../hooks/useDarkMode";
import DarkModeStyles from "./DarkModeStyles";

export default function DarkModeBtn() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  const DarkModeClick = ({ target }: any) => {
    const icons = target.firstChild;

    toggleDarkMode();

    if (darkMode) {
      icons.style.transition = "all 0.45s ease-in-out";
      icons.style.transform = "translatey(25px)";
      icons.style.background = "darkblue";
    } else {
      icons.style.transition = "all 0.45s ease-in-out";
      icons.style.transform = "translatey(-25px)";
      icons.style.background = "#7ac0f9";
    }
  };
  return (
    <div className="btn" onClick={DarkModeClick}>
      <div className="icons">
        <span className="moon">🌙</span>
        <span className="sun">🌞</span>
      </div>

      <style jsx scoped>{`
        .btn {
          display: flex;
          align-items: center;
          min-width: 65px;
          height: 45px;
          border: none;
          border-radius: 28px;
          background: transparent;
          cursor: pointer;
          overflow: hidden;
        }

        .icons {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 105px;
          width: 100%;
          padding: 10px;
          font-size: 24px;
          z-index: -1;
          background: ${darkMode ? "#7ac0f9" : "darkblue"};
          transform: ${darkMode ? "translatey(-25px)" : "translatey(25px)"};
        }

        .sun {
          transform: translatex(16px);
        }
      `}</style>

      <DarkModeStyles darkMode={darkMode} />
    </div>
  );
}
