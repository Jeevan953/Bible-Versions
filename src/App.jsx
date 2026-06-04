  // src/App.jsx
import "./App.css";
import { useState } from "react";

function App() {
  const bibleVersions = [
    "The Yes Word",
    "Knox Translation",
    "Lamsa's Bible",
    "KJV",
    "NKJV",
    "ESV",
    "NLT",
    "NASB",
    "RSV",
    "NRSV",
    "MSG",
    "YLT",
    "Darby",
    "WEB",
    "Douay-Rheims",
    "Geneva Bible",
    "Wycliffe Bible",
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
  { name: "Hosea-Malachi", file: "Hosea-Malachi.pdf" },
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

  return (
    <div className="app">
     <h1 className="title">Bible Versions</h1>
<h1 className={getWordClass("Bible Versions")}>
  </h1>
      <h2 className="pdf-title">
  📚 PDF Bibles
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
    Genesis--R.Crumb.pdf
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
    className="bible-btn pdf-btn>Holy Bible by  Denvir</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/Holy Bible by  Denvir.pdf`, "_blank")}
  >
    Holy Bible by  Denvir
  </button>

<button
    className="bible-btn pdf-btn>The Jewish Bible</button>"
    onClick={() => window.open(`${import.meta.env.BASE_URL}pdfs/The Jewish Bible.pdf`, "_blank")}
  >
    The Jewish Bible
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