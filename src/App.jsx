import { useState } from "react"
import "./App.css"

// Erzeugt dynamische Demo-Trainings für Testzwecke
function erstelleDemoTrainings() {
  const heute = new Date()

  const datumInTagen = (tage) => {
    const datum = new Date(heute)
    datum.setDate(datum.getDate() + tage)
    return datum.toISOString().split("T")[0]
  }

  return [
    {
      id: crypto.randomUUID(),
      art: "Eiskunstlauf Anfänger:innen",
      altersgruppe: "ab 12 Jahren",
      datum: datumInTagen(18),
      uhrzeit: "17:00",
      trainer: "A",
    },
    {
      id: crypto.randomUUID(),
      art: "Eislaufschule Kinder",
      altersgruppe: "4 – 10 Jahre",
      datum: datumInTagen(19),
      uhrzeit: "16:00",
      trainer: "B",
    },
    {
      id: crypto.randomUUID(),
      art: "Eishockey Jugend",
      altersgruppe: "10 – 17 Jahre",
      datum: datumInTagen(19),
      uhrzeit: "18:30",
      trainer: "C",
    },
    {
      id: crypto.randomUUID(),
      art: "Eiskunstlauf Damen",
      altersgruppe: "ab 18 Jahren",
      datum: datumInTagen(22),
      uhrzeit: "18:00",
      trainer: "A",
    },
    {
      id: crypto.randomUUID(),
      art: "Eishockey U13 Nachwuchs",
      altersgruppe: "ab 10 Jahren",
      datum: datumInTagen(24),
      uhrzeit: "10:00",
      trainer: "C",
    },
    {
      id: crypto.randomUUID(),
      art: "Eislaufschule Kinder",
      altersgruppe: "4 - 10 Jahren",
      datum: datumInTagen(25),
      uhrzeit: "10:00",
      trainer: "B",
    },
    {
      id: crypto.randomUUID(),
      art: "Eishockey Jugend",
      altersgruppe: "10 - 17 Jahren",
      datum: datumInTagen(25),
      uhrzeit: "13:00",
      trainer: "C",
    },
    {
      id: crypto.randomUUID(),
      art: "Eiskunstlauf Fortgeschrittene",
      altersgruppe: "ab 12 Jahren",
      datum: datumInTagen(26),
      uhrzeit: "18:30",
      trainer: "A",
    },
    {
      id: crypto.randomUUID(),
      art: "Eishockey Herren",
      altersgruppe: "ab 18 Jahren",
      datum: datumInTagen(26),
      uhrzeit: "20:00",
      trainer: "C",
    },
    {
      id: crypto.randomUUID(),
      art: "Eislaufschule Erwachsene",
      altersgruppe: "ab 18 Jahren",
      datum: datumInTagen(28),
      uhrzeit: "16:30",
      trainer: "B",
    },
     {
      id: crypto.randomUUID(),
      art: "Eiskunstlauf Schnupperkurs",
      altersgruppe: "Alle Altersgruppen",
      datum: datumInTagen(28),
      uhrzeit: "19:00",
      trainer: "A",
    },
   ]
  } 

  function App() {
  const [trainings, setTrainings] = useState(() => erstelleDemoTrainings())

  const [neuesTraining, setNeuesTraining] = useState({
    art: "",
    altersgruppe: "",
    datum: "",
    uhrzeit: "",
    trainer: "",
  })

  const [bearbeitungsId, setBearbeitungsId] = useState(null)

  // Benutzerrolle
  const [rolle, setRolle] = useState("trainer")

  // neue Kurse und Trainings hinzufügen
  const trainingHinzufuegen = (e) => {
    e.preventDefault()

    if (
      !neuesTraining.art ||
      !neuesTraining.datum ||
      !neuesTraining.uhrzeit ||
      !neuesTraining.trainer
    ) {
      return
    }

    if (bearbeitungsId !== null) {
      setTrainings(
        trainings.map((training) =>
          training.id === bearbeitungsId
            ? { ...training, ...neuesTraining }
            : training
        )
      )

      setBearbeitungsId(null)
    } else {
      const neuesObjekt = {
        id: Date.now(),
        ...neuesTraining,
      }

      setTrainings([...trainings, neuesObjekt])
    }

    setNeuesTraining({
      art: "",
      altersgruppe: "",
      datum: "",
      uhrzeit: "",
      trainer: "",
    })
  }

  // Kurse und Trainings bearbeiten
  const trainingBearbeiten = (training) => {
    setBearbeitungsId(training.id)

    setNeuesTraining({
      art: training.art,
      altersgruppe: training.altersgruppe,
      datum: training.datum,
      uhrzeit: training.uhrzeit,
      trainer: training.trainer,
    })
  }

  // Kurse und Trainings aus der Übersicht löschen
  const trainingLoeschen = (id) => {
    setTrainings(trainings.filter((training) => training.id !== id))
  }

  return (

    <div>
      <h1>IceSkateHub</h1>
      <p>Kurs- und Trainingsverwaltung des Eissportvereins H. e.V.</p>

      {/* Benutzerrollen: Trainer:in / Nutzer:in */}
      <div>
        <button
          className="role-button trainer-role"
          onClick={() => setRolle("trainer")}
        >
          Trainer:innen-Ansicht
        </button>

        <button
          className="role-button nutzer-role"
          onClick={() => setRolle("nutzer")}
        >
          Nutzer:innen-Ansicht
        </button>
      </div>

      {rolle === "trainer" && (
        <>
      <h2>Kurs / Training hinzufügen</h2>

      {/* Eingabeformular zum Anlegen von Kursen und Trainings */}
      <form className="training-form" onSubmit={trainingHinzufuegen}>
          <input
            type="text"
            placeholder="Trainingsart"
            value={neuesTraining.art}
            onChange={(e) =>
              setNeuesTraining({
                ...neuesTraining,
                art: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Altersgruppe"
            value={neuesTraining.altersgruppe}
            onChange={(e) =>
              setNeuesTraining({
                ...neuesTraining,
                altersgruppe: e.target.value,
              })
            }
          />

          <input
            type="date"
            value={neuesTraining.datum}
            onChange={(e) =>
              setNeuesTraining({
                ...neuesTraining,
                datum: e.target.value,
              })
            }
          />

          <input
            type="time"
            value={neuesTraining.uhrzeit}
            onChange={(e) =>
              setNeuesTraining({
                ...neuesTraining,
                uhrzeit: e.target.value,
              })
            }
          />

          <input
            type="text"
            placeholder="Trainer:in"
            value={neuesTraining.trainer}
            onChange={(e) =>
              setNeuesTraining({
                ...neuesTraining,
                trainer: e.target.value,
              })
            }
          />

        <button type="submit">
        {bearbeitungsId !== null ? "Speichern" : "Hinzufügen"}
      </button>
    </form>
  </>
)}

      <h2>Aktuelle Kurse & Trainings</h2>

      {trainings.map((training) => (
        <div key={training.id} className="training">
          <h3>{training.art}</h3>
          <p>{training.altersgruppe}</p>
          <p>Datum: {new Date(training.datum).toLocaleDateString("de-DE")}</p>
          <p>Uhrzeit: {training.uhrzeit}</p>
          <p>Trainer:in: {training.trainer}</p>

          {rolle === "trainer" && (
            <>
              <button
                className="small-button"
                onClick={() => trainingBearbeiten(training)}
              >
                Bearbeiten
              </button>

              <button
                className="small-button"
                onClick={() => trainingLoeschen(training.id)}
              >
                Löschen
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default App