  // src/App.jsx
import "./App.css";
import { useState } from "react";

function App() {
  const bibleVersions = [
    "The Yes Word",
    "Knox Translation",
  ];

  const TamilVersions = [
    "BSI",
    "RC Tamil",
    "WBTC",
    "Tamil Bible-1934",
    "Tamil Bible-1860",
    "Tamil Bible-1822",
    "NWT-2013",
    "IRV-2017",
  ];

  const newTestament = [
  { name: "Matthew", file: "Matthew.pdf" },
  { name: "Mark", file: "Mark.pdf" },
  { name: "Luke", file: "Luke.pdf" },
  { name: "John", file: "John.pdf" },
  { name: "Acts", file: "Acts.pdf" },
  { name: "Romans", file: "Romans.pdf" },
  { name: "1 & 2 Corinthians", file: "1 & 2 Corinthians.pdf" },
  { name: "Galatians", file: "Galatians.pdf" },
  { name: "Ephesians", file: "Ephesians.pdf" },
  { name: "Hebrews", file: "Hebrews.pdf" },
  { name: "James", file: "James.pdf" },
  { name: "1 - 3 John-Jude", file: "1 - 3 John-Jude.pdf" },
  { name: "1 & 2 Timothy & Titus", file: "1 & 2 Timothy & Titus.pdf" },
  { name: "Philemon & 1 -2 Thessalonians", file: "Philemon & 1 -2 Thessalonians.pdf" },
  { name: "Philippians & Colossians", file: "Philippians & Colossians.pdf" },
  { name: "1 & 2 Peter", file: "1 & 2 Peter.pdf" },
  { name: "Revelation", file: "Revelation.pdf" },
];

const oldTestament = [
  { name: "Genesis", file: "Genesis.pdf" },
  { name: "Exodus", file: "Exodus.pdf" }, // if you add it later
  { name: "Leviticus", file: "Leviticus.pdf" },
  { name: "Numbers", file: "Numbers.pdf" },
  { name: "Deuteronomy", file: "Deuteronomy.pdf" },
  { name: "Joshua", file: "Joshua.pdf" },
  { name: "Judges", file: "Judges.pdf" },
  { name: "Ruth & Lamentation", file: "Ruth & Lamentation.pdf" },
  { name: "1 Samuel", file: "1 Samuel.pdf" },
  { name: "2 Samuel", file: "2 Samuel.pdf" },
  { name: "1 Kings", file: "1 Kings.pdf" },
  { name: "2 Kings", file: "2 Kings.pdf" },
  { name: "1 & 2 Chronicles", file: "1 & 2 Chronicles.pdf" },
  { name: "Ezra", file: "Ezra.pdf" },
  { name: "Nehemiah", file: "Nehemiah.pdf" },
  { name: "Tobit", file: "Tobit.pdf" },
  { name: "Judith", file: "Judith.pdf" },
  { name: "Esther", file: "Esther.pdf" },
  { name: "1 & 2 Maccabees", file: "1 & 2 Maccabees.pdf" },
  { name: "Job", file: "Job.pdf" },
  { name: "Psalms", file: "Psalms.pdf" },
  { name: "Proverbs", file: "Proverbs.pdf" },
  { name: "Ecclesiastes", file: "Ecclesiastes.pdf" },
  { name: "Song of Songs", file: "Song of Songs.pdf" },
  { name: "Wisdom", file: "Wisdom.pdf" },
  { name: "Sirach", file: "Sirach.pdf" },
  { name: "Isaiah", file: "Isaiah.pdf" },
  { name: "Jeremiah", file: "Jeremiah.pdf" },
  { name: "Baruch", file: "Baruch.pdf" },
  { name: "Ezekiel", file: "Ezekiel.pdf" },
  { name: "Daniel", file: "Daniel.pdf" },
  { name: "Hosea-Malachi", file: "Hosea & Malachi.pdf" },
];

const aybBooks = [
  { name: "Genesis", file: "Genesis.pdf" },
  { name: "Exodus 1-18", file: "Exodus 1-18.pdf" },
  { name: "Numbers 1-20",
    url: "https://1drv.ms/b/c/7eb51b35f3576b65/IQDZrEskFpnFSpdr_Y78t5BkAR4kYJcjarnsKbGxxmPWH_Y?e=OCNrTm" },
  { name: "Ecclesiastes",
    url: "https://1drv.ms/b/c/7eb51b35f3576b65/IQDf2WcbiQXaTotdMsLTvzWHAYtJOXcwMFk6jatGVEiVVZc?e=XYitjG" },
  { name: "Numbers 21-36", file: "Numbers 21-36.pdf" },
  { name: "Joshua 1-12", file: "Joshua 1-12.pdf" },
  { name: "Ruth", file: "Ruth.pdf" },
  { name: "I Chronicles", file: "I Chronicles.pdf" },
  { name: "II Chronicles", file: "II Chronicles.pdf" },
  { name: "Ezra-Nehemiah", file: "Ezra-Nehemiah.pdf" },
  { name: "Proverbs 10-31", file: "Proverbs 10-31.pdf" },
  { name: "Isaiah 40-55", file: "Isaiah 40-55.pdf" },
  { name: "Jeremiah", file: "Jeremiah.pdf" },
  { name: "Jeremiah 21-36", file: "Jeremiah 21-36.pdf" },
  { name: "Daniel", file: "Daniel .pdf" },
  { name: "Hosea", file: "Hosea.pdf" },
  { name: "Amos", file: "Amos.pdf" },
  { name: "Haggai, Zechariah 1-8", file: "Haggai, Zechariah 1-8.pdf" },
  { name: "I Maccabees", file: "I Maccabees.pdf" },
  { name: "II Maccabees", file: "II Maccabees.pdf" },
  { name: "Mark", file: "Mark.pdf" },
  { name: "First Corinthians", file: "First Corinthians.pdf" },
  { name: "Ephesians", file: "Ephesians.pdf" },
  { name: "To the Hebrews", file: "To the Hebrews.pdf" },
  { name: "Revelation", file: "Revelation.pdf" },
];

  const jewishSchoolBible = [
  { name: "VOL 1", file: "VOL 1.pdf" },
  { name: "VOL 2", file: "VOL 2.pdf" },
  { name: "VOL 3", file: "VOL 3.pdf" },
  { name: "VOL 4", file: "VOL 4.pdf" },
];

 const modernSpeechBooks = [
  { name: "Isaiah", file: "Isaiah.pdf" },
  { name: "Jeremiah", file: "Jeremiah.pdf" },
  { name: "Psalms", file: "Psalms.pdf" },
  { name: "Job Proverbs Lament Ecclesiast", file: "Job Proverbs Lament Ecclesiast.pdf" },
];

const bibleInVerseBooks = [
  { name: "Genesis", file: "Genesis.pdf" },
  { name: "Exodus", file: "Exodus.pdf" },
  { name: "Leviticus", file: "Leviticus.pdf" },
  { name: "Numbers", file: "Numbers.pdf" },
  { name: "Deuteronomy", file: "Deuteronomy.pdf" },
  { name: "Joshua", file: "Joshua.pdf" },
  { name: "Judges", file: "Judges.pdf" },
  { name: "Ruth", file: "Ruth.pdf" },
  { name: "1 Samuel", file: "1 Samuel.pdf" },
  { name: "2 Samuel", file: "2 Samuel.pdf" },
  { name: "1 Kings", file: "1 Kings.pdf" },
  { name: "2 Kings", file: "2 Kings.pdf" },
  { name: "1 Chronicles", file: "1 Chronicles.pdf" },
  { name: "2 Chronicles", file: "2 Chronicles.pdf" },
  { name: "Ezra", file: "Ezra.pdf" },
  { name: "Nehemiah", file: "Nehemiah.pdf" },
  { name: "Esther", file: "Esther.pdf" },
  { name: "Job", file: "Job.pdf" },
  { name: "Psalms", file: "Psalms.pdf" },
  { name: "Proverbs", file: "Proverbs.pdf" },
  { name: "Ecclesiastes", file: "Ecclesiastes.pdf" },
  { name: "Song of Solomon", file: "Song Of Solomon.pdf" },
  { name: "Isaiah", file: "Isaiah.pdf" },
  { name: "Jeremiah", file: "Jeremiah.pdf" },
  { name: "Lamentations", file: "Lamentations.pdf" },
  { name: "Ezekiel", file: "Ezekiel.pdf" },
  { name: "Daniel", file: "Daniel.pdf" },
  { name: "Hosea", file: "Hosea.pdf" },
  { name: "Joel", file: "Joel.pdf" },
  { name: "Amos", file: "Amos.pdf" },
  { name: "Obadiah", file: "Obadiah.pdf" },
  { name: "Jonah", file: "Jonah.pdf" },
  { name: "Micah", file: "Micah.pdf" },
  { name: "Nahum", file: "Nahum.pdf" },
  { name: "Habakkuk", file: "Habakkuk.pdf" },
  { name: "Zephaniah", file: "Zephaniah.pdf" },
  { name: "Haggai", file: "Haggai.pdf" },
  { name: "Zechariah", file: "Zechariah.pdf" },
  { name: "Malachi", file: "Malachi.pdf" },

  { name: "Matthew", file: "Matthew.pdf" },
  { name: "Mark", file: "Mark.pdf" },
  { name: "Luke", file: "Luke.pdf" },
  { name: "John", file: "John.pdf" },
  { name: "Acts", file: "Acts.pdf" },
  { name: "Romans", file: "Romans.pdf" },
  { name: "1 Corinthians", file: "1 Corinthians.pdf" },
  { name: "2 Corinthians", file: "2 Corinthians.pdf" },
  { name: "Galatians", file: "Galatians.pdf" },
  { name: "Ephesians", file: "Ephesians.pdf" },
  { name: "Philippians", file: "Philippians.pdf" },
  { name: "Colossians", file: "Colossians.pdf" },
  { name: "1 Thessalonians", file: "1 Thessalonians.pdf" },
  { name: "2 Thessalonians", file: "2 Thessalonians.pdf" },
  { name: "1 Timothy", file: "1 Timothy.pdf" },
  { name: "2 Timothy", file: "2 Timothy.pdf" },
  { name: "Titus", file: "Titus.pdf" },
  { name: "Philemon", file: "Philemon.pdf" },
  { name: "Hebrews", file: "Hebrews.pdf" },
  { name: "James", file: "James.pdf" },
  { name: "1 Peter", file: "1 Peter.pdf" },
  { name: "2 Peter", file: "2 Peter.pdf" },
  { name: "1 John", file: "1 John.pdf" },
  { name: "2 John", file: "2 John.pdf" },
  { name: "3 John", file: "3 John.pdf" },
  { name: "Jude", file: "Jude.pdf" },
  { name: "Revelation", file: "Revelation.pdf" },
];

 const charlesThompsonBooks = [
  { name: "VOL I", file: "VOL-I.pdf" },
  { name: "VOL II", file: "VOL-II.pdf" },
  { name: "VOL III", file: "VOL-III.pdf" },
  { name: "VOL IV", file: "VOL-IV.pdf" },
];

const boothroydFamilyBible = [
  { name: "Vol 1", url: "https://1drv.ms/b/c/7eb51b35f3576b65/IQAKKbkJyavSTLTK0XKKCdF2AUX26PEdPNbTZ50u_dC6ZsI?e=JEJSqp" },
  { name: "Vol 2", url: "https://1drv.ms/b/c/7eb51b35f3576b65/IQBPz-tsScOgR7lLFRshI1etAfEpV69IvippOZNZofgEt-0?e=rMEc06" },
  { name: "Vol 3", url: `${import.meta.env.BASE_URL}pdfs/Boothroyd Family Bible/Vol 3.pdf`},
];

const wellbelovedBooks = [
  { name: "Vol 1", file: "Vol 1.pdf" },
  { name: "Vol 2", file: "Vol 2.pdf" },
  { name: "Vol 3", file: "Vol 3.pdf" },
];

const moffattBibleBooks = [
  { name: "Genesis–Esther", file: "Genesis-Esther.pdf" },
  { name: "Job–Malachi", file: "Job-Malachi.pdf" },
  { name: "New Testament", file: "NT.pdf" },
];

const numericalBibleFWGrantBooks = [
  { name: "Pentateuch", file: "Pentateuch.pdf" },
  { name: "Joshua–2 Samuel", file: "Joshua-2Samuel.pdf" },
  { name: "Psalms", file: "Psalms.pdf" },
  { name: "Ezekiel", file: "Ezekiel.pdf" },
  { name: "Gospels", file: "Gospels.pdf" },
  { name: "Acts–2 Corinthians", file: "Acts-2Corinthians.pdf" },
  { name: "Hebrews–Revelation", file: "Hebrews-Revelation.pdf" },
];

const ooyltBooks = [
  { name: "Genesis", file: "Genesis.html" },
  { name: "Exodus", file: "Exodus.html" },
  { name: "Leviticus", file: "Leviticus.html" },
  { name: "Numbers", file: "Numbers.html" },
  { name: "Deuteronomy", file: "Deuteronomy.html" },
  { name: "Joshua & Judges", file: "JoshuaJudges.html" },
  { name: "Ruth", file: "Ruth.html" },
  { name: "Kingdom", file: "Kingdom.html" },
  { name: "Chronicles", file: "Chronicles.html" },
  { name: "Ezra & Nehemiah", file: "EzraNehemiah.html" },
  { name: "Esther", file: "Esther.html" },
  { name: "Job", file: "Job.html" },
  { name: "Psalms", file: "Psalms.html" },
  { name: "Proverbs", file: "Proverbs.html" },
  { name: "Ecclesiastes", file: "Ecclesiastes.html" },
  { name: "Song of Solomon", file: "Song.html" },
  { name: "Isaiah", file: "Isaiah.html" },
  { name: "Jeremiah", file: "Jeremiah.html" },
  { name: "Lamentations", file: "Lamentations.html" },
  { name: "Ezekiel", file: "Ezekiel.html" },
  { name: "Daniel", file: "Daniel.html" },
  { name: "Minor Prophets", file: "MinorProphets.html" },

  { name: "Matthew", file: "Matthew.html" },
  { name: "Mark", file: "Mark.html" },
  { name: "Luke", file: "Luke.html" },
  { name: "John", file: "John.html" },
  { name: "Acts", file: "Acts.html" },
  { name: "Romans", file: "Romans.html" },
  { name: "1 Corinthians", file: "1Corinthians.html" },
  { name: "2 Corinthians", file: "2Corinthians.html" },
  { name: "Galatians", file: "Galatians.html" },
  { name: "Ephesians", file: "Ephesians.html" },
  { name: "Philippians", file: "Philippians.html" },
  { name: "Colossians", file: "Colossians.html" },
  { name: "1 Thessalonians", file: "1Thessalonians.html" },
  { name: "2 Thessalonians", file: "2Thessalonians.html" },
  { name: "1 Timothy", file: "1Timothy.html" },
  { name: "2 Timothy", file: "2Timothy.html" },
  { name: "Titus", file: "Titus.html" },
  { name: "Philemon", file: "Philemon.html" },
  { name: "Hebrews", file: "Hebrews.html" },
  { name: "James", file: "James.html" },
  { name: "1 Peter", file: "1Peter.html" },
  { name: "2 Peter", file: "2Peter.html" },
  { name: "1 John", file: "1John.html" },
  { name: "2 John", file: "2John.html" },
  { name: "3 John", file: "3John.html" },
  { name: "Jude", file: "Jude.html" },
  { name: "Revelation", file: "Revelation.html" },
];

const belovedAndIBooks = [
  { name: "Books of Moses", file: "Books of Moses.pdf" },
  { name: "Enoch Jubilees Joshua Judges", file: "Enoch Jubilees Joshua Judges.pdf" },
  { name: "Ruth to Chronicles", file: "Ruth to Chronicles.pdf" },
  { name: "Ezra to Job", file: "Ezra to Job.pdf" },
  { name: "Psalms to Sirach", file: "Psalms to Sirach.pdf" },
  { name: "Isaiah to Malachi", file: "Isaiah to Malachi.pdf" },
  { name: "Gospels", file: "Gospels.pdf" },
  { name: "Acts to Revelation", file: "Acts to Revelation.pdf" },
  { name: "Holy Quran", file: "Holy Quran.pdf" },
  { name: "Gospel of Barnabas", file: "Gospel of Barnabas.pdf" },
];

const haydockBible1848Books = [
  { name: "Genesis", file: "GENESIS.pdf" },
  { name: "Exodus", file: "EXODUS.pdf" },
  { name: "Leviticus", file: "LEVITICUS.pdf" },
  { name: "Numbers", file: "NUMBERS.pdf" },
  { name: "Deuteronomy", file: "DEUTERONOMY.pdf" },
  { name: "Joshua", file: "JOSHUA.pdf" },
  { name: "Judges", file: "JUDGES.pdf" },
  { name: "Ruth", file: "RUTH.pdf" },
  { name: "1 Samuel", file: "1 SAMUEL.pdf" },
  { name: "2 Samuel", file: "2 SAMUEL.pdf" },
  { name: "2 Kings", file: "2 KINGS.pdf" },
  { name: "2 Chronicles", file: "2 CHRONICLES.pdf" },
  { name: "Ezra", file: "EZRA.pdf" },
  { name: "Nehemiah", file: "NEHEMIAH.pdf" },
  { name: "Esther", file: "ESTHER.pdf" },
  { name: "Job", file: "JOB.pdf" },
  { name: "Psalms 1-54", file: "PSALMS 1 54.pdf" },
  { name: "Psalms 102-150", file: "PSALMS 102 150.pdf" },
  { name: "Proverbs", file: "PROVERBS.pdf" },
  { name: "Ecclesiastes", file: "ECCLESIASTES.pdf" },
  { name: "Song of Songs", file: "SONG OF SONGS.pdf" },
  { name: "Wisdom", file: "WISDOM.pdf" },
  { name: "Ecclesiasticus", file: "ECCLESIASTICUS.pdf" },
  { name: "Isaiah", file: "ISAIAH.pdf" },
  { name: "Jeremiah", file: "JEREMIAH.pdf" },
  { name: "Lamentations", file: "LAMENTATIONS.pdf" },
  { name: "Baruch", file: "BARUCH.pdf" },
  { name: "Ezeckiel", file: "EZECKIEL.pdf" },
  { name: "Daniel", file: "DANIEL.pdf" },
  { name: "Hosea", file: "HOSEA.pdf" },
  { name: "Joel", file: "JOEL.pdf" },
  { name: "Amos", file: "AMOS.pdf" },
  { name: "Obadiah", file: "OBADIAH.pdf" },
  { name: "Jonah", file: "JONAH.pdf" },
  { name: "Micah", file: "MICAH.pdf" },
  { name: "Nahum", file: "NAHUM.pdf" },
  { name: "Habakkuk", file: "HABAKKUK.pdf" },
  { name: "Zephaniah", file: "ZEPHANIAH.pdf" },
  { name: "Haggai", file: "HAGGAI.pdf" },
  { name: "Zachariah", file: "ZACHARIAH.pdf" },
  { name: "Malachai", file: "MALACHAI.pdf" },

  { name: "St Matthew", file: "ST MATTHEW.pdf" },
  { name: "St Mark", file: "ST MARK.pdf" },
  { name: "St Luke", file: "ST LUKE.pdf" },
  { name: "St John", file: "ST JOHN.pdf" },
  { name: "Acts", file: "ACTS.pdf" },
  { name: "Romans", file: "ROMANS.pdf" },
  { name: "1 Timothy", file: "1 TIMOTHY.pdf" },
  { name: "2 Timothy", file: "2 TIMOTHY.pdf" },
  { name: "Titus", file: "TITUS.pdf" },
  { name: "Philemon", file: "PHILEMON.pdf" },
  { name: "Hebrews", file: "HEBREWS.pdf" },
  { name: "James", file: "JAMES.pdf" },
  { name: "1 Peter", file: "1 PETER.pdf" },
  { name: "2 Peter", file: "2 PETER.pdf" },
  { name: "1 John", file: "1 JOHN.pdf" },
  { name: "2 John", file: "2 JOHN.pdf" },
  { name: "3 John", file: "3 JOHN.pdf" },
  { name: "Jude", file: "JUDE.pdf" },
  { name: "Apocalypse", file: "APOCALYPSE.pdf" },

  { name: "1 Machabees", file: "1 MACHABEES.pdf" },
  { name: "2 Machabees", file: "2 MACHABEES.pdf" },

  { name: "Galatians", file: "GALATIANS.pdf" },
  { name: "Ephesians", file: "EPHESIANS.pdf" },
  { name: "Philippians", file: "PHILIPPIANS.pdf" },
  { name: "Colossians", file: "COLOSSIANS.pdf" },
  { name: "2 Thessalonians", file: "2 THESSALONIANS.pdf" }
];

const pictorialBible1861Books = [
  {
    name: "Genesis–Joshua",
    url: "https://1drv.ms/b/c/7eb51b35f3576b65/IQAbewNhY--TR71cxoNBpLjHAcUK7eLuQ5Pg_ABm2Wmbee4?e=krQT65"
  },
  {
    name: "Judges–Job",
    url: "https://1drv.ms/b/c/7eb51b35f3576b65/IQCHamH-AyTiQoYHbyN0LpfoAZaL4T6L_gHTkPNzexZO45E?e=iSEAgc"
  },
  {
    name: "New Testament",
    url: "https://1drv.ms/b/c/7eb51b35f3576b65/IQAyCXwKwh0AQLsYhnm6ZquvAd3jQjkhCcjzYjMYNvX11Tg?e=GZhSHe"
  },
  {
    name: "Psalms–Malachi",
    url: "https://1drv.ms/b/c/7eb51b35f3576b65/IQCffAVC_K7TQZbcyM4vEFahAfYp3cf470PcbqcySfkROjY?e=pcLSe7"
  }
];

const internationalEnglishVersionBooks = [
  { name: "Genesis", file: "Genesis.pdf" },
  { name: "Acts", file: "Acts.pdf" },
  { name: "John", file: "John.pdf" },
  { name: "Proverbs", file: "Proverbs.pdf" },
  { name: "Psalms", file: "Psalms.pdf" },
  { name: "Revelation", file: "Revelation.pdf" },
];

 const getWordClass = (word) => {
  const specialWords = {
    "Bible Versions": "anim-open-wheel font-BibleVersions",
  };

  return specialWords[word] || "";
};

  const [selectedVersion, setSelectedVersion] = useState("");
  const [showCCB, setShowCCB] = useState(false);
  const [showNT, setShowNT] = useState(false);
  const [showOT, setShowOT] = useState(false);
  const [showAYB, setShowAYB] = useState(false);
  const [showJSB, setShowJSB] = useState(false);
  const [showModernSpeech, setShowModernSpeech] = useState(false);
  const [showBibleInVerse, setShowBibleInVerse] = useState(false);
  const [showCharlesThompson, setShowCharlesThompson] = useState(false);
  const [showBoothroyd, setShowBoothroyd] = useState(false);
  const [showWellbeloved, setShowWellbeloved] = useState(false);
  const [showMoffattBible, setShowMoffattBible] = useState(false);
  const [showNumericalBibleFWGrant, setShowNumericalBibleFWGrant] = useState(false);
  const [showOriginalOrderedYLT, setShowOriginalOrderedYLT] = useState(false);
  const [showBelovedAndI, setShowBelovedAndI] = useState(false);
  const [showHaydockBible1848, setShowHaydockBible1848] = useState(false);
  const [showPictorialBible1861, setShowPictorialBible1861] = useState(false);
  const [showInternationalEnglishVersion, setShowInternationalEnglishVersion] = useState(false);


  return (
    <div className="app">
     <h1 className="title">Bible Versions</h1>
<h1 className={getWordClass("Bible Versions")}>
  </h1>

<h2 className="pdf-title">
  📚 <span className="pdf-title-text">PDF Bibles</span>
</h2>

<div className="button-container">
  <button
    className="bible-btn pdf-btn>ACV</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/ACV.pdf`, "_blank")}
  >
    ACV
  </button>

  <button
    className="bible-btn pdf-btn>AKJV</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/AKJV.pdf`, "_blank")}
  >
    AKJV
  </button>

  <button
    className="bible-btn pdf-btn>ASV</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/ASV.pdf`, "_blank")}
  >
    ASV
  </button>

   <button
    className="bible-btn pdf-btn>AMPC</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/AMPC.pdf`, "_blank")}
  >
    AMPC
  </button>

  <button
    className="bible-btn pdf-btn>AAT_1927</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/AAT-1927.pdf`, "_blank")}
  >
    AAT-1927
  </button>

 <button
    className="bible-btn pdf-btn>Andrews Bible 1977</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Andrews Bible 1977.pdf`, "_blank")}
  >
    Andrews Bible 1977
  </button> 

<button
    className="bible-btn pdf-btn>An Improved Version</button>"
    onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQAnhHAO1nzATJsdgmkj3L8ZAYq0LwH6QZq7XyAafVqxP6Y?e=C5G0xs", "_blank")}
  >
    An Improved Version
  </button>

 <button 
    className="bible-btn pdf-btn>Anindilyakwa Bible</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Anindilyakwa Bible.pdf`, "_blank")}
  >
    Anindilyakwa Bible
  </button>

<button
  className="bible-btn"
  onClick={() => setShowAYB(!showAYB)}
>
  Anchor Yale Bible (AYB)
</button>

{showAYB && (
  <div className="books-menu">
    {aybBooks.map(book => (
      <button
        key={book.name}
        className="bible-btn"
        onClick={() =>
          window.open(
            book.url ||
            `${import.meta.env.BASE_URL}pdfs/AYB/${book.file}`,
            "_blank"
          )
        }
      >
        {book.name}
      </button>
    ))}
  </div>
)}

<button
  className="version-btn"
  onClick={() => setShowBelovedAndI(!showBelovedAndI)}
>
  Beloved and I Thomas McElwain
</button>

{showBelovedAndI && (
  <div className="books-menu">
    {belovedAndIBooks.map(book => (
      <button
        key={book.name}
        className="bible-btn"
        onClick={() =>
          window.open(
            `${import.meta.env.BASE_URL}pdfs/Beloved and I/${book.file}`,
            "_blank"
          )
        }
      >
        {book.name}
      </button>
    ))}
  </div>
)}

 <button
  className="bible-btn"
  onClick={() => setShowJSB(!showJSB)}
>
  Benisch's Jewish School Bible
</button>

 {showJSB && (
  <div className="books-menu">
    {jewishSchoolBible.map(book => (
      <button
        key={book.name}
        className="book-btn"
        onClick={() =>
          window.open(
            `${import.meta.env.BASE_URL}pdfs/Benisch's Jewish school Bible/${book.file}`,
            "_blank"
          )
        }
      >
        {book.name}
      </button>
    ))}
  </div>
)}

<button
    className="bible-btn pdf-btn>Bartlett Bible 1886-Vol.1-2</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Bartlett Bible 1886-Vol.1-2.pdf`, "_blank")}
  >
    Bartlett Bible 1886-Vol.1-2
  </button>

  <button
    className="bible-btn pdf-btn>Berean Standard Bible</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Berean Standard Bible.pdf`, "_blank")}
  >
    Berean Standard Bible
  </button>

 <button
    className="bible-btn pdf-btn>BRB</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/BRB.pdf`, "_blank")}
  >
    BRB
  </button>

  <button
    className="bible-btn pdf-btn>BSB</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/BSB.pdf`, "_blank")}
  >
    BSB
  </button>

 <button
    className="bible-btn pdf-btn>BSB-Concordance</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/BSB-Concordance.pdf`, "_blank")}
  >
    BSB-Concordance
  </button>

 <button
    className="bible-btn pdf-btn>Bible in Basic English</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Bible in Basic English.pdf`, "_blank")}
  >
    Bible in Basic English
  </button>

 <button
    className="bible-btn pdf-btn>Bible in Modern English</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Bible in Modern English.pdf`, "_blank")}
  >
    Bible in Modern English
  </button>

   <button
  className="bible-btn"
  onClick={() => setShowModernSpeech(!showModernSpeech)}
>
  Bible in Modern Speech
</button>

  {showModernSpeech && (
  <div className="books-menu">
    {modernSpeechBooks.map(book => (
      <button
        key={book.name}
        className="book-btn"
        onClick={() =>
          window.open(
            `${import.meta.env.BASE_URL}pdfs/Bible in Modern Speech/${book.file}`,
            "_blank"
          )
        }
      >
        {book.name}
      </button>
    ))}
  </div>
)}

 <button
  className="bible-btn"
  onClick={() => setShowBibleInVerse(!showBibleInVerse)}
>
  Bible in Verse (MSG/NIV)
</button>

 {showBibleInVerse && (
  <div className="books-menu">
    <h3 className="submenu-title">
      Bible in Verse (MSG/NIV)
    </h3>

    {bibleInVerseBooks.map(book => (
      <button
        key={book.name}
        className="bible-btn"
        onClick={() =>
          window.open(
            `${import.meta.env.BASE_URL}pdfs/Bible in Verse/${book.file}`,
            "_blank"
          )
        }
      >
        {book.name}
      </button>
    ))}
  </div>
)}

 <button
    className="bible-btn pdf-btn>Bible in Poem</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Bible in Poem.pdf`, "_blank")}
  >
    Bible in Poem
  </button>

 <button
    className="bible-btn pdf-btn>Brenton Septuagint Translation</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Brenton Septuagint Translation.pdf`, "_blank")}
  >
    Brenton Septuagint Translation
  </button>

 <button
    className="bible-btn pdf-btn>BOY</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/BOY.pdf`, "_blank")}
  >
    BOY
  </button>

<button
  className="bible-btn"
  onClick={() => setShowBoothroyd(!showBoothroyd)}
>
  Boothroyd Family Bible
</button>

 {showBoothroyd && (
  <div className="books-menu">
    {boothroydFamilyBible.map(book => (
      <button
        key={book.name}
        className="bible-btn"
        onClick={() =>
          window.open(
            book.url ||
            `${import.meta.env.BASE_URL}pdfs/Boothroyd Family Bible/${book.file}`,
            "_blank"
          )
        }
      >
        {book.name}
      </button>
    ))}
  </div>
)}

  <button
  className="bible-btn"
  onClick={() => setShowCCB(!showCCB)}
>
  Christian Community Bible (CCB)
</button>
  
  {showCCB && (
  <div className="ccb-menu">
   <button
  className="bible-btn"
  onClick={() => setShowNT(!showNT)}
>
  New Testament
</button>

 <button
  className="bible-btn"
  onClick={() => setShowOT(!showOT)}
>
  Old Testament
</button>
  </div>
)}

{showNT && (
  <div className="books-menu">
    {newTestament.map(book => (
  <button
    key={book.name}
    className="bible-btn"
    onClick={() =>
      window.open(
        `${import.meta.env.BASE_URL}pdfs/New Testament/${book.file}`,
        "_blank"
      )
    }
  >
    {book.name}
  </button>
))}
  </div>
)}

{showOT && (
  <div className="books-menu">
    {oldTestament.map(book => (
      <button
        key={book.name}
        className="bible-btn"
        onClick={() =>
          window.open(
            `${import.meta.env.BASE_URL}pdfs/Old Testament/${book.file}`,
            "_blank"
          )
        }
      >
        {book.name}
      </button>
    ))}
  </div>
)}

  <button
  className="bible-btn pdf-btn cpb-btn"
  onClick={() =>
    window.open(
      "https://1drv.ms/b/c/7eb51b35f3576b65/IQCzP1Oy48tnT4fGX-_b6762AUpF52eCKDjiroVG61m4Fsc?e=FUuIXa", "_blank")}
>
  Cambridge Paragraph Bible (CPB)
</button>

  <button
    className="bible-btn pdf-btn>CPDV</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/CPDV.pdf`, "_blank")}
  >
    CPDV
  </button> 

<button
    className="bible-btn pdf-btn>CSB</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/CSB.pdf`, "_blank")}
  >
    CSB
  </button> 

<button
    className="bible-btn pdf-btn>CEB-Genesis</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/CEB-Genesis.pdf`, "_blank")}
  >
    CEB-Genesis
  </button> 

<button
    className="bible-btn pdf-btn>Composition of Genesis</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Composition of Genesis.pdf`, "_blank")}
  >
    Composition of Genesis
  </button> 

<button
    className="bible-btn pdf-btn>Promise Bible</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Promise Bible.pdf`, "_blank")}
  >
    Promise Bible
  </button> 

<button
    className="bible-btn pdf-btn>CEVUK</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/CEVUK.pdf`, "_blank")}
  >
    CEVUK
  </button>

<button
    className="bible-btn pdf-btn>Concordant Version-OT 2015</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Concordant Version-OT 2015.pdf`, "_blank")}
  >
    Concordant Version-OT 2015
  </button>

<button
    className="bible-btn pdf-btn>Confraternity Gala-Apost</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Confraternity Gala-Apost.pdf`, "_blank")}
  >
    Confraternity Gala-Apost
  </button>

<button
    className="bible-btn pdf-btn>Darby Translation</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Darby Translation.pdf`, "_blank")}
  >
    Darby Translation
  </button>

<button
    className="bible-btn pdf-btn>DASV</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/DASV.pdf`, "_blank")}
  >
    DASV
  </button>

<button
    className="bible-btn pdf-btn>Douay Rheims Version</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Douay Rheims Version .pdf`, "_blank")}
  >
    Douay Rheims Version
  </button>

<button
    className="bible-btn pdf-btn>Earliest English Version Vol I.pdf</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Earliest English Version Vol I.pdf`, "_blank")}
  >
    Earliest English Version Vol I.pdf
  </button>

<button
    className="bible-btn pdf-btn>ERV</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/ERV.pdf`, "_blank")}
  >
    ERV
  </button>

<button
    className="bible-btn pdf-btn>ERV-OT</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/ERV-OT.pdf`, "_blank")}
  >
    ERV-OT
  </button>

<button
    className="bible-btn pdf-btn>ERV-WBTC</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/ERV-WBTC.pdf`, "_blank")}
  >
    ERV-WBTC
  </button>

<button
    className="bible-btn pdf-btn>ESV</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/ESV.pdf`, "_blank")}
  >
    ESV
  </button>

<button
    className="bible-btn pdf-btn>EVD-OT</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/EVD-OT.pdf`, "_blank")}
  >
    EVD-OT
  </button>

<button
    className="bible-btn pdf-btn>Exegeses Parallel Bible</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Exegeses Parallel Bible.pdf`, "_blank")}
  >
    Exegeses Parallel Bible
  </button>

<button
    className="bible-btn pdf-btn>Free Bible Version-FBV</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Free Bible Version-FBV.pdf`, "_blank")}
  >
    Free Bible Version-FBV
  </button>

<button
    className="bible-btn pdf-btn>Genesis</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Genesis.pdf`, "_blank")}
  >
    Genesis
  </button>

<button
    className="bible-btn pdf-btn>Genesis 1</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Genesis 1.pdf`, "_blank")}
  >
    Genesis 1
  </button>

<button
    className="bible-btn pdf-btn>Genesis & Exodus-Henry</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Genesis & Exodus-Henry.pdf`, "_blank")}
  >
    Genesis & Exodus-Henry
  </button>

<button
    className="bible-btn pdf-btn>Genesis--R.Crumb</button>"
    onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQD3e4S1WqLVQ7BUkrAmRF7gAU2UTEuQN7wSFB3Ts_viU5I?e=eaGVNd", "_blank")}
  >
    Genesis--R.Crumb
  </button>

<button
    className="bible-btn pdf-btn>Genesis -Wade Woosung</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Genesis -Wade Woosung.pdf`, "_blank")}
  >
    Genesis -Wade Woosung
  </button>

<button
    className="bible-btn pdf-btn>Geneva Bible -1560</button>"
    onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQBDf_12JfT8SbhXrln9-uSGATqHlUCGATgqSkfrSk4jVFk?e=9Xtb3C", "_blank")}
  >
    Geneva Bible -1560
  </button>

<button
    className="bible-btn pdf-btn>Geneva Bible-1599</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Geneva Bible-1599.pdf`, "_blank")}
  >
    Geneva Bible-1599
  </button>

<button
    className="bible-btn pdf-btn>George Noyes Bible</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/George Noyes Bible.pdf`, "_blank")}
  >
    George Noyes Bible
  </button>

<button
    className="bible-btn pdf-btn>God's Living Word</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/God's Living Word.pdf`, "_blank")}
  >
    God's Living Word
  </button>

<button
    className="bible-btn pdf-btn>God's Word Translation</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/God's Word Translation.pdf`, "_blank")}
  >
    God's Word Translation
  </button>

<button
    className="bible-btn pdf-btn>Good News Bible</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Good News Bible.pdf`, "_blank")}
  >
    Good News Bible
  </button>

<button
    className="bible-btn pdf-btn>Gospel of Thomas</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Gospel of Thomas.pdf`, "_blank")}
  >
    Gospel of Thomas
  </button>

<button
    className="bible-btn pdf-btn>Gospels by Francis Patrick</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Gospels by Francis Patrick.pdf`, "_blank")}
  >
    Gospels by Francis Patrick
  </button>

<button
    className="bible-btn pdf-btn>Halley's Bible Handbook</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Halley's Bible Handbook.pdf`, "_blank")}
  >
    Halley's Bible Handbook
  </button>

<button
    className="bible-btn pdf-btn>Hebraic Roots Bible</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Hebraic Roots Bible.pdf`, "_blank")}
  >
    Hebraic Roots Bible
  </button>

<button
    className="bible-btn pdf-btn>Helen Spurrel Bible</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Helen Spurrel Bible.pdf`, "_blank")}
  >
    Helen Spurrel Bible
  </button>

<button
    className="bible-btn pdf-btn>Hieroglyphick-Bible</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Hieroglyphick-Bible.pdf`, "_blank")}
  >
    Hieroglyphick-Bible
  </button>

<button
    className="bible-btn pdf-btn>HCSB</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/HCSB.pdf`, "_blank")}
  >
    HCSB
  </button>

  <button
  className="version-btn"
  onClick={() => setShowWellbeloved(!showWellbeloved)}
>
  Holy Scriptures Wellbeloved
</button>

{showWellbeloved && (
  <div className="books-menu">
    {wellbelovedBooks.map(book => (
      <button
        key={book.name}
        className="bible-btn"
        onClick={() =>
          window.open(
            `${import.meta.env.BASE_URL}pdfs/Holy Scriptures Wellbeloved/${book.file}`,
            "_blank"
          )
        }
      >
        {book.name}
      </button>
    ))}
  </div>
)}

<button
    className="bible-btn pdf-btn>Holy bible By kerr</button>"
    onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQDWgvtNaRAVTaUfltwu1txWAW_eLDmpOrFHIkKyXr74dsI?e=8Qv1K3", "_blank")}
  >
    Holy bible By kerr
  </button>

<button
    className="bible-btn pdf-btn>Holy Bible  BYZ 2022</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Holy Bible  BYZ 2022.pdf`, "_blank")}
  >
    Holy Bible  BYZ 2022
  </button>

<button
    className="bible-btn pdf-btn>Holy Bible C Wordsworth</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Holy Bible C Wordsworth.pdf`, "_blank")}
  >
    Holy Bible C Wordsworth
  </button>

<button
    className="bible-btn pdf-btn>Holy Bible facsimile 1611</button>"
    onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQDxzTZ53d3rSbWvtbaoIS3CAW71lAfZAxAyUryr5WuT-X8?e=CgvNNe", "_blank")}
  >
    Holy Bible facsimile 1611
  </button>

<button
    className="bible-btn pdf-btn>Holy Bible-In-Its-Original-Order</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Holy Bible-In-Its-Original-Order.pdf`, "_blank")}
  >
    Holy Bible-In-Its-Original-Order
  </button>

  <button
    className="bible-btn pdf-btn> Holy Scriptures-RBarker 1615(BHS)</button>"
    onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQAZMOojFt3vTYnEm3zdh5UTAR8003WAFeSqxF6gpPxx264?e=YJfXKo", "_blank")}
  >
    Holy Scriptures-RBarker 1615(BHS)
  </button>

<button
    className="bible-btn pdf-btn>Holy Bible by  Denvir</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Holy Bible by  Denvir.pdf`, "_blank")}
  >
    Holy Bible by  Denvir
  </button>

<button
    className="bible-btn pdf-btn>Holy Bible-Robert Young</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Holy Bible-Robert Young.pdf`, "_blank")}
  >
    Holy Bible-Robert Young
  </button>

 <button
  className="bible-btn"
  onClick={() => setShowCharlesThompson(!showCharlesThompson)}
>
  Holy Bible-Charles Thompson
</button>

{showCharlesThompson && (
  <div className="books-menu">
    <h3 className="submenu-title">Holy Bible-Charles Thompson</h3>

    {charlesThompsonBooks.map(book => (
      <button
        key={book.name}
        className="book-btn"
        onClick={() =>
          window.open(
            `${import.meta.env.BASE_URL}pdfs/Holy Bible-Charles Thompson/${book.file}`,
            "_blank"
          )
        }
      >
        {book.name}
      </button>
    ))}
  </div>
)}

<button
    className="bible-btn pdf-btn>Ichthys Translations-OT</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Ichthys Translations-OT.pdf`, "_blank")}
  >
    Ichthys Translations-OT
  </button>

<button
    className="bible-btn pdf-btn>Interlinear Greek-Eng Septuagint.pdf</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Interlinear Greek-Eng Septuagint.pdf`, "_blank")}
  >
    Interlinear Greek-Eng Septuagint
  </button>

<button
    className="bible-btn pdf-btn>ISV.pdf</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/ISV.pdf`, "_blank")}
  >
    ISV
  </button>

<button
    className="bible-btn pdf-btn>JBR.pdf</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/JBR.pdf`, "_blank")}
  >
    JBR
  </button>

<button
    className="bible-btn pdf-btn>JEHOVAH Name KJV</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/JEHOVAH Name KJV.pdf`, "_blank")}
  >
    JEHOVAH Name KJV
  </button>

<button
    className="bible-btn pdf-btn>Jerusalem Bible 1966</button>"
    onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQALv4pXB8bASIbOo3Ts1fROAaJLf7bKbCRY2gVMtpotpY8?e=SBA53I", "_blank")}
  >
    Jerusalem Bible 1966
  </button>

<button
    className="bible-btn pdf-btn>JPS Tanakh 1917</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/JPS Tanakh 1917.pdf`, "_blank")}
  >
    JPS Tanakh 1917
  </button>

  <button
    className="bible-btn pdf-btn>Jewish School & Family Bible</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Jewish School & Family Bible.pdf`, "_blank")}
  >
    Jewish School & Family Bible
  </button>

   <button
    className="bible-btn pdf-btn>John Wycliffe Bible-1382</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/John Wycliffe Bible-1382.pdf`, "_blank")}
  >
    John Wycliffe Bible-1382
  </button>

    <button
    className="bible-btn pdf-btn>Joseph Smith Bible (JST)</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Joseph Smith Bible (JST).pdf`, "_blank")}
  >
    Joseph Smith Bible (JST)
  </button>

<button
    className="bible-btn pdf-btn>KJV Bible 1611</button>"
    onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQBVvkVkmWjPR5y3-fbY7AdEAUO3YSlOvVci9wUl3q5i0B4?e=ipCLQx", "_blank")}
  >
    KJV Bible 1611
  </button>

  <button
    className="bible-btn pdf-btn>King-James-Bible-1769</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/King-James-Bible-1769.pdf`, "_blank")}
  >
    King James Bible-1769
  </button>

  <button
    className="bible-btn pdf-btn>KJV Authorised -2006</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/KJV Authorised -2006.pdf`, "_blank")}
  >
    KJV Authorised -2006
  </button>

  <button
    className="bible-btn pdf-btn>KJV Cambridge Paragraph Bible</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/KJV Cambridge Paragraph Bible.pdf`, "_blank")}
  >
    KJV Cambridge Paragraph Bible
  </button>

<button
    className="bible-btn pdf-btn>KJV Oxford Edition-Blayney 1769</button>"
    onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQAMu2wMMF37RYGETlu7HfmaASpKjyq8nFDG6itxON4fS0k?e=jg0lzD","_blank")}
  >
    KJV Oxford Edition-Blayney 1769
  </button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/KJV Life in the sprit Bible.pdf`, "_blank")}
>
  KJV Life in the Spirit Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/KJV with Apocrypha & Deuterocanon .pdf`, "_blank")}
>
  KJV with Apocrypha & Deuterocanon
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Lamsa’s Translation .pdf`, "_blank")}
>
  Lamsa's Translation
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Leeser 24 Holy Scriptures -1922.pdf`, "_blank")}
>
  Leeser 24 Holy Scriptures (1922)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Leeser Tanakh Bible.pdf`, "_blank")}
>
  Leeser Tanakh Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Lexham_English_Bible ( LEB ).pdf`, "_blank")}
>
  Lexham English Bible (LEB)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/LHG Bibles RevJ.pdf`, "_blank")}
>
  LHG Bibles RevJ
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Literal Standard Version (LSV).pdf`, "_blank")}
>
  Literal Standard Version (LSV)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Logos KJV ( LKJV )Genesis.pdf`, "_blank")}
>
  Logos KJV (LKJV) Genesis
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/LXX 2012 Septuagiant US.pdf`, "_blank")}
>
  LXX 2012 Septuagiant US
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/LXX-2012 Septuagint UK.pdf`, "_blank")}
>
  LXX-2012 Septuagint UK
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Messianic Aleph Tav Scriptures(MATS).pdf`, "_blank")}
>
  Messianic Aleph Tav Scriptures (MATS)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Modern Literal Version ( MLV )OT.pdf`, "_blank")}
>
  Modern Literal Version (MLV) OT
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Modern Readers Bible-1899.pdf`, "_blank")}
>
  Modern Readers Bible (1899)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/NASB.pdf`, "_blank")}
>
  NASB
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Negro-Slave-Bible1807.pdf`, "_blank")}
>
  Negro-Slave Bible 1807
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/NETS.pdf`, "_blank")}
>
  NETS
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/NEV -Europian version OT.pdf`, "_blank")}
>
  NEV - European Version OT
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/New American Bible (NAB) .pdf`, "_blank")}
>
  New American Bible (NAB)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/New English Translation ( NET ).pdf`, "_blank")}
>
  New English Translation (NET)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/New Heart English Bible ( NHEB ).pdf`, "_blank")}
>
  New Heart English Bible (NHEB)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQBWgey_E3oFR63eJw7Q0Zr_AcgYYEbmFbaodbMaqzuHPbM?e=D7Jcn2", "_blank")}
>
  Newberry Bible 1890
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/New International Version (NIV) .pdf`, "_blank")}
>
  New International Version (NIV)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/New King James Version ( NKJV ).pdf`, "_blank")}
>
  New King James Version (NKJV)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/New Literal-OT Translation Portions.pdf`, "_blank")}
>
  New Literal-OT Translation Portions
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/New Living Translation -( NLT ).pdf`, "_blank")}
>
  New Living Translation (NLT)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/New Revised Standard Version ( NRSV ).pdf`, "_blank")}
>
  New Revised Standard Version (NRSV)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/New Revised Standard Version - NRSV.pdf`, "_blank")}
>
  New Revised Standard Version - NRSV
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/NewTestament-(GNV-ERV-KJV).pdf`, "_blank")}
>
  New Testament (GNV-ERV-KJV)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/New World Translation-1984.pdf`, "_blank")}
>
  New World Translation 1984
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/New World Translation (NWT)2013.pdf`, "_blank")}
>
  New World Translation (NWT) 2013
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Nigerian Pidgin English Bible.pdf`, "_blank")}
>
  Nigerian Pidgin English Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Noah Webster Bible.pdf`, "_blank")}
>
  Noah Webster Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/NWT - Study Edition .pdf`, "_blank")}
>
  NWT - Study Edition
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Nyangumarta English Bible.pdf`, "_blank")}
>
  Nyangumarta English Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/One Unity Resource Bible.pdf`, "_blank")}
>
  One Unity Resource Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Holy Scriptures Hebrew & English.pdf`, "_blank")}
>
  Holy Scriptures Hebrew & English
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/OEB -  Com.Spelling.pdf`, "_blank")}
>
  OEB - Com. Spelling
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/OEB - US.pdf`, "_blank")}
>
  OEB - US
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQA7aSGIDd5JQrQ9Couo-oEWAZX-6PlGMsz8q1d0tCok6tE?e=G2fIRe", "_blank")}
>
  Parallel New Testament - Scrivener
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQC1WGRhKHypSJhXyGKWbi0DAaH5-A2JF7TSUt503ksm7p4?e=6FDsgd", "_blank")}
>
  Pictorial Household Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Pioneer New Testament  2014.pdf`, "_blank")}
>
  Pioneer New Testament 2014
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Plain English Version (PEV).pdf`, "_blank")}
>
  Plain English Version (PEV)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Polyglot Full Bible.pdf`, "_blank")}
>
  Polyglot Full Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQD4eXNIbjyeTIbmwyuWxxeCAenG-gysvr4STWOMLNuZEqI?e=D5rBOq", "_blank")}
>
  Quaker (Purver) Bible 1764
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Reader's Digest Bible For Children.pdf`, "_blank")}
>
  Reader's Digest Bible For Children
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQC8qWIns9ejQZiXK_fqkyvyAerXv6Nqe6cfbs2vGyBVIs0?e=c88WpS", "_blank")}
>
  REB - 1877
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Recovery Version.pdf`, "_blank")}
>
  Recovery Version
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Revised Common Version(RCV).pdf`, "_blank")}
>
  Revised Common Version (RCV)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Revised English Bible ( REB ).pdf`, "_blank")}
>
  Revised English Bible (REB)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/RNKJV.pdf`, "_blank")}
>
  RNKJV
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Shaw’s OT-in-Art 1902.pdf`, "_blank")}
>
  Shaw's OT-in-Art 1902
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Shem Qadosh Version ( SQV ).pdf`, "_blank")}
>
  Shem Qadosh Version (SQV)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Story of the Bible in Rhyme.pdf`, "_blank")}
>
  Story of the Bible in Rhyme
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/RSV.pdf`, "_blank")}
>
  RSV
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Revised Version with Apocrypha.pdf`, "_blank")}
>
  Revised Version with Apocrypha
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Septuagint in American English.pdf`, "_blank")}
>
  Septuagint in American English
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Samuel II - Kirkpatrick.pdf`, "_blank")}
>
  Samuel II - Kirkpatrick
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Smith's Literal Translation.pdf`, "_blank")}
>
  Smith's Literal Translation
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/RWB - 1995.pdf`, "_blank")}
>
  RWB - 1995
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://www.dropbox.com/scl/fi/aai27mw4zr850ct8jmz96/Robert-Aitken-KJV-Bible-1782.pdf?rlkey=4fr6ztcdhxz01f48ujcxxsoo7&st=lztwulpi&dl=0", "_blank")}
>
  Robert Aitken KJV Bible 1782
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://www.dropbox.com/scl/fi/kyumphxy0h0lvwi29xjts/Revised-Version-1913.pdf?rlkey=5zi7go7sy7caglmb8khzhv9qw&st=2010fzx0&dl=0", "_blank")}
>
  Revised Version -1913
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://www.dropbox.com/scl/fi/7gtax1fwtdcpeuoxlcc8k/Revised-Version-1895.pdf?rlkey=2xg52p5s1nvxdejooewev8ovz&st=3nudv3xv&dl=0", "_blank")}
>
  Revised Version-1895
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://www.dropbox.com/scl/fi/1kn9boz4h32dxiwuzvp8z/Rotherham_Emphasized_Bible-EBR.pdf?rlkey=nh34z4a9onwzwd074jynaruej&st=4jymntg1&dl=0", "_blank")}
>
  Rotherham_Emphasized_Bible (EBR)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/RSV - 1952.pdf`, "_blank")}
>
  RSV - 1952
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Revised Webster Version 1833.pdf`, "_blank")}
>
  Revised Webster Version 1833
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Stories From the Bible.pdf`, "_blank")}
>
  Stories From the Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Scofield Reference Bible.pdf`, "_blank")}
>
  Scofield Reference Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/RKJNT.pdf`, "_blank")}
>
  RKJNT
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/SMBC Mini Bible.pdf`, "_blank")}
>
  SMBC Mini Bible
</button>

<button
  className="version-btn"
  onClick={() => setShowMoffattBible(!showMoffattBible)}
>
  Moffatt Bible 1935
</button>

{showMoffattBible && (
  <div className="books-menu">
    {moffattBibleBooks.map(book => (
      <button
        key={book.name}
        className="bible-btn"
        onClick={() =>
          window.open(
            `${import.meta.env.BASE_URL}pdfs/Moffatt Bible 1935/${book.file}`,
            "_blank"
          )
        }
      >
        {book.name}
      </button>
    ))}
  </div>
)}

<button
  className="bible-btn pdf-btn"
  onClick={() =>
    window.open(
      "https://1drv.ms/b/c/7eb51b35f3576b65/IQDvlLola-zFTbbmlQcWaFVRAVhrpYM5ClHsAqtaSY2PeLA?e=ETK5vD", "_blank")}
>
  Modern Readers Bible -1907
</button>

 <button
  className="version-btn"
  onClick={() => setShowNumericalBibleFWGrant(!showNumericalBibleFWGrant)}
>
  Numerical Bible
  <br />
  (F. W. Grant)
</button>

{showNumericalBibleFWGrant && (
  <div className="books-menu">
    {numericalBibleFWGrantBooks.map(book => (
      <button
        key={book.name}
        className="bible-btn"
        onClick={() =>
          window.open(
            `${import.meta.env.BASE_URL}pdfs/Numerical Bible FW Grant/${book.file}`,
            "_blank"
          )
        }
      >
        {book.name}
      </button>
    ))}
  </div>
)}

<button
  className="version-btn"
  onClick={() => setShowOriginalOrderedYLT(!showOriginalOrderedYLT)}
>
  Original Ordered YLT (OOYLT)
</button>

{showOriginalOrderedYLT && (
  <div className="books-menu">
    {ooyltBooks.map(book => (
      <button
        key={book.name}
        className="bible-btn"
        onClick={() =>
          window.open(
            `${import.meta.env.BASE_URL}pdfs/Original Ordered YLT (OOYLT)/${book.file}`,
            "_blank"
          )
        }
      >
        {book.name}
      </button>
    ))}
  </div>
)}

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://www.dropbox.com/scl/fi/u3u2jizogp66gjxw0n95z/Taverner-Bible-1539.pdf?rlkey=9c6fn2s70p3qezqq68zrcbz0c&st=m3d9dk5p&dl=0", "_blank")}
>
  Taverner Bible (1539)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://www.dropbox.com/scl/fi/pa54k58d5l9ifmw07cibq/The-36-Line-Bible-Bamberg-Bible.pdf?rlkey=sbe0ii845le2w1nxaaftlzjyn&st=mmecjrkv&dl=0", "_blank")}
>
  The 36-Line Bible (Bamberg Bible)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Abridged Bible .pdf`, "_blank")}
>
  The Abridged Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Alpha & Omega Bible ( AOB ).pdf`, "_blank")}
>
  The Alpha & Omega Bible (AOB)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The American Bible.pdf`, "_blank")}
>
  The American Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Apocrypha & Books from the Ethiopic Bible .pdf`, "_blank")}
>
  The Apocrypha & Books from the Ethiopic Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Aramaic New Testament.pdf`, "_blank")}
>
  The Aramaic New Testament
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Apostolic Bible Polyglot - First Edition.pdf`, "_blank")}
>
  The Apostolic Bible Polyglot - First Edition
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Bible for Teen Guys( NIV ).pdf`, "_blank")}
>
  The Bible for Teen Guys (NIV)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Bible in Living English-Steven T. Byington.pdf`, "_blank")}
>
  The Bible in Living English - Steven T. Byington
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQCxmkNhNVK6TaKlCeGnOlKnASmscb1ZfA-dFVuGLKAhpPE?e=JKx1X4", "_blank")}
>
  The Bishop's Bible - 1568
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Book Of Yahweh ( BOY ) 1999.pdf`, "_blank")}
>
  The Book Of Yahweh (BOY) 1999
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Book of Esther-JW Haley.pdf`, "_blank")}
>
  The Book of Esther - JW Haley
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Book of Yahweh- 1922.pdf`, "_blank")}
>
  The Book of Yahweh - 1922
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Century Bible ( St. Luke ).pdf`, "_blank")}
>
  The Century Bible (St. Luke)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Children's Bible.pdf`, "_blank")}
>
  The Children's Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The complete Aramaic English_interlinear_Peshitta.pdf`, "_blank")}
>
  The Complete Aramaic English Interlinear Peshitta
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Complete Apostles Bible (CAB).pdf`, "_blank")}
>
  The Complete Apostles Bible (CAB)
</button>

<button
  className="version-btn"
  onClick={() => setShowHaydockBible1848(!showHaydockBible1848)}
>
  The Haydock Bible 1848
</button>

{showHaydockBible1848 && (
  <div className="books-menu">
    {haydockBible1848Books.map(book => (
      <button
        key={book.name}
        className="bible-btn"
        onClick={() =>
          window.open(
            `${import.meta.env.BASE_URL}pdfs/The Haydock Bible 1848/${book.file}`,
            "_blank"
          )
        }
      >
        {book.name}
      </button>
    ))}
  </div>
)}

<button
    className="bible-btn pdf-btn>The Jewish Bible</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Jewish Bible.pdf`, "_blank")}
  >
    The Jewish Bible
  </button>

  <button
    className="bible-btn pdf-btn>Targum Onkelos Pentateuch</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Targum Onkelos Pentateuch.pdf`, "_blank")}
  >
    Targum Onkelos Pentateuch
  </button>

<button
  className="version-btn"
  onClick={() =>
    setShowInternationalEnglishVersion(!showInternationalEnglishVersion)
  }
>
  The International English Version (IEB)
</button>

{showInternationalEnglishVersion && (
  <div className="books-menu">
    {internationalEnglishVersionBooks.map(book => (
      <button
        key={book.name}
        className="bible-btn"
        onClick={() =>
          window.open(
            `${import.meta.env.BASE_URL}pdfs/The International English Version (IEB)/${book.file}`,
            "_blank"
          )
        }
      >
        {book.name}
      </button>
    ))}
  </div>
)}

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://docs.google.com/document/d/1qH0-8OICfK7Jh-saaF27V5N1PR_G77oq/edit?usp=drive_link&ouid=100043722794724375991&rtpof=true&sd=true", "_blank")}
>
  Children's Story Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQDo5oxIblF2R6S65KqRzOj3AZFcNBYL9gHi8fgTudp8uvE?e=LYyFK0", "_blank")}
>
  The Complete British Family Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://drive.google.com/file/d/1e_WE8JXxGYfv5wdLBZuLShtZLzl2AQuf/view?usp=drive_link", "_blank")}
>
  The Emphatic Diaglott NT
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://drive.google.com/file/d/18VLFvxLL-VE7TFtvxQSFE723Y86Ws8_1/view?usp=drive_link", "_blank")}
>
  The Holy Bible With The Apocrypha
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQCqfjgmw9pLR5wvrywPvp7LAa-4DbZTvbJHwYyk58LI70A?e=ZnpciM", "_blank")}
>
  The Illuminated Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQBAvo1OyhYcRKplCjeTYaQZARFLZzvVExgkel-YlKVmOxo?e=uxfLiA", "_blank")}
>
  The Illustrated Bible Story by Story
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://drive.google.com/file/d/1KqiykdnaSblxixty6UZFYpCNNg_vpPEh/view?usp=drive_link", "_blank")}
>
  The NET Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://drive.google.com/file/d/1TPRqpheNDwRWyDNprFf5pe1UWtxBka1W/view?usp=sharing", "_blank")}
>
  The Parallel Bible 1886
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQCladME6jqISYIjjO44z7YgAcTssLPDy5JvgiJUd1cxoMI?e=PRBJdM", "_blank")}
>
  The Prayer Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://drive.google.com/file/d/1Ubgrsw3ObpdGvvG-9bzydEZFrkb_Pcxx/view?usp=drive_link", "_blank")}
>
  The Sacred Scriptures
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://drive.google.com/file/d/16xwuLNttCfxbo00B81HZjZVlMoAEjxj9/view?usp=drive_link", "_blank")}
>
  The-Modern-Readers-Bible (MRB)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://drive.google.com/file/d/1FkB5uD6yhi_vVsdX6eLy1pIpHozXu5_Y/view?usp=sharing", "_blank")}
>
  The Prophets (Lowth) Bible Vol.1-5
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://1drv.ms/b/c/7eb51b35f3576b65/IQB207Q2Q2kRR45GSU3cyKNQAZzF9m_m3i35KLNBx3i9QPw?e=morLd7", "_blank")}
>
  Thomas Newberry Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://drive.google.com/file/d/15nJlsdSasuYC0nlWKMuZIgSNdYAdpGGy/view?usp=drive_link", "_blank")}
>
  Thompson Chain Reference Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://drive.google.com/file/d/1js-j-TZTfLcmpCizWkNN8_e_Je8ylke4/view?usp=drive_link", "_blank")}
>
  Variorum Teacher's Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open("https://drive.google.com/file/d/11E5dq_OsIELa_h8qzuKMCUuJjH0EfUCL/view?usp=drive_link", "_blank")}
>
  Vulgate Translation
</button>

<button
    className="bible-btn pdf-btn>Ichthys Translations-OT</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Ichthys Translations-OT.pdf`, "_blank")}
  >
    Ichthys Translations-OT
  </button>

<button
  className="version-btn"
  onClick={() => setShowPictorialBible1861(!showPictorialBible1861)}
>
  The Pictorial Bible 1861
</button>

{showPictorialBible1861 && (
  <div className="books-menu">
    {pictorialBible1861Books.map(book => (
      <button
        key={book.name}
        className="bible-btn"
        onClick={() => window.open(book.url, "_blank")}
      >
        {book.name}
      </button>
    ))}
  </div>
)}

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Condensed Bible 2004.pdf`, "_blank")}
>
  The Condensed Bible 2004
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Holy History 1653.pdf`, "_blank")}
>
  The Holy History 1653
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Israelite Samaritan Version.pdf`, "_blank")}
>
  The Israelite Samaritan Version
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The New Oxford Annotated Bible.pdf`, "_blank")}
>
  The New Oxford Annotated Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Orthodox Study Bible(SAAS).pdf`, "_blank")}
>
  The Orthodox Study Bible (SAAS)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The story Bible .pdf`, "_blank")}
>
  The Story Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Voice, Compass Bible .pdf`, "_blank")}
>
  The Voice, Compass Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Thomson Translation(1808).pdf`, "_blank")}
>
  Thomson Translation (1808)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Illustrated (KJV).pdf`, "_blank")}
>
  The Illustrated (KJV)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Lexham English Bible.pdf`, "_blank")}
>
  The Lexham English Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Literary Man’s Bible.pdf`, "_blank")}
>
  The Literary Man's Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Living Torah By Rabbi ( TLT ).pdf`, "_blank")}
>
  The Living Torah By Rabbi (TLT)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The MacArthur Daily Bible.pdf`, "_blank")}
>
  The MacArthur Daily Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Names of God Bible ( NOG ).pdf`, "_blank")}
>
  The Names of God Bible (NOG)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Rastafari Bible.pdf`, "_blank")}
>
  The Rastafari Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Shorter Bible-(Kent)(1921).pdf`, "_blank")}
>
  The Shorter Bible (Kent) (1921)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Syriac New Testament .pdf`, "_blank")}
>
  The Syriac New Testament
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Yahwist Bible.pdf`, "_blank")}
>
  The Yahwist Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Translation for Translators ( T4T ).pdf`, "_blank")}
>
  Translation for Translators (T4T)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Updated Version ( UPDV ).pdf`, "_blank")}
>
  Updated Version (UPDV)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Holy Bible for ESL Readers (NIrV) .pdf`, "_blank")}
>
  The Holy Bible for ESL Readers (NIrV)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Holy Bible (Recovery Version ).pdf`, "_blank")}
>
  The Holy Bible (Recovery Version)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Orthodox Jewish Bible (OJB).pdf`, "_blank")}
>
  The Orthodox Jewish Bible (OJB)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The People's New Testament .pdf`, "_blank")}
>
  The People's New Testament
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The_Scottish_Paraphrases.pdf`, "_blank")}
>
  The Scottish Paraphrases
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The War Bible.pdf`, "_blank")}
>
  The War Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/TNIV.pdf`, "_blank")}
>
  TNIV
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/TPT - NT_ With Psalms.pdf`, "_blank")}
>
  TPT - NT With Psalms
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Tree of Life Version (TLV) .pdf`, "_blank")}
>
  Tree of Life Version (TLV)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Unlocked Dynamic Bible ( UDB ).pdf`, "_blank")}
>
  Unlocked Dynamic Bible (UDB)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Unlocked Literal Bible (ULB).pdf`, "_blank")}
>
  Unlocked Literal Bible (ULB)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Updated Brenton Septuagint Bible.pdf`, "_blank")}
>
  Updated Brenton Septuagint Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/WEB with Deuterocanon Apocrypha .pdf`, "_blank")}
>
  WEB with Deuterocanon Apocrypha
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/World Eng. Bible Deuterocanonical.pdf`, "_blank")}
>
  World Eng. Bible Deuterocanonical
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/World English Bible Catholic( WEB ).pdf`, "_blank")}
>
  World English Bible Catholic (WEB)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/World English Bible ( WEB ).pdf`, "_blank")}
>
  World English Bible (WEB)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/World Messianic Bible UK.pdf`, "_blank")}
>
  World Messianic Bible UK
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/World Messianic Bible ( WMB ).pdf`, "_blank")}
>
  World Messianic Bible (WMB)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Wycliffe's Bible Modern Spelling .pdf`, "_blank")}
>
  Wycliffe's Bible Modern Spelling
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Young's Literal Translation (YLT).pdf`, "_blank")}
>
  Young's Literal Translation (YLT)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Wycliffe Bible Enhanced .pdf`, "_blank")}
>
  Wycliffe Bible Enhanced
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Wycliffe & Purvey OT.pdf`, "_blank")}
>
  Wycliffe & Purvey OT
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Yawist-Bible-OT-Portions 1922.pdf`, "_blank")}
>
  Yawist Bible OT Portions 1922
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Worldview Study Bible  ( CSB ).pdf`, "_blank")}
>
  Worldview Study Bible (CSB)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Worchister-Bible-Abriged 1796.pdf`, "_blank")}
>
  Worchister Bible Abridged 1796
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/2001_Translation_Bible.docx`, "_blank")}
>
  2001 Translation Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Complete Personalize Promise Bible for Men.pdf`, "_blank")}
>
  The Complete Personalize Promise Bible for Men
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Dead Sea Scrolls Bible.pdf`, "_blank")}
>
  The Dead Sea Scrolls Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Halleluyah Scriptures -matti.pdf`, "_blank")}
>
  The Halleluyah Scriptures - Matti
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Holy Bible RCK Cyber Service .pdf`, "_blank")}
>
  The Holy Bible RCK Cyber Service
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Holy Piby (the Black mans Bible) .pdf`, "_blank")}
>
  The Holy Piby (The Black Man's Bible)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Modern Reader's Bible.pdf`, "_blank")}
>
  The Modern Reader's Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The New Jerusalem Bible (NJB).pdf`, "_blank")}
>
  The New Jerusalem Bible (NJB)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Scriptures 1998-2009 (TS2009).pdf`, "_blank")}
>
  The Scriptures 1998-2009 (TS2009)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Wisdom Books_ Job, Proverbs, & Ecclesiastes.pdf`, "_blank")}
>
  The Wisdom Books: Job, Proverbs & Ecclesiastes
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Woman’s Bible.pdf`, "_blank")}
>
  The Woman's Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Torah- The Five Books of Moses .pdf`, "_blank")}
>
  Torah - The Five Books of Moses
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Tyndale 1535.pdf`, "_blank")}
>
  Tyndale 1535
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Tyndale Modern Spelling .pdf`, "_blank")}
>
  Tyndale Modern Spelling
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Understanding the Bible Through Story .pdf`, "_blank")}
>
  Understanding the Bible Through Story
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Updated KJV ( UKJV ).pdf`, "_blank")}
>
  Updated KJV (UKJV)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Voice in the Wilderness ( VW ).pdf`, "_blank")}
>
  Voice in the Wilderness (VW)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/WEB - MP Johnson.pdf`, "_blank")}
>
  WEB - MP Johnson
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Webster Bible.pdf`, "_blank")}
>
  Webster Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Word on the Street Bible_IntroGen1-3.pdf`, "_blank")}
>
  Word on the Street Bible Intro Gen 1-3
</button>

 
<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/YAH BIBLE -2009.pdf`, "_blank")}
>
  YAH BIBLE - 2009
</button>

</div>
 
      <h2 className="psalm-title">📖 Psalms</h2>

<div className="button-container">
  {bibleVersions.map((version, index) => (
    <button
      className="bible-btn"
      key={index}
      onClick={() => setSelectedVersion(version)}
    >
      {version}
    </button>
  ))}

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Casual English Bible ( TCEB ).pdf`, "_blank")}
>
  The Casual English Bible ( TCEB )
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Knox Translation.pdf`, "_blank")}
>
  Knox Translation
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Youth Bible ( NCV ).pdf`, "_blank")}
>
  The Youth Bible ( NCV )
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Street Bible- Genesis .pdf`, "_blank")}
>
  The Street Bible- Genesis
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Bible Book By Book.pdf`, "_blank")}
>
  The Bible Book By Book
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Berkeley Version ( MEB ).pdf`, "_blank")}
>
  Berkeley Version ( MEB )
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Wycliffe Bible ( WYC -2001 ).pdf`, "_blank")}
>
  Wycliffe Bible ( WYC -2001 )
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Lamsa Bible.pdf`, "_blank")}
>
  Lamsa Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/A Paraphrase on the Book of Job.pdf`, "_blank")}
>
  A Paraphrase on the Book of Job
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Yes Word - Genesis.pdf`, "_blank")}
>
  The Yes Word - Genesis
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Unlocked Literal Bible -Gen- (ULB).pdf`, "_blank")}
>
  Unlocked Literal Bible -Gen- (ULB)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Unlocked Dynamic Bible ( UDB )1.pdf`, "_blank")}
>
  Unlocked Dynamic Bible1 ( UDB )
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Remedy Bible.pdf`, "_blank")}
>
  The Remedy Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Clear Word Bible.pdf`, "_blank")}
>
  Clear Word Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/2001_Translation_Bible.pdf`, "_blank")}
>
  2001 Translation Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Clear Word for kids-a simplified paraphrase.pdf`, "_blank")}
>
  Clear Word for Kids - Simplified Paraphrase
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Thomson Translation (Genesis).pdf`, "_blank")}
>
  Thomson Translation (Genesis)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Schocken Bible -Genesis.pdf`, "_blank")}
>
  The Schocken Bible - Genesis
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Holy Bible -T. Nelson.pdf`, "_blank")}
>
  The Holy Bible - T. Nelson
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Exegesis Companion Bible  (ECB).pdf`, "_blank")}
>
  Exegesis Companion Bible (ECB)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Unfolding word Literal Text - Gen-(ULT).pdf`, "_blank")}
>
  Unfolding Word Literal Text (ULT)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Restoration Edition Scriptures.pdf`, "_blank")}
>
  Restoration Edition Scriptures
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Concordant Literal Version (CLV ).pdf`, "_blank")}
>
  Concordant Literal Version (CLV)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Juvenile Bible.pdf`, "_blank")}
>
  The Juvenile Bible
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Complete Tanakh.pdf`, "_blank")}
>
  The Complete Tanakh
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Inspired Version- Genesis ( IV ).pdf`, "_blank")}
>
  Inspired Version - Genesis (IV)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/English Version For the Deaf.pdf`, "_blank")}
>
  English Version For the Deaf
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Inclusive Bible Genesis .pdf`, "_blank")}
>
  The Inclusive Bible Genesis
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Jubilee Bible ( JUB ).pdf`, "_blank")}
>
  Jubilee Bible ( JUB )
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Old Testament for Everyone.pdf`, "_blank")}
>
  The Old Testament for Everyone
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Unfolding word Simplified Text-(UST).pdf`, "_blank")}
>
  Unfolding Word Simplified Text (UST)
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Book Of Job Paraphrased.pdf`, "_blank")}
>
  Book Of Job Paraphrased
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Living Bible-Paraphrased.pdf`, "_blank")}
>
  The Living Bible - Paraphrased
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Laughing Bird Paraphrased Bible G.pdf`, "_blank")}
>
  Laughing Bird Paraphrased Bible G
</button>

<button
  className="bible-btn pdf-btn"
  onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Transparent English Bible .pdf`, "_blank")}
>
  Transparent English Bible
</button>

</div>

<h2 className="psalm-title tamil-title">
  📖 Psalms-Tamil
</h2>

<div className="button-container">
  {TamilVersions.map((version, index) => (
    <button
      className="bible-btn tamil-btn"
      key={index}
      onClick={() => setSelectedVersion(version)}
    >
      {version}
    </button>
  ))}
</div>

      {/* Bible Content */}
      {selectedVersion === "The Yes Word" && (
        <div className="verse-box">
          <h2>The Yes Word</h2>

          <h3>The 1st Chapter</h3>

          <p>
            In the beginning God created heaven and earth. 
            </p>
            
            <p>
            The earth was void and empty, and darkness was upon the deep, and
            the spirit of God moved upon the water.
          </p>

          <p>
            Then God said: let there be light: and there was light.
            And God saw the light that it was good: and divided the
            light from the darkness, and called the light day, and
            the darkness night: and so of the evening and morning was
            made the first day.
          </p>
        </div>
      )}

      {selectedVersion === "BSI" && (
  <div className="verse-box tamil-box">
    <h2>BSI</h2>

    <h3>ஆதியாகமம் </h3>

    <h4>அதிகாரம் 1:1-5</h4>

    <p>
      1. ஆதியிலே தேவன் வானத்தையும் பூமியையும்
      சிருஷ்டித்தார்.
    </p>

    <p>
      2. பூமியானது ஒழுங்கின்மையும் வெறுமையுமாய்
      இருந்தது; ஆழத்தின்மேல் இருள் இருந்தது; தேவ
      ஆவியானவர் ஜலத்தின்மேல்
      அசைவாடிக்கொண்டிருந்தார்.
    </p>

    <p>
      3. தேவன் வெளிச்சம் உண்டாகக்கடவது என்றார்.
      வெளிச்சம் உண்டாயிற்று.
    </p>

    <p>
      4. வெளிச்சம் நல்லது என்று தேவன் கண்டார்;
      வெளிச்சத்தையும் இருளையும் தேவன்
      வெவ்வேறாகப் பிரித்தார்.
    </p>

    <p>
      5. தேவன் வெளிச்சத்துக்குப் பகல் என்று
      பேரிட்டார், இருளுக்கு இரவு என்று பேரிட்டார்;
      சாயங்காலமும் விடியற்காலமுமாகி முதலாம் நாள்
      ஆயிற்று.
    </p>
  </div>
)}

  {selectedVersion === "RC Tamil" && (
  <div className="verse-box tamil-box">
    <h2>RC Tamil</h2>

<h2>சங்கீதம் 1</h2>
<p>
1. தீயோரின் அறிவுரைப்படி நடவாதவன், பாவிகளின் வழியில்
செல்லாதவன், பழிகாரர் கூட்டத்தில் அமராதவன் பேறு பெற்றோன்.
■
</p>
<p>
2.கடவுளுடைய திருச்சட்டத்தில் இன்பம் காண்பவனாய், அதை அல்லும் பகலும் தியானிப்பவனே பேறு பெற்றோன்.
■
</p>
<p>
3.வாய்க்கால்களின் ஓரத்தில் நடப்பட்டு, இலைகள் என்
றும் உதிர்க்காமல் தக்க பருவத்தில் கனி தரும் மரத்துக்கு அவன் ஒப்பாவான். அவன் செய்வதனைத்திலும் வெற்றி பெறுவான்.
■
</p>
<p>
4.தீயவருக்கு அங்ஙனமிராது, ஒரு நாளுமிராது: காற்றோடு காற்றாய்ப்
பறக்கும் பதர் போன்றவர்கள் அவர்கள்.
■
</p>
<p>
5.நீதித்தீர்ப்பு வரும் போது தீயோர் நிலை குலைந்து போவர்: நல்லவர்கள் சபையில் பாவிகள் நிலைத்திரார்.
■
</p>
<p>
6:நல்லோரின் வழியைக் கடவுள் பாதுகாப்பார்: தீயோரின் வழியோ
அழிவுக்கே செல்லும்.
</p>
 </div>
)}

 {selectedVersion === "WBTC" && (
  <div className="verse-box tamil-box">
    <h2>WBTC</h2>

    <h3>ஆதியாகமம்</h3>

    <h4>
      உலகத்தின் தொடக்கம் / முதல் நாள் - வெளிச்சம்
    </h4>

    <p>
      1. துவக்கத்தில் தேவன் வானத்தையும்,
      பூமியையும் படைத்தார்.
    </p>

    <p>
      2. பூமியானது வெறுமையாக இருந்தது.
      தண்ணீரின்மேல் இருள் சூழ்ந்திருந்தது.
      தேவ ஆவியானவர் அந்தத் தண்ணீரின்மேல்
      அசைவாடிக் கொண்டிருந்தார்.
    </p>

    <p>
      3. அப்பொழுது தேவன்,
      ‘வெளிச்சம் உண்டாகட்டும்’ என்றார்.
      வெளிச்சம் உண்டாயிற்று.
    </p>

    <p>
      4. தேவன் வெளிச்சத்தைப் பார்த்தார்.
      அது நல்லதென்று அறிந்துகொண்டார்.
      பிறகு தேவன் வெளிச்சத்தையும்
      இருளையும் வெவ்வேறாகப் பிரித்தார்.
    </p>

    <p>
      5. தேவன் வெளிச்சத்துக்கு ‘பகல்’
      என்று பெயரிட்டார். அவர் இருளுக்கு
      ‘இரவு’ என்று பெயரிட்டார்.
      மாலையும் காலையும் ஏற்பட்டது.
      இதுவே முதல் நாளாயிற்று.
    </p>
  </div>
)}

 {selectedVersion === "NWT-2013" && (
  <div className="verse-box tamil-box">
    <h2>2013 NWT</h2>

    <h3>
      பரிசுத்த பைபிள் புதிய உலக மொழிபெயர்ப்பு
    </h3>

    <h4>ஆதியாகமம் 1:1-5</h4>

    <p>
      1. ஆரம்பத்தில் கடவுள் வானத்தையும்
      பூமியையும் படைத்தார்.
    </p>

    <p>
      2. பூமி ஒழுங்கில்லாமல் வெறுமையாக
      இருந்தது, எங்கு பார்த்தாலும் ஆழமான
      தண்ணீரும் இருட்டுமாக இருந்தது.
      தண்ணீருக்கு மேலே கடவுளுடைய சக்தி
      செயல்பட்டுக்கொண்டு இருந்தது.
    </p>

    <p>
      3. பின்பு கடவுள்,
      ‘வெளிச்சம் வரட்டும்’ என்று சொன்னார்.
      அப்போது வெளிச்சம் வந்தது.
    </p>

    <p>
      4. கடவுள் வெளிச்சத்தைப் பார்த்தபோது
      அது நன்றாக இருந்தது. பின்பு அவர்
      வெளிச்சத்தையும் இருட்டையும்
      தனித்தனியாகப் பிரித்தார்.
    </p>

    <p>
      5. வெளிச்சத்துக்குப் ‘பகல்’ என்றும்,
      இருட்டுக்கு ‘இரவு’ என்றும் பெயர்
      வைத்தார். சாயங்காலமும்
      விடியற்காலையும் வந்தது,
      முதலாம் நாள் முடிந்தது.
    </p>
  </div>
)}

 {selectedVersion === "IRV-2017" && (
  <div className="verse-box tamil-box">
    <h2>IRV-2017</h2>

    <h3>
      இண்டியன் ரிவைஸ்டு வெர்ஸன்
    </h3>

    <h4>சிருஷ்டிப்பின் வரலாறு</h4>

    <p>
      1. ஆதியிலே தேவன் வானத்தையும்
      பூமியையும் படைத்தார்.
    </p>

    <p>
      2. பூமியானது ஒழுங்கற்றதாகவும்,
      வெறுமையாகவும் இருந்தது.
      ஆழத்தின்மேல் இருள் இருந்தது.
      தேவ ஆவியானவர் தண்ணீரின்மேல்
      அசைவாடிக் கொண்டிருந்தார்.
    </p>

    <p>
      3. தேவன்,
      ‘வெளிச்சம் உண்டாகட்டும்’
      என்றார். வெளிச்சம் உண்டானது.
    </p>

    <p>
      4. வெளிச்சம் நல்லது என்று
      தேவன் கண்டார்.
      வெளிச்சத்தையும் இருளையும்
      தேவன் வெவ்வேறாகப் பிரித்தார்.
    </p>

    <p>
      5. தேவன் வெளிச்சத்திற்கு
      ‘பகல்’ என்றும்,
      இருளுக்கு ‘இரவு’ என்றும்
      பெயரிட்டார்.
      சாயங்காலமும்
      விடியற்காலமுமாகி
      முதலாம் நாள் முடிந்தது.
    </p>
  </div>
)}

 {selectedVersion === "Tamil Bible-1860" && (
  <div className="verse-box tamil-box">
    <h2>Tamil Bible-1860</h2>

    <h3>
      மனிதர்கள் இரட்சிக்கப்படுவதற்காகச்
      சர்வலோக தயாபரரான கர்த்தர்
      அருளிச்செய்த சத்தியவேதமென்கிற
      பழைய ஏற்பாடு.
    </h3>

    <h4>
      மூலவாக்கியம் பெபுரிசியசையரால்
      எபிரேயுபாஷையிலிருந்து தமிழிலே
      திருப்பப்பட்டது.
    </h4>

    <h4>௧. அதிகாரம்</h4>

    <p>
      ௧. ஆதியிலே பராபரன்
      வானத்தையும் பூமியையும்
      சிருஷ்டித்தார்.
    </p>

    <p>
      ௨. பூமியோவெனில் ரூபமற்றதும்
      வெறுமையுமாயிருந்தது.
      ஆழத்தின் மேல் இருளுமாயிருந்தது.
      ஆனால் பராபரனுடைய ஆவி
      தண்ணீர்களின்மேலே
      அசைவாடிக் கொண்டிருந்தது.
    </p>

    <p>
      ௩. பராபரன்
      ‘வெளிச்சம் உண்டாகக்கடவது’
      என்றார்.
      அப்போது வெளிச்சம் உண்டாயிற்று.
    </p>

    <p>
      ௪. பராபரன் வெளிச்சத்தை
      நல்லதென்று கண்டார்.
      வெளிச்சத்தையும் இருளையும்
      பராபரன் வெவ்வேறாகப் பிரித்தார்.
    </p>

    <p>
      ௫. பராபரன் வெளிச்சத்துக்குப்
      ‘பகல்’ என்று பேரிட்டார்.
      இருளுக்கோ ‘இரா’ என்று
      பேரிட்டார்.
      இப்படியே சாயங்காலமானதினாலும்
      விடியுங்காலமானதினாலும்
      முதலாம் நாளுண்டாயிற்று.
    </p>
  </div>
)}

 {selectedVersion === "Tamil Bible-1934" && (
  <div className="verse-box tamil-box">
    <h2>Tamil Bible-1934</h2>

    <h3>ஆதியாகமம்</h3>

    <p>
      1. ஆதியிலே தேவன்
      ஆகாசத்தையும் பூமியையும்
      உண்டாக்கினார்.
    </p>

    <p>
      2. பூமி ரூபமில்லாதவையாகவும்
      வெறுமையாகவும் இருந்தது.
      ஆழத்தின் மேல் இருளும்
      பரப்பி இருந்தது.
      தேவனுடைய ஆவி
      ஜலத்தின் மேல்
      கலங்கியிருக்கிறதாயிருந்தது.
    </p>

    <p>
      3. தேவன்,
      ‘வெளிச்சம் உண்டாகக்கடவது’
      என்றார்.
      வெளிச்சம் உண்டாயிற்று.
    </p>

    <p>
      4. தேவன் வெளிச்சத்தை
      நன்றாயிருக்கிறது என்று கண்டார்.
      தேவன் வெளிச்சத்தையும்
      இருளையும் பிரித்தார்.
    </p>

    <p>
      5. வெளிச்சத்துக்குப்
      ‘பகல்’ என்று தேவன் பேரிட்டார்.
      இருளுக்கு ‘இரவு’ என்று
      பேரிட்டார்.
      இரவு நடந்தது;
      பகலும் ஆயிற்று:
      இதுவே முதல் நாள்.
    </p>
  </div>
)}
{selectedVersion === "Tamil Bible-1822" && (
  <div className="verse-box tamil-box">
    <h2>Tamil Bible-1822</h2>

    <h3>
      சத்தியவேதமென்‌கிற
      பழையவுடன்‌படிக்கை
    </h3>

    <h4>௧. அதிகாரம்</h4>

    <p>
      ௧. ஆதியிலே பராபரன்
      வானத்தையும் பூமியையுஞ்
      சிஷிட்டித்தார்.
    </p>

    <p>
      ௨. பூமியோவெனில்
      ரூபமற்றதும் வெறுமையுமாய்
      இருந்தது.
      ஆழத்தின் மேல் இருளுமாயிருந்தது.
      ஆனால் பராபரனுடைய ஆவி
      தண்ணீர்களின் மேலே
      அசைவாடிக்கொண்டிருந்தார்.
    </p>

    <p>
      ௩. பராபரன்
      ‘வெளிச்சமுண்டாகக்கடவது’
      என்றார்.
      அப்போது வெளிச்சமுண்டாச்சுது.
    </p>

    <p>
      ௪. பராபரன் வெளிச்சத்தை
      நல்லதென்று கண்டார்.
      வெளிச்சத்தையும் இருளையும்
      பராபரன் வெவ்வேறாகப்
      பிரித்தார்.
    </p>

    <p>
      ௫. பராபரன்
      வெளிச்சத்துக்குப் ‘பகல்’ என
      பேரிட்டார்.
      இருளுக்கோ ‘இரா’ என
      பேரிட்டார்.
      இப்படியே
      சாயங்காலமானதினாலும்
      விடியங்காலமானதினாலும்
      முதலாம் நாளுண்டாச்சுது.
    </p>
  </div>
)}
</div>
);
}
export default App;