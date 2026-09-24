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
      altersgruppe: "4–10 Jahre",
      datum: datumInTagen(19),
      uhrzeit: "16:00",
      trainer: "B",
    },
    {
      id: crypto.randomUUID(),
      art: "Eishockey Jugend",
      altersgruppe: "10–17 Jahre",
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
      altersgruppe: "4–10 Jahre",
      datum: datumInTagen(25),
      uhrzeit: "10:00",
      trainer: "B",
    },
    {
      id: crypto.randomUUID(),
      art: "Eishockey Jugend",
      altersgruppe: "10–17 Jahre",
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

  // Aktuell ausgewählte Rubrik
  const [aktiveSeite, setAktiveSeite] = useState("home")

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

  // Account-Menü in der Navigation
  const [accountMenuOpen, setAccountMenuOpen] = useState(false)

  // Kalenderansicht: Monat oder Woche
  const [kalenderAnsicht, setKalenderAnsicht] = useState("monat")

  // Aktuell angezeigtes Datum
  const [kalenderDatum, setKalenderDatum] = useState(new Date())

  // Neue Kurse und Trainings hinzufügen
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
        id: crypto.randomUUID(),
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

  // Kurse und Trainings löschen
  const trainingLoeschen = (id) => {
    setTrainings(trainings.filter((training) => training.id !== id))
  }

  // Kalenderübersicht - Trainings für einen bestimmten Kalendertag ermitteln
  const trainingsFuerDatum = (datum) => {
  const jahr = datum.getFullYear()
  const monat = String(datum.getMonth() + 1).padStart(2, "0")
  const tag = String(datum.getDate()).padStart(2, "0")

  const datumString = `${jahr}-${monat}-${tag}`

  return trainings
    .filter((training) => training.datum === datumString)
    .sort((a, b) => a.uhrzeit.localeCompare(b.uhrzeit))
  }

  return (
  <div className="app">

    {/* ============ HEADER / NAV ============ */}
    <header className="site-header">
      <nav className="nav">

        <a
          href="#home"
          className="logo"
          onClick={(e) => {
            e.preventDefault()
            setAktiveSeite("home")
          }}
        >
          IceSkate<span>Hub</span>
        </a>

        <ul className="nav-links">
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                setAktiveSeite("home")
              }}
            >
              Startseite
            </a>
          </li>

          <li>
            <a
              href="#courses"
              onClick={(e) => {
                e.preventDefault()
                setAktiveSeite("trainings")
              }}
            >
              Kurse & Trainings
            </a>
          </li>

          <li>
            <a
              href="#calendar"
              onClick={(e) => {
                e.preventDefault()
                setAktiveSeite("kalender")
              }}
            >
              Kalender & Trainingspläne
            </a>
          </li>

          <li>
            <a
              href="#booking"
              onClick={(e) => {
                e.preventDefault()
                setAktiveSeite("buchung")
              }}
            >
              Buchung
            </a>
          </li>

          <li>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault()
                setAktiveSeite("ueber-uns")
              }}
            >
              Über uns
            </a>
          </li>
        </ul>

        <div className="nav-cta">
          <a
            href="#contact"
            className="btn btn-ghost on-light"
            onClick={(e) => {
              e.preventDefault()
              setAktiveSeite("kontakt")
            }}
          >
            Kontakt
          </a>

          <a
            href="#booking"
            className="btn btn-primary"
            onClick={(e) => {
              e.preventDefault()
              setAktiveSeite("buchung")
            }}
          >
            Kurs buchen
          </a>


          {/* Account / Benutzerrolle */}
          <div className="account-menu">

            <button
              className="account-button"
              type="button"
              aria-label="Account-Menü öffnen"
              onClick={() => setAccountMenuOpen(!accountMenuOpen)}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
              </svg>
            </button>


            {accountMenuOpen && (
              <div className="account-dropdown">

                <div className="account-dropdown-header">
                  <strong>Mein Account</strong>
                  <span>Anmelden oder registrieren</span>
                </div>

                <div className="account-auth-actions">
                  <button type="button">
                    Anmelden
                  </button>

                  <button type="button">
                    Registrieren
                  </button>
                </div>

                <div className="account-divider"></div>

                <span className="account-label">
                  Ansicht auswählen
                </span>

                <button
                  type="button"
                  className={
                    rolle === "nutzer"
                      ? "account-role active"
                      : "account-role"
                  }
                  onClick={() => {
                    setRolle("nutzer")
                    setAccountMenuOpen(false)
                  }}
                >
                  Nutzer:innen-Ansicht
                </button>

                <button
                  type="button"
                  className={
                    rolle === "trainer"
                      ? "account-role active"
                      : "account-role"
                  }
                  onClick={() => {
                    setRolle("trainer")
                    setAccountMenuOpen(false)
                  }}
                >
                  Trainer:innen-Ansicht
                </button>

              </div>
            )}

          </div>
        </div>

        <button
          className="nav-toggle"
          type="button"
          aria-label="Menü öffnen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>
    </header>


    <main>

      {/* ============ STARTSEITE ============ */}
      {aktiveSeite === "home" && (
        <>
          {/* HERO */}
          <section className="hero" id="home">
            <div className="hero-inner">

              <span className="eyebrow">
                Eislauf · Eiskunstlauf · Eishockey
              </span>

              <h1>
                Find your flow<br />
                <em>on Ice.</em>
              </h1>

              <p className="lead">
                Du möchtest sicherer auf dem Eis werden, neue Figuren ausprobieren oder einfach die Freude am Eissport entdecken? 
                Beim Eissportverein H. e. V. findest du verschiedene Kurse und Trainingsangebote für unterschiedliche Alters- und Leistungsgruppen. 
                Schau dir unsere aktuellen Angebote an und finde das passende Training für dich.
              </p>

              <div className="hero-ctas">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => setAktiveSeite("trainings")}
                >
                  Kurse & Trainings ansehen
                </button>

                <button
                  className="btn btn-ghost on-light"
                  type="button"
                  onClick={() => setAktiveSeite("kalender")}
                >
                  Kalenderübersicht anzeigen
                </button>
              </div>

            </div>
          </section>


          {/* ============ QUICK FACTS ============ */}
          <div className="facts">
            <div className="facts-row">

              <div className="fact">
                <strong>Für jedes Alter</strong>
                <span>Kurse und Trainings für verschiedene Altersgruppen</span>
              </div>

              <div className="fact">
                <strong>Anfänger:innen bis Fortgeschrittene</strong>
                <span>Angebote für unterschiedliche Leistungsstufen</span>
              </div>

              <div className="fact">
                <strong>Einzel- & Gruppentrainings</strong>
                <span>Verschiedene Kurs- und Trainingsformate</span>
              </div>

              <div className="fact">
                <strong>Probetraining & Schnupperkurse</strong>
                <span>Unverbindlich ausprobieren und passende Angebote entdecken</span>
              </div>

            </div>
          </div>
        </>
      )}


      {/* ============ KURSE & TRAININGS (Sprint 1) ============ */}
      {aktiveSeite === "trainings" && (
        <section className="block" id="courses">

          <div className="section-head">
            <span className="eyebrow">Kurse & Trainings</span>
            <h1>Kurs- und Trainingsangebote</h1>
            <p>
              Aktuelle Kurse und Trainings des Eissportvereins H. e. V.
            </p>
          </div>

          {/* Verwaltungsbereich für Trainer:innen */}
          {rolle === "trainer" && (
            <>
              <h2>Kurs / Training hinzufügen</h2>

              <form
                className="training-form"
                onSubmit={trainingHinzufuegen}
              >
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

                <button type="submit" className="btn btn-primary">
                  {bearbeitungsId !== null
                    ? "Speichern"
                    : "Hinzufügen"}
                </button>
              </form>
            </>
          )}


          <div className="courses-grid">
            {trainings.map((training) => (
              <div key={training.id} className="training course-card">

                <span className="tag">
                  {training.altersgruppe}
                </span>

                <h3>{training.art}</h3>

                <p>
                  Datum:{" "}
                  {new Date(training.datum).toLocaleDateString("de-DE")}
                </p>

                <p>Uhrzeit: {training.uhrzeit}</p>

                <p>Trainer:in: {training.trainer}</p>

                {rolle === "trainer" && (
                  <div className="training-actions">
                    <button
                      className="small-button"
                      type="button"
                      onClick={() => trainingBearbeiten(training)}
                    >
                      Bearbeiten
                    </button>

                    <button
                      className="small-button"
                      type="button"
                      onClick={() => trainingLoeschen(training.id)}
                    >
                      Löschen
                    </button>
                  </div>
                )}

              </div>
            ))}
          </div>

        </section>
      )}


      {/* ============ KALENDER (Sprint 2) ============ */}
      {aktiveSeite === "kalender" && (
        <section className="block" id="calendar">
          <div className="section-head">
            <span className="eyebrow">Kalender & Trainingspläne</span>
            <h1>Kalenderübersicht</h1>
            <p>
              Diese Funktion wird im folgenden Sprint umgesetzt.
            </p>
          </div>
        </section>
      )}


      {/* ============ BUCHUNG (Sprint 3)============ */}
      {aktiveSeite === "buchung" && (
        <section className="block" id="booking">
          <div className="section-head">
            <span className="eyebrow">Buchung</span>
            <h1>Kursbuchung</h1>
            <p>
              Die digitale Buchungs- und Stornierungsfunktion wird in
              einem späteren Sprint umgesetzt.
            </p>
          </div>
        </section>
      )}


      {/* ============ ÜBER UNS (Sprint 4)============ */}
      {aktiveSeite === "ueber-uns" && (
        <section className="block" id="about">
          <div className="section-head">
            <span className="eyebrow">Über uns</span>
            <h1>Eissportverein H. e. V.</h1>
            <p>
              Informationen zur Eishalle, zu Öffnungszeiten, öffentlichen Laufzeiten,
              Veranstaltungen und weiteren Vereinsangeboten - diese Funktion wird in
              einem späteren Sprint umgesetzt.
            </p>
          </div>
        </section>
      )}


      {/* ============ KONTAKT (Sprint 4)============ */}
      {aktiveSeite === "kontakt" && (
        <section className="block" id="contact">
          <div className="section-head">
            <span className="eyebrow">Kontakt</span>
            <h1>Kontakt</h1>
            <p>
              Das Kontaktformular wird in einem späteren Sprint umgesetzt.
            </p>
          </div>
        </section>
      )}

    </main>

    {/* ============ FOOTER ============ */}
    <footer>
      <div className="footer-inner">

        <div>
          <a
            href="#home"
            className="logo"
            onClick={(e) => {
              e.preventDefault()
              setAktiveSeite("home")
            }}
          >
            IceSkate<span>Hub</span>
          </a>

          <p className="footer-description">
            Die zentrale Plattform für Kurse, Trainingszeiten und
            Informationen des Eissportvereins H. e. V.
          </p>
        </div>


        <div className="footer-links">

          <div>
            <h4>Navigation</h4>

            <ul>
              <li>
                <a
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault()
                    setAktiveSeite("home")
                  }}
                >
                  Startseite
                </a>
              </li>

              <li>
                <a
                  href="#courses"
                  onClick={(e) => {
                    e.preventDefault()
                    setAktiveSeite("trainings")
                  }}
                >
                  Kurse & Trainings
                </a>
              </li>

              <li>
                <a
                  href="#calendar"
                  onClick={(e) => {
                    e.preventDefault()
                    setAktiveSeite("kalender")
                  }}
                >
                  Kalender & Trainingspläne
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault()
                    setAktiveSeite("ueber-uns")
                  }}
                >
                  Über uns
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    setAktiveSeite("kontakt")
                  }}
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>


          <div>
            <h4>Rechtliches</h4>

            <ul>
              <li><a href="#">Impressum</a></li>
              <li><a href="#">Datenschutz</a></li>
              <li><a href="#">Nutzungsbedingungen</a></li>
            </ul>
          </div>


          <div>
            <h4>Social Media</h4>

            <ul>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">TikTok</a></li>
            </ul>
          </div>

        </div>
      </div>


      <div className="footer-bottom">
        <span>© 2026 Eissportverein H. e. V.</span>
        <span>IceSkateHub</span>
      </div>
    </footer>

  </div>
)      
}

export default App