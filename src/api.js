

// Getting date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Date vars
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Key things
const api_key  = "220021b6f3ac463e81856a5c44fb0531";
const popular_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;


// Base URL
const base_url = `https://api.rawg.io/api/`;

// Popular games
 export const popularGamesURL = () => `${base_url}${popular_games}`;
 export const upcomingGamesURL = ()=> `${base_url}${upcoming_games}`;
 export const newGamesURL = ()=>`${base_url}${newGames}`;

//Game Detaisl
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}.json?&key=${api_key}`
//Game ScreenShots
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?&.json?&key=${api_key}`

 //search
 export const searchGameURL = (game_name)=>
 `${base_url}games?key=${api_key}&search=${game_name}&page_size=20`

