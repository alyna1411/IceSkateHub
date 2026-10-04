import { useState } from "react"
import "./App.css"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper/modules"

import "swiper/css/bundle"

// dynamische Demo-Trainings für Testzwecke
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
      altersgruppe: "12-17 Jahre",
      minAlter: 12,
      maxAlter: 17,
      datum: datumInTagen(34),
      uhrzeit: "17:00",
      trainer: "A",
        typ: "kurs",
    },
    {
      id: crypto.randomUUID(),
      art: "Eislaufschule Kinder",
      altersgruppe: "4–11 Jahre",
      minAlter: 4,
      maxAlter: 11,
      datum: datumInTagen(35),
      uhrzeit: "16:00",
      trainer: "B",
         typ: "kurs",
    },
    {
      id: crypto.randomUUID(),
      art: "Eishockey Jugend",
      altersgruppe: "12–17 Jahre",
      minAlter: 12,
      maxAlter: 17,
      datum: datumInTagen(35),
      uhrzeit: "18:30",
      trainer: "C",
         typ: "training"
    },
    {
      id: crypto.randomUUID(),
      art: "Eiskunstlauf Damen",
      altersgruppe: "ab 18 Jahren",
      minAlter: 18,
      maxAlter: 99,
      datum: datumInTagen(38),
      uhrzeit: "18:00",
      trainer: "A",
       typ: "training"
    },
    {
      id: crypto.randomUUID(),
      art: "Eishockey U13",
      altersgruppe: "9-13 Jahre",
      minAlter: 9,
      maxAlter: 13,
      datum: datumInTagen(40),
      uhrzeit: "10:00",
      trainer: "C",
       typ: "training"
    },
    {
      id: crypto.randomUUID(),
      art: "Eislaufschule Kinder",
      altersgruppe: "4–11 Jahre",
      minAlter: 4,
      maxAlter: 11,
      datum: datumInTagen(40),
      uhrzeit: "12:00",
      trainer: "B",
       typ: "kurs",
    },
    {
      id: crypto.randomUUID(),
      art: "Eishockey Jugend",
      altersgruppe: "12–17 Jahre",
      minAlter: 12,
      maxAlter: 17,
      datum: datumInTagen(40),
      uhrzeit: "13:00",
      trainer: "C",
       typ: "training",
    },
    {
      id: crypto.randomUUID(),
      art: "Eiskunstlauf Fortgeschrittene",
      altersgruppe: "12-17 Jahre",
      minAlter: 12,
      maxAlter: 17,
      datum: datumInTagen(43),
      uhrzeit: "18:30",
      trainer: "A",
       typ: "kurs",
    },
    {
      id: crypto.randomUUID(),
      art: "Eishockey Herren",
      altersgruppe: "ab 18 Jahren",
      minAlter: 18,
      maxAlter: 99,
      datum: datumInTagen(43),
      uhrzeit: "20:00",
      trainer: "C",
       typ: "training"
    },
    {
      id: crypto.randomUUID(),
      art: "Eislaufschule Erwachsene",
      altersgruppe: "ab 18 Jahren",
      minAlter: 18,
      maxAlter: 99,
      datum: datumInTagen(45),
      uhrzeit: "16:30",
      trainer: "B",
       typ: "kurs",
    },
    {
      id: crypto.randomUUID(),
      art: "Eiskunstlauf Schnupperkurs",
      altersgruppe: "Alle Altersgruppen",
      minAlter: 4,
      maxAlter: 99,
      datum: datumInTagen(45),
      uhrzeit: "19:00",
      trainer: "A",
       typ: "kurs",
    },
    {
      id: crypto.randomUUID(),
      art: "Eislaufschule Schnupperkurs",
      altersgruppe: "Alle Altersgruppen",
      minAlter: 4,
      maxAlter: 99,
      datum: datumInTagen(49),
      uhrzeit: "10:00",
      trainer: "B",
       typ: "kurs",
    },
    {
      id: crypto.randomUUID(),
      art: "Eislaufschule Nachwuchs",
      altersgruppe: "4-11 Jahre",
      minAlter: 4,
      maxAlter: 11,
      datum: datumInTagen(49),
      uhrzeit: "12:00",
      trainer: "B",
       typ: "kurs",
    },
    {
      id: crypto.randomUUID(),
      art: "Eishockey Damen",
      altersgruppe: "ab 18 Jahren",
      minAlter: 18,
      maxAlter: 99,
      datum: datumInTagen(50),
      uhrzeit: "11:00",
      trainer: "C",
       typ: "kurs"
    },
    {
      id: crypto.randomUUID(),
      art: "Eishockey U17",
      altersgruppe: "15-17 Jahre",
      minAlter: 15,
      maxAlter: 17,
      datum: datumInTagen(50),
      uhrzeit: "15:00",
      trainer: "C",
       typ: "training"
    },
  ]
}


// Galerie mit fiktiven Bildern (AI-generiert) für Testzwecke
const galerieBilder = [
  {
    src: "/images/gallery/eishockey-herren.png",
    alt: "Eishockey Herrenmannschaft",
    titel: "Eishockey Herrenmannschaft",
  },
  {
    src: "/images/gallery/eiskunstlauf-beginner.png",
    alt: "Eiskunstlauf Anfänger:innen",
    titel: "Eiskunstlauf Anfänger:innen",
  },
  {
    src: "/images/gallery/eislaufschule-nachwuchs.png",
    alt: "Eislaufschule Nachwuchs",
    titel: "Eislaufschule Nachwuchs",
  },
  {
    src: "/images/gallery/eislaufschule-erwachsene.png",
    alt: "Eislaufschule Erwachsene",
    titel: "Eislaufschule Erwachsene",
  },
  {
    src: "/images/gallery/eishockey-u9.png",
    alt: "Eishockey U9-Mannschaft",
    titel: "Eishockey U9-Mannschaft",
  },
  {
    src: "/images/gallery/eiskunstlauf-kinder.png",
    alt: "Eiskunstlauf Kinder",
    titel: "Eiskunstlauf Kinder",
  },
   {
    src: "/images/gallery/eiskunstlauf-fortgeschrittene.png",
    alt: "Eiskunstlauf Fortgeschrittene",
    titel: "Eiskunstlauf Fortgeschrittene",
  },
]


function App() {
  const [trainings, setTrainings] = useState(() => erstelleDemoTrainings())

  // Aktuell ausgewählte Rubrik
  const [aktiveSeite, setAktiveSeite] = useState("home")
  const [offeneSportCard, setOffeneSportCard] = useState(null)

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
  const [rolle, setRolle] = useState("nutzer")

  // Account-Menü in der Navigation
  const [accountMenuOpen, setAccountMenuOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Kalenderansicht: Monat oder Woche
  const [kalenderAnsicht, setKalenderAnsicht] = useState("monat")

  // Aktuell angezeigtes Datum
  const [kalenderDatum, setKalenderDatum] = useState(new Date())

  // Filterfunktion
  const [filterOpen, setFilterOpen] = useState(false)
  const [sportFilter, setSportFilter] = useState("alle")
  const [altersFilter, setAltersFilter] = useState("alle")

  // Kurse buchen / stornieren
  const [gebuchteKurse, setGebuchteKurse] = useState([])
  const [ausgewaehlterKurs, setAusgewaehlterKurs] = useState(null)
  const [buchungsDaten, setBuchungsDaten] = useState({
    vorname: "",
    nachname: "",
    alter: "",
    email: "",
    telefon: "",
  })

  // Trainings anfragen / stornieren
  const [ausgewaehltesTraining, setAusgewaehltesTraining] = useState(null)
  const [anfrageDaten, setAnfrageDaten] = useState({
    vorname: "",
    nachname: "",
    alter: "",
    email: "",
    telefon: "",
  })

  const [anfrageErfolgreich, setAnfrageErfolgreich] = useState(false)
  
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

    window.scrollTo({
      top: 0,
      behavior: "auto",
    })
  }


  // Filter
  const passtZumAltersFilter = (training) => {
    if (altersFilter === "alle") {
      return true
    }

    if (altersFilter === "kinder") {
      return training.minAlter <= 11 && training.maxAlter >= 4
    }

    if (altersFilter === "jugend") {
      return training.minAlter <= 17 && training.maxAlter >= 12
    }

    if (altersFilter === "erwachsene") {
      return training.maxAlter >= 18
    }

    return true
  }


  const gefilterteTrainings = trainings.filter((training) => {
    const passtSport =
      sportFilter === "alle" ||
      training.art.toLowerCase().includes(sportFilter.toLowerCase())

    const passtAlter = passtZumAltersFilter(training)

    return passtSport && passtAlter
  })

  // Kurs: Buchen & Stornieren
  const kursBuchen = (trainingId) => {
    setGebuchteKurse([...gebuchteKurse, trainingId])
  }

  const kursStornieren = (trainingId) => {
    setGebuchteKurse(
      gebuchteKurse.filter((id) => id !== trainingId)
    )
  }

  const istGebucht = (trainingId) => {
    return gebuchteKurse.includes(trainingId)
  }

  const [buchungErfolgreich, setBuchungErfolgreich] = useState(false)

  const buchungAbsenden = (e) => {
    e.preventDefault()

    if (!ausgewaehlterKurs) {
      return
    }

    if (
      !buchungsDaten.vorname ||
      !buchungsDaten.nachname ||
      !buchungsDaten.alter ||
      !buchungsDaten.email
    ) {
      alert("Bitte fülle alle Pflichtfelder aus.")
      return
    }

    const alter = Number(buchungsDaten.alter)

    if (
      ausgewaehlterKurs.minAlter !== undefined &&
      ausgewaehlterKurs.maxAlter !== undefined &&
      (alter < ausgewaehlterKurs.minAlter ||
        alter > ausgewaehlterKurs.maxAlter)
    ) {
      alert(
        `Dieser Kurs ist für die Altersgruppe ${ausgewaehlterKurs.altersgruppe} vorgesehen.`
      )
      return
    }

    kursBuchen(ausgewaehlterKurs.id)
    setBuchungErfolgreich(true)
      alert(
        `Buchung erfolgreich!\n\nEine Buchungsbestätigung wird an ${buchungsDaten.email} per E-Mail versendet.`
)
  }

  const buchungAbbrechen = () => {
    setAusgewaehlterKurs(null)
    setBuchungErfolgreich(false)

    setBuchungsDaten({
      vorname: "",
      nachname: "",
      alter: "",
      email: "",
      telefon: "",
    })

    setAktiveSeite("trainings")
  }

  // Vereinstraining: Anfragen & Stornieren
  const anfrageAbsenden = (e) => {
    e.preventDefault()

    if (!ausgewaehltesTraining) {
      return
    }

    if (
      !anfrageDaten.vorname ||
      !anfrageDaten.nachname ||
      !anfrageDaten.alter ||
      !anfrageDaten.email
    ) {
      alert("Bitte fülle alle Pflichtfelder aus.")
      return
    }

    setAnfrageErfolgreich(true)
      alert(
        `Anfrage erfolgreich gesendet!\n\nDer Verein prüft deine Anfrage. Eine Rückmeldung wird an ${anfrageDaten.email} per E-Mail versendet.`
    )
  }

  const anfrageAbbrechen = () => {
    setAusgewaehltesTraining(null)
    setAnfrageErfolgreich(false)

    setAnfrageDaten({
      vorname: "",
      nachname: "",
      alter: "",
      email: "",
      telefon: "",
    })

    setAktiveSeite("trainings")
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

        {/* Filterfunktion */} 
          <div className="filter-section">
          
            <button
              type="button"
              className="filter-toggle"
              onClick={() => setFilterOpen(!filterOpen)}
              aria-expanded={filterOpen}
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="filter-icon"
              >
                <path
                  d="M4 6h16l-6 7v5l-4 2v-7L4 6z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span>Filtern</span>
            </button>

            {filterOpen && (
              <div className="training-filters">

                <div className="filter-group">
                  <label htmlFor="sportFilter">Sportart</label>

                  <select
                    id="sportFilter"
                    value={sportFilter}
                    onChange={(e) => setSportFilter(e.target.value)}
                  >
                    <option value="alle">Alle Sportarten</option>
                    <option value="eiskunstlauf">Eiskunstlauf</option>
                    <option value="eishockey">Eishockey</option>
                    <option value="eislaufschule">Eislaufschule</option>
                  </select>
                </div>

                <div className="filter-group">
                  <label htmlFor="altersFilter">Altersgruppe</label>

                  <select
                    id="altersFilter"
                    value={altersFilter}
                    onChange={(e) => setAltersFilter(e.target.value)}
                  >
                    <option value="alle">Alle Altersgruppen</option>
                    <option value="kinder">Kinder (ab 4 Jahren)</option>
                    <option value="jugend">Jugend (ab 12 Jahren)</option>
                    <option value="erwachsene">Erwachsene (ab 18 Jahren)</option>
                  </select>
                </div>

              </div>
            )}

          </div>

          <div className="courses-grid">
            {gefilterteTrainings.map((training) => (
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

                {rolle === "nutzer" && training.typ === "kurs" && (
                  <div className="training-actions">

                    {!istGebucht(training.id) ? (
                      <button
                        className="btn btn-primary course-action-button"
                        type="button"
                        onClick={() => {
                          setAusgewaehlterKurs(training)
                          setBuchungErfolgreich(false)
                          wechsleSeite("buchung")
                        }}
                      >
                        Buchen
                      </button>
                    ) : (
                      <button
                        className="small-button"
                        type="button"
                        onClick={() => kursStornieren(training.id)}
                      >
                        Stornieren
                      </button>
                    )}

                  </div>
                )}

                {rolle === "nutzer" && training.typ === "training" && (
                  <div className="training-actions">
                    <button
                      className="btn btn-ghost on-light course-action-button"
                      type="button"
                      onClick={() => {
                        setAusgewaehltesTraining(training)
                        setAnfrageErfolgreich(false)
                        wechsleSeite("anfrage")
                      }}
                    >
                      Teilnahme anfragen
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
                      className={`calendar-event typ-${training.typ} ${
                        rolle === "nutzer" ? "clickable" : ""
                      }`}
                      onClick={() => {
                        if (rolle !== "nutzer") return

                        if (training.typ === "kurs") {
                          setAusgewaehlterKurs(training)
                          setBuchungErfolgreich(false)
                          wechsleSeite("buchung")
                        } else {
                          setAusgewaehltesTraining(training)
                          setAnfrageErfolgreich(false)
                          wechsleSeite("anfrage")
                        }
                      }}
                    >
                      <strong>{training.uhrzeit}</strong>
                      <span>{training.art}</span>
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
                    className={`week-training typ-${training.typ} ${
                      rolle === "nutzer" ? "clickable" : ""
                    }`}
                    onClick={() => {
                      if (rolle !== "nutzer") return

                      if (training.typ === "kurs") {
                        setAusgewaehlterKurs(training)
                        setBuchungErfolgreich(false)
                        wechsleSeite("buchung")
                      } else {
                        setAusgewaehltesTraining(training)
                        setAnfrageErfolgreich(false)
                        wechsleSeite("anfrage")
                      }
                    }}
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
            <h1>Kurs buchen</h1>

            {ausgewaehlterKurs && (
              <p>
                Fülle die folgenden Angaben aus, um deine Buchung abzuschließen.
              </p>
            )}
          </div>

          {ausgewaehlterKurs ? (
            <>
              {/* Ausgewählter Kurs */}
              <div className="booking-course-summary">
                <span className="tag">
                  {ausgewaehlterKurs.altersgruppe}
                </span>

                <h2>{ausgewaehlterKurs.art}</h2>

                <p>
                  Datum:{" "}
                  {new Date(
                    ausgewaehlterKurs.datum
                  ).toLocaleDateString("de-DE")}
                </p>

                <p>
                  Uhrzeit: {ausgewaehlterKurs.uhrzeit}
                </p>

                <p>
                  Trainer:in: {ausgewaehlterKurs.trainer}
                </p>
              </div>

              {/* Buchungsformular */}
              <form
                className="booking-form"
                onSubmit={buchungAbsenden}
              >
                <div className="booking-form-grid">

                  <div className="form-field">
                    <label htmlFor="vorname">Vorname</label>
                    <input
                      id="vorname"
                      type="text"
                      placeholder="Vorname"
                      value={buchungsDaten.vorname}
                      required
                      onChange={(e) =>
                        setBuchungsDaten({
                          ...buchungsDaten,
                          vorname: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="nachname">Nachname</label>
                    <input
                      id="nachname"
                      type="text"
                      placeholder="Nachname"
                      value={buchungsDaten.nachname}
                      required
                      onChange={(e) =>
                        setBuchungsDaten({
                          ...buchungsDaten,
                          nachname: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="alter">Alter</label>
                    <input
                      id="alter"
                      type="number"
                      min="4"
                      placeholder="Alter"
                      value={buchungsDaten.alter}
                      required
                      onChange={(e) =>
                        setBuchungsDaten({
                          ...buchungsDaten,
                          alter: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="telefon">Telefonnummer</label>
                    <input
                      id="telefon"
                      type="tel"
                      placeholder="Optional"
                      value={buchungsDaten.telefon}
                      onChange={(e) =>
                        setBuchungsDaten({
                          ...buchungsDaten,
                          telefon: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-field full-width">
                    <label htmlFor="email">E-Mail-Adresse</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="name@beispiel.de"
                      value={buchungsDaten.email}
                      required
                      onChange={(e) =>
                        setBuchungsDaten({
                          ...buchungsDaten,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>

                </div>

                <div className="booking-form-actions">
                  <button
                    type="button"
                    className="btn btn-ghost on-light"
                    onClick={buchungAbbrechen}
                  >
                    Abbrechen
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Buchung abschließen
                  </button>
                </div>
              </form>

              {buchungErfolgreich && (
                <div className="booking-success">
                  <strong>Buchung erfolgreich!</strong>

                  <p>
                    Deine Buchung für {ausgewaehlterKurs.art} wurde gespeichert.
                  </p>
                </div>
              )}
            </>
          ) : (
            <>
              {/* Noch kein Kurs ausgewählt */}
              <div className="hero-ctas booking-navigation">
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

              <p className="booking-empty-message">
                Bitte wähle zuerst einen Kurs unter „Kurse & Trainings“ aus.
              </p>
            </>
          )}

        </section>
      )}

      {/* ============ TRAINING ANFRAGEN ============ */}
      {aktiveSeite === "anfrage" && (
        <section className="block" id="request">

          <div className="section-head">
            <span className="eyebrow">Teilnahmeanfrage</span>
            <h1>Training anfragen</h1>

            {ausgewaehltesTraining && (
              <p>
                Fülle die folgenden Angaben aus, um eine Teilnahme am Training
                anzufragen.
              </p>
            )}
          </div>

          {ausgewaehltesTraining && (
            <>
              <div className="booking-course-summary">
                <span className="tag">
                  {ausgewaehltesTraining.altersgruppe}
                </span>

                <h2>{ausgewaehltesTraining.art}</h2>

                <p>
                  Datum:{" "}
                  {new Date(
                    ausgewaehltesTraining.datum
                  ).toLocaleDateString("de-DE")}
                </p>

                <p>Uhrzeit: {ausgewaehltesTraining.uhrzeit}</p>

                <p>Trainer:in: {ausgewaehltesTraining.trainer}</p>
              </div>

              <form
                className="booking-form"
                onSubmit={anfrageAbsenden}
              >
                <div className="booking-form-grid">

                  <div className="form-field">
                    <label htmlFor="anfrage-vorname">Vorname</label>
                    <input
                      id="anfrage-vorname"
                      type="text"
                      placeholder="Vorname"
                      value={anfrageDaten.vorname}
                      required
                      onChange={(e) =>
                        setAnfrageDaten({
                          ...anfrageDaten,
                          vorname: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="anfrage-nachname">Nachname</label>
                    <input
                      id="anfrage-nachname"
                      type="text"
                      placeholder="Nachname"
                      value={anfrageDaten.nachname}
                      required
                      onChange={(e) =>
                        setAnfrageDaten({
                          ...anfrageDaten,
                          nachname: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="anfrage-alter">Alter</label>
                    <input
                      id="anfrage-alter"
                      type="number"
                      placeholder="Alter"
                      min="4"
                      value={anfrageDaten.alter}
                      required
                      onChange={(e) =>
                        setAnfrageDaten({
                          ...anfrageDaten,
                          alter: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="anfrage-telefon">Telefonnummer</label>
                    <input
                      id="anfrage-telefon"
                      type="tel"
                      placeholder="Optional"
                      value={anfrageDaten.telefon}
                      onChange={(e) =>
                        setAnfrageDaten({
                          ...anfrageDaten,
                          telefon: e.target.value,
                        })
                      }
                    />
                  </div>

                  <div className="form-field full-width">
                    <label htmlFor="anfrage-email">E-Mail-Adresse</label>
                    <input
                      id="anfrage-email"
                      type="email"
                      placeholder="name@beispiel.de"
                      value={anfrageDaten.email}
                      required
                      onChange={(e) =>
                        setAnfrageDaten({
                          ...anfrageDaten,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>

                </div>

                <div className="booking-form-actions">
                  <button
                    type="button"
                    className="btn btn-ghost on-light form-action-button"
                    onClick={anfrageAbbrechen}
                  >
                    Abbrechen
                  </button>

                  <button
                    type="submit"
                    className="btn btn-primary form-action-button"
                  >
                    Anfrage senden
                  </button>
                </div>
              </form>

              {anfrageErfolgreich && (
                <div className="booking-success">
                  <strong>Anfrage erfolgreich gesendet!</strong>
                  <p>
                    Deine Anfrage zur Teilnahme an{" "}
                    {ausgewaehltesTraining.art} wurde erfasst.
                  </p>
                </div>
              )}
            </>
          )}

        </section>
      )}


      {aktiveSeite === "ueber-uns" && (
      <div className="about-page">

        {/* ============ GALLERIE ============ */}
        <section className="about-gallery">
            <div className="about-carousel">
              <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                loop={true}
                grabCursor={true}
                speed={850}
                spaceBetween={20}
                navigation={true}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1.15,
                    spaceBetween: 14,
                  },
                  600: {
                    slidesPerView: 2.1,
                    spaceBetween: 16,
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 22,
                  },
                }}
              >
                {galerieBilder.map((bild, index) => (
                  <SwiperSlide key={index}>
                    <div className="gallery-card">

                      <img
                        src={bild.src}
                        alt={bild.alt}
                      />

                      <div className="gallery-overlay">
                        <span>{bild.titel}</span>

                        <div className="gallery-icon">
                          ↗
                        </div>
                      </div>

                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          <div className="about-gallery-heading">
            <span>Galerie</span>
          </div>
        </section>


        {/* ============ INFORMATION ============ */}
        <section className="about-intro">
          <div className="about-content">

            <span className="eyebrow">Über uns</span>

            <h2>Eissport im H. e. V.</h2>

            <p className="about-intro-text">
              Von ersten Schritten auf dem Eis bis hin zu regelmäßigem
              Vereins- und Mannschaftstraining stehen unterschiedliche
              Angebote in den Bereichen Eiskunstlauf, Eishockey und
              Eislaufschule zur Verfügung.
              Du bist interessiert am Eissport? Dann komm einfach zum
              Training vorbei! Ein Besuch lohnt sich!
            </p>

            {/* Sportarten */}
            <div className="sport-overview">
              <button
                type="button"
                className={`sport-info-card ${
                  offeneSportCard === "eislaufschule" ? "open" : ""
                }`}
                style={{
                  backgroundImage:
                    "url('/images/gallery/eislaufschule-thumbnail.png')",
                }}
                onClick={() =>
                  setOffeneSportCard(
                    offeneSportCard === "eislaufschule"
                      ? null
                      : "eislaufschule"
                  )
                }
              >
                <div className="sport-info-content">
                  <span className="sport-info-label">Erste Schritte</span>
                  <h3>Eislaufschule</h3>

                  <div className="sport-info-details">
                    <p>
                      Von deinen allerersten Schritten auf dem Eis über grundlegende Lauftechniken bis hin zu 
                      fortgeschrittenen Bewegungsabläufen – hier entwickelst du
                      Sicherheit, Technik und Freude am Eislaufen.
                    </p>

                    <span>Für verschiedene Altersgruppen</span>
                    <span>Probetrainings & Schnupperkurse</span>
                    <span>Schlittschuhverleih vor Ort</span>
                  </div>
                </div>
              </button>


              <button
                type="button"
                className={`sport-info-card ${
                  offeneSportCard === "eiskunstlauf" ? "open" : ""
                }`}
                style={{
                  backgroundImage:
                    "url('/images/gallery/eiskunstlauf-thumbnail.png')",
                }}
                onClick={() =>
                  setOffeneSportCard(
                    offeneSportCard === "eiskunstlauf"
                      ? null
                      : "eiskunstlauf"
                  )
                }
              >
                <div className="sport-info-content">
                  <span className="sport-info-label">Mit Eleganz aufs Eis</span>
                  <h3>Eiskunstlauf</h3>

                  <div className="sport-info-details">
                    <p>
                      Über sauberes Kantenlaufen und eleganten Figuren bis hin zu 
                      Pirouetten, Sprüngen und ganzen Programmelementen – hier verbindest du Technik, 
                      Bewegung und Ausdruck auf dem Eis.
                    </p>

                    <span>Für verschiedene Altersgruppen</span>
                    <span>Anfänger:innen bis Fortgeschrittene</span>
                    <span>Einzel- oder Gruppentraining</span>
                  </div>
                </div>
              </button>


              <button
                type="button"
                className={`sport-info-card ${
                  offeneSportCard === "eishockey" ? "open" : ""
                }`}
                style={{
                  backgroundImage:
                    "url('/images/gallery/eishockey-thumbnail.png')",
                }}
                onClick={() =>
                  setOffeneSportCard(
                    offeneSportCard === "eishockey"
                      ? null
                      : "eishockey"
                  )
                }
              >
                <div className="sport-info-content">
                  <span className="sport-info-label">Noch mehr Action</span>
                  <h3>Eishockey</h3>

                  <div className="sport-info-details">
                    <p>
                      Von sicherem Gleiten über Puckführung und Passspiel bis hin zu 
                      Schuss- und Spielsituationen entwickelst 
                      du deine Fähigkeiten auf dem Eis.
                    </p>

                    <span>Für verschiedene Altersgruppen</span>
                    <span>Regelmäßiges Vereinstraining</span>
                    <span>Leihausrüstung für Schnupperkurse verfügbar</span>
                  </div>
                </div>
              </button>

            </div>
            



            <button
              className="btn btn-primary"
              type="button"
              onClick={() => wechsleSeite("trainings")}
            >
              Kurse & Trainings ansehen
            </button>

          </div>
        </section>

      </div>
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