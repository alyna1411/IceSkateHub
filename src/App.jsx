import "./App.css"

function App() {
  const trainings = [
    {
      id: 1,
      art: "Eiskunstlauf Damen",
      altersgruppe: "ab 18 Jahren",
      datum: "22.10.2026",
      uhrzeit: "18:00",
      trainer: "Trainer:in A",
    },
    {
      id: 2,
      art: "Eiskunstlauf Anfänger:innen",
      altersgruppe: "ab 12 Jahren",
      datum: "24.10.2026",
      uhrzeit: "13:00",
      trainer: "Trainer:in A",
    },
    {
      id: 3,
      art: "Eishockey U13 Nachwuchs",
      altersgruppe: "ab 10 Jahren",
      datum: "25.10.2026",
      uhrzeit: "10:00",
      trainer: "Trainer:in C",
    },
    {
      id: 4,
      art: "Eislaufschule Kinder",
      altersgruppe: "4 - 10 Jahre",
      datum: "27.10.2026",
      uhrzeit: "16:00",
      trainer: "Trainer:in B",
    },
    {
      id: 5,
      art: "Eiskunstlauf Fortgeschrittene",
      altersgruppe: "ab 12 Jahren",
      datum: "30.10.2026",
      uhrzeit: "19:00",
      trainer: "Trainer:in A",
    },
    {
      id: 6,
      art: "Eishockey Jugend",
      altersgruppe: "10 - 17 Jahren",
      datum: "02.11.2026",
      uhrzeit: "17:00",
      trainer: "Trainer:in C",
    },
    {
      id: 7,
      art: "Eishockey Herren",
      altersgruppe: "ab 18 Jahren",
      datum: "02.11.2026",
      uhrzeit: "18:30",
      trainer: "Trainer:in C",
    },
    {
      id: 8,
      art: "Eislaufschule Erwachsene",
      altersgruppe: "ab 18 Jahren",
      datum: "02.11.2026",
      uhrzeit: "20:00",
      trainer: "Trainer:in B",
    },
    {
      id: 9,
      art: "Eishockey U15",
      altersgruppe: "13 - 15 Jahre",
      datum: "08.11.2026",
      uhrzeit: "14:00",
      trainer: "Trainer:in C",
    },
    {
      id: 10,
      art: "Eiskunstlauf Schnupperkurs",
      altersgruppe: "Alle Altersgruppen",
      datum: "11.11.2026",
      uhrzeit: "17:00",
      trainer: "Trainer:in A",
    },
  ]

  return (
    <div>
      <h1>IceSkateHub</h1>
      <p>Kurs- und Trainingsverwaltung des Eissportvereins H. e. V.</p>

      <h2>Aktuelle Kurse & Trainings</h2>

      {trainings.map((training) => (
        <div key={training.id} className="training">
          <h3>{training.art}</h3>
          <p>{training.altersgruppe}</p>
          <p>Datum: {training.datum}</p>
          <p>Uhrzeit: {training.uhrzeit}</p>
          <p>Trainer:in: {training.trainer}</p>
        </div>
      ))}
    </div>
  )
}

export default App