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
      datum: datumInTagen(34),
      uhrzeit: "17:00",
      trainer: "A",
        typ: "kurs",
    },
    {
      id: crypto.randomUUID(),
      art: "Eislaufschule Kinder",
      altersgruppe: "4–10 Jahre",
      datum: datumInTagen(35),
      uhrzeit: "16:00",
      trainer: "B",
         typ: "kurs",
    },
    {
      id: crypto.randomUUID(),
      art: "Eishockey Jugend",
      altersgruppe: "10–17 Jahre",
      datum: datumInTagen(35),
      uhrzeit: "18:30",
      trainer: "C",
         typ: "training"
    },
    {
      id: crypto.randomUUID(),
      art: "Eiskunstlauf Damen",
      altersgruppe: "ab 18 Jahren",
      datum: datumInTagen(38),
      uhrzeit: "18:00",
      trainer: "A",
       typ: "training"
    },
    {
      id: crypto.randomUUID(),
      art: "Eishockey U13",
      altersgruppe: "9-13 Jahre",
      datum: datumInTagen(40),
      uhrzeit: "10:00",
      trainer: "C",
       typ: "training"
    },
    {
      id: crypto.randomUUID(),
      art: "Eislaufschule Kinder",
      altersgruppe: "4–10 Jahre",
      datum: datumInTagen(40),
      uhrzeit: "12:00",
      trainer: "B",
       typ: "kurs",
    },
    {
      id: crypto.randomUUID(),
      art: "Eishockey Jugend",
      altersgruppe: "10–17 Jahre",
      datum: datumInTagen(40),
      uhrzeit: "13:00",
      trainer: "C",
       typ: "training",
    },
    {
      id: crypto.randomUUID(),
      art: "Eiskunstlauf Fortgeschrittene",
      altersgruppe: "ab 12 Jahren",
      datum: datumInTagen(43),
      uhrzeit: "18:30",
      trainer: "A",
       typ: "kurs",
    },
    {
      id: crypto.randomUUID(),
      art: "Eishockey Herren",
      altersgruppe: "ab 18 Jahren",
      datum: datumInTagen(43),
      uhrzeit: "20:00",
      trainer: "C",
       typ: "training"
    },
    {
      id: crypto.randomUUID(),
      art: "Eislaufschule Erwachsene",
      altersgruppe: "ab 18 Jahren",
      datum: datumInTagen(45),
      uhrzeit: "16:30",
      trainer: "B",
       typ: "kurs",
    },
    {
      id: crypto.randomUUID(),
      art: "Eiskunstlauf Schnupperkurs",
      altersgruppe: "Alle Altersgruppen",
      datum: datumInTagen(45),
      uhrzeit: "19:00",
      trainer: "A",
       typ: "kurs",
    },
    {
      id: crypto.randomUUID(),
      art: "Eislaufschule Schnupperkurs",
      altersgruppe: "Alle Altersgruppen",
      datum: datumInTagen(49),
      uhrzeit: "10:00",
      trainer: "B",
       typ: "kurs",
    },
    {
      id: crypto.randomUUID(),
      art: "Eislaufschule Nachwuchs",
      altersgruppe: "4-10 Jahre",
      datum: datumInTagen(49),
      uhrzeit: "12:00",
      trainer: "B",
       typ: "kurs",
    },
    {
      id: crypto.randomUUID(),
      art: "Eishockey Damen",
      altersgruppe: "ab 18 Jahren",
      datum: datumInTagen(50),
      uhrzeit: "11:00",
      trainer: "C",
       typ: "kurs"
    },
    {
      id: crypto.randomUUID(),
      art: "Eishockey U17",
      altersgruppe: "15-17 Jahre",
      datum: datumInTagen(50),
      uhrzeit: "15:00",
      trainer: "C",
       typ: "training"
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
    typ: "kurs",
  })

  const [bearbeitungsId, setBearbeitungsId] = useState(null)

  // Benutzerrolle
  const [rolle, setRolle] = useState("trainer")

  // Account-Menü in der Navigation
  const [accountMenuOpen, setAccountMenuOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

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
      typ: "kurs",
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
      typ: training.typ,
    })
  }

  // Kurse und Trainings löschen
  const trainingLoeschen = (id) => {
    setTrainings(trainings.filter((training) => training.id !== id))
  }

  // KALENDER Funktion
  
  // Trainings für einen bestimmten Kalendertag ermitteln
  const trainingsFuerDatum = (datum) => {
  const jahr = datum.getFullYear()
  const monat = String(datum.getMonth() + 1).padStart(2, "0")
  const tag = String(datum.getDate()).padStart(2, "0")

  const datumString = `${jahr}-${monat}-${tag}`

  return trainings
    .filter((training) => training.datum === datumString)
    .sort((a, b) => a.uhrzeit.localeCompare(b.uhrzeit))
  }

  // Montag einer Woche ermitteln
  const startDerWoche = (datum) => {
    const neuesDatum = new Date(datum)
    const wochentag = neuesDatum.getDay()

    const differenz =
      wochentag === 0 ? -6 : 1 - wochentag

    neuesDatum.setDate(neuesDatum.getDate() + differenz)
    neuesDatum.setHours(0, 0, 0, 0)

    return neuesDatum
  }
  
  // 42 Kalendertage für die Monatsansicht erzeugen
  const tageFuerMonatsansicht = () => {
    const jahr = kalenderDatum.getFullYear()
    const monat = kalenderDatum.getMonth()

    const ersterTagDesMonats = new Date(jahr, monat, 1)
    const ersterKalendertag = startDerWoche(ersterTagDesMonats)

    return Array.from({ length: 42 }, (_, index) => {
      const datum = new Date(ersterKalendertag)
      datum.setDate(ersterKalendertag.getDate() + index)

      return datum
    })
  }

  // Sieben Tage für die Wochenansicht erzeugen
  const tageFuerWochenansicht = () => {
    const montag = startDerWoche(kalenderDatum)

    return Array.from({ length: 7 }, (_, index) => {
      const datum = new Date(montag)
      datum.setDate(montag.getDate() + index)

      return datum
    })
  }


  // Zum vorherigen Zeitraum wechseln
  const vorherigerZeitraum = () => {
    const neuesDatum = new Date(kalenderDatum)

    if (kalenderAnsicht === "monat") {
      neuesDatum.setMonth(neuesDatum.getMonth() - 1)
    } else {
      neuesDatum.setDate(neuesDatum.getDate() - 7)
    }

    setKalenderDatum(neuesDatum)
  }

  // Zum nächsten Zeitraum wechseln
  const naechsterZeitraum = () => {
    const neuesDatum = new Date(kalenderDatum)

    if (kalenderAnsicht === "monat") {
      neuesDatum.setMonth(neuesDatum.getMonth() + 1)
    } else {
      neuesDatum.setDate(neuesDatum.getDate() + 7)
    }

    setKalenderDatum(neuesDatum)
  }


  // Zum heutigen Datum zurückkehren
  const geheZuHeute = () => {
    setKalenderDatum(new Date())
  }


  // Prüfen, ob ein Datum heute ist
  const istHeute = (datum) => {
    const heute = new Date()

    return (
      datum.getDate() === heute.getDate() &&
      datum.getMonth() === heute.getMonth() &&
      datum.getFullYear() === heute.getFullYear()
    )
  }

  // Menu schließen
  const wechsleSeite = (seite) => {
    setAktiveSeite(seite)
    setMenuOpen(false)
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

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                wechsleSeite("home")
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
                wechsleSeite("trainings")
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
                wechsleSeite("kalender")
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
                wechsleSeite("buchung")
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
                wechsleSeite("ueber-uns")
              }}
            >
              Über uns
            </a>
          </li>
          <li className="mobile-contact-link">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                wechsleSeite("kontakt")
              }}
            >
              Kontakt
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
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          type="button"
          aria-label="Menü öffnen"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
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


      {/* ============ KURSE & TRAININGS ============ */}
      {aktiveSeite === "trainings" && (
        <section className="block" id="courses">

          <div className="section-head">
            <span className="eyebrow">Kurse & Trainings</span>
            <h1>Kurs- und Trainingsangebote</h1>
            <p>
              Entdecke aktuelle Kurse und Trainingsangebote des Eissportvereins H. e. V. für verschiedene Alters- und Leistungsgruppen.
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

                <select
                  value={neuesTraining.typ}
                  onChange={(e) =>
                    setNeuesTraining({
                      ...neuesTraining,
                      typ: e.target.value,
                    })
                  }
                >
                  <option value="kurs">Buchbarer Kurs</option>
                  <option value="training">Vereinstraining</option>
                </select>

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

    
    {/* ============ KALENDER & TRAININGSPLÄNE ============ */}
    {aktiveSeite === "kalender" && (
      <section className="block calendar-section" id="calendar">

        <div className="section-head">
          <span className="eyebrow">Kalender & Trainingspläne</span>

          <h1>Alles auf einem Blick</h1>

          <p>Kalenderübersicht buchbarer Kurse sowie aktuell ausgehängte Trainingspläne
            für Vereinsgruppen und Teams.
          </p>
        </div>


    {/* Kalendersteuerung */}
    <div className="calendar-toolbar">

      <div className="calendar-navigation">
        <button
          type="button"
          className="calendar-nav-button"
          onClick={vorherigerZeitraum}
          aria-label="Vorheriger Zeitraum"
        >
          ←
        </button>

        <h2 className="calendar-title">
          {kalenderAnsicht === "monat"
            ? kalenderDatum.toLocaleDateString("de-DE", {
                month: "long",
                year: "numeric",
              })
            : `${tageFuerWochenansicht()[0].toLocaleDateString(
                "de-DE",
                {
                  day: "2-digit",
                  month: "2-digit",
                }
              )} – ${tageFuerWochenansicht()[6].toLocaleDateString(
                "de-DE",
                {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                }
              )}`}
        </h2>

        <button
          type="button"
          className="calendar-nav-button"
          onClick={naechsterZeitraum}
          aria-label="Nächster Zeitraum"
        >
          →
        </button>

        <button
          type="button"
          className="calendar-today-button"
          onClick={geheZuHeute}
        >
          Heute
        </button>
      </div>

      {/* Wechsel Monat / Woche */}
      <div className="calendar-view-switch">

        <button
          type="button"
          className={
            kalenderAnsicht === "monat"
              ? "calendar-view-button active"
              : "calendar-view-button"
          }
          onClick={() => setKalenderAnsicht("monat")}
        >
          Monat
        </button>

        <button
          type="button"
          className={
            kalenderAnsicht === "woche"
              ? "calendar-view-button active"
              : "calendar-view-button"
          }
          onClick={() => setKalenderAnsicht("woche")}
        >
          Woche
        </button>

      </div>
    </div>

    <div className="calendar-legend">
      <div className="legend-item">
        <span className="legend-color legend-training"></span>
        <span>Vereinstraining</span>
      </div>

      <div className="legend-item">
        <span className="legend-color legend-course"></span>
        <span>Buchbarer Kurs</span>
      </div>
    </div>

    {/* ============ MONATSANSICHT ============ */}
    {kalenderAnsicht === "monat" && (
      <div className="calendar-month">

        <div className="calendar-weekdays">
          <span>Mo</span>
          <span>Di</span>
          <span>Mi</span>
          <span>Do</span>
          <span>Fr</span>
          <span>Sa</span>
          <span>So</span>
        </div>


        <div className="calendar-grid">

          {tageFuerMonatsansicht().map((datum) => {
            const tagesTrainings = trainingsFuerDatum(datum)

            const istAktuellerMonat =
              datum.getMonth() === kalenderDatum.getMonth()

            return (
              <div
                key={datum.toISOString()}
                className={
                  `calendar-day ${
                    !istAktuellerMonat
                      ? "outside-month"
                      : ""
                  } ${
                    istHeute(datum)
                      ? "today"
                      : ""
                  }`
                }
              >

                <div className="calendar-day-number">
                  {datum.getDate()}
                </div>


                <div className="calendar-events">

                  {tagesTrainings.map((training) => (
                    <div
                      key={training.id}
                      className={`calendar-event typ-${training.typ}`}
                    >
                      <strong>
                        {training.uhrzeit}
                      </strong>

                      <span>
                        {training.art}
                      </span>
                    </div>
                  ))}

                </div>

              </div>
            )
          })}

        </div>
      </div>
    )}


    {/* ============ WOCHENANSICHT ============ */}
    {kalenderAnsicht === "woche" && (
      <div className="calendar-week">

        {tageFuerWochenansicht().map((datum) => {
          const tagesTrainings = trainingsFuerDatum(datum)

          return (
            <div
              key={datum.toISOString()}
              className={
                istHeute(datum)
                  ? "calendar-week-day today"
                  : "calendar-week-day"
              }
            >

              <div className="week-day-header">
                <span>
                  {datum.toLocaleDateString("de-DE", {
                    weekday: "short",
                  })}
                </span>

                <strong>
                  {datum.toLocaleDateString("de-DE", {
                    day: "2-digit",
                    month: "2-digit",
                  })}
                </strong>
              </div>


              <div className="week-day-events">

                {tagesTrainings.length === 0 && (
                  <p className="no-training">
                    - / -
                  </p>
                )}


                {tagesTrainings.map((training) => (
                  <div
                    key={training.id}
                    className={`week-training typ-${training.typ}`}
                  >
                    <strong>
                      {training.uhrzeit}
                    </strong>
                    <h3>
                      {training.art}
                    </h3>
                    <p>
                      {training.altersgruppe}
                    </p>
                    <p>
                      Trainer:in: {training.trainer}
                    </p>
                  </div>
                ))} 
                </div>
              </div>
              )
            })}
          </div>
        )}
      </section>
    )}


      {/* ============ BUCHUNG ============ */}
      {aktiveSeite === "buchung" && (
        <section className="block" id="booking">
          <div className="section-head">
            <span className="eyebrow">Buchung</span>
            <h1>Kurs oder Training buchen</h1>
            <p>
              Die digitale Buchungs- und Stornierungsfunktion wird in
              einem späteren Sprint umgesetzt.
            </p>
          </div>
        </section>
      )}


      {/* ============ ÜBER UNS ============ */}
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


      {/* ============ KONTAKT ============ */}
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
              setMenuOpen(false)
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
                    setMenuOpen(false)
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
                    setMenuOpen(false)
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
                    setMenuOpen(false)
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
                    setMenuOpen(false)
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
                    setMenuOpen(false)
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