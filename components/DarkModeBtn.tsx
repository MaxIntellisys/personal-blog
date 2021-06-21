import useDarkMode from '../hooks/useDarkMode';
import DarkModeStyles from './DarkModeStyles';

const animateBtn = (element: HTMLDivElement, darkMode: boolean) => {
  if (darkMode) {
    element.style.transition = 'all 0.45s ease-in-out';
    element.style.transform = 'translatey(25px)';
    element.style.background = 'darkblue';
  } else {
    element.style.transition = 'all 0.45s ease-in-out';
    element.style.transform = 'translatey(-25px)';
    element.style.background = '#7ac0f9';
  }
};

export default function DarkModeBtn() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  const DarkModeClick = ({ target }: { target: EventTarget }) => {
    const div = (target as HTMLDivElement).firstElementChild as HTMLDivElement;
    animateBtn(div, darkMode);
    toggleDarkMode();
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
          background: ${darkMode ? '#7ac0f9' : 'darkblue'};
          transform: ${darkMode ? 'translatey(-25px)' : 'translatey(25px)'};
        }

        .sun {
          transform: translatex(16px);
        }
      `}</style>
      <DarkModeStyles darkMode={darkMode} />
    </div>
  );
}
