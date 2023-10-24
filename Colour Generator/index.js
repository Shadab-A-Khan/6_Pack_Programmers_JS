const zodiac = document.getElementById("zodiac");
const body = document.body;

const changeBackGroundColor = () => {
  switch (zodiac.value) {
    case "Aries":
      body.style.backgroundColor = "#ff0000";
      break;
    case "Taurus":
      body.style.backgroundColor = "#008000";
      break;
    case "Gemini":
      body.style.backgroundColor = "#FFFF00";
      break;
    case "Cancer":
      body.style.backgroundColor = "#100c3e";
      break;
    case "Leo":
      body.style.backgroundColor = "#FFD700";
      break;
    case "Virgo":
      body.style.backgroundColor = "#964B00";
      break;
    case "Libra":
      body.style.backgroundColor = "#FFC0CB";
      break;
    case "Scorpio":
      body.style.backgroundColor = "#000000";
      break;
    case "Sagittarius":
      body.style.backgroundColor = "#800080";
      break;
    case "Capricorn":
      body.style.backgroundColor = "#964B00";
      break;
    case "Aquarius":
      body.style.backgroundColor = "#0000FF";
      break;
    case "Pisces":
      body.style.backgroundColor = "#90EE90";
      break;
    default:
      break;
  }
};
