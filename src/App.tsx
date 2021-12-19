import React from "react";
import "./App.css";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import customParseFormat from "dayjs/plugin/customParseFormat";
import Graduation from "./components/Graduation";

dayjs.extend(customParseFormat);

function App() {
  const now = dayjs();
  const endOfSchool = dayjs("15-07-2022", "DD-MM-YYYY", "fr");
  const days = endOfSchool.diff(now, "days");
  const weeks = endOfSchool.diff(now, "week");
  const months = endOfSchool.diff(now, "month");

  return (
    <div className="App">
      <header className="App-header">
        <img
          src="school-logo.png"
          alt="school logo"
          width={"300"}
          height={"auto"}
        />
        <Graduation />
        <div>
          <p>
            Les études se terminent le {endOfSchool.format("DD MMMM YYYY")}.
          </p>
          <p>Soit dans {months} mois</p>
          <p>ou {weeks} semaines</p>
          <p>ou {days} jours</p>
        </div>
        <p>Stay strong 💪</p>
      </header>
    </div>
  );
}

export default App;
