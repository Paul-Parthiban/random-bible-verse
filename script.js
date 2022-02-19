function getVerse() {
    fetch('https://labs.bible.org/api/?passage=random&type=json')
      .then(verseRes => {
        return verseRes.json();
      }).then(displayResults);
  }
  
  function displayResults (verseRes) {
    let versep = document.querySelector('.text-info')
    versep.innerText = verseRes[0].bookname + ' ' + verseRes[0].chapter + ':' + verseRes[0].verse + ' ' + verseRes[0].text
  }
