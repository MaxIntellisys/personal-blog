import React from "react";

export default function DarkModeStyles({ darkMode }: { darkMode: boolean }) {
  return (
    <style global jsx>{`
      body {
        background: ${darkMode ? "#000" : "#fff"};
        color: ${darkMode ? "#fff" : "#000"};
      }
    `}</style>
  );
}
