const surahList = document.getElementById("surah-list");
const surahInfo = document.getElementById("surah-info");
const languageList = document.getElementById("language");
const audioPlayer = document.getElementById("audio-player");

fetch("https://api.alquran.cloud/v1/surah")
  .then((response) => response.json())
  .then((data) => {
    const surahs = data.data;
    surahs.forEach((surah) => {
      const option = document.createElement("option");
      option.value = surah.number;
      option.text = `${surah.number}. ${surah.englishName} (${surah.englishNameTranslation})`;
      surahList.appendChild(option);
    });
  })
  .catch((error) => console.log(error));
