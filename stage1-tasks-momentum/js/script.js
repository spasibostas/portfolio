const time = document.querySelector('.time');
const dateOnPage = document.querySelector('.date'); 
const greeting = document.querySelector('.greeting');
const name = document.querySelector('.name');
const body = document.querySelector('body');
const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');
const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const city = document.querySelector('.city');
const weatherError = document.querySelector('.weather-error');
const changeQuoteButton =  document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const playButton = document.querySelector('.play');
const playPrevButton = document.querySelector('.play-prev');
const playNextButton = document.querySelector('.play-next');
const playListContainer = document.querySelector('.play-list');

import playList from './playList.js';

function showTime() {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 1000);
}
showTime();
    
function showDate() {
    const date = new Date();
    const weekdays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ];
    const weekday = date.getDay();
    const options = {month: 'long', day: 'numeric'}
    const currentDate = date.toLocaleDateString('en-US', options);
    dateOnPage.textContent = `${weekdays[weekday]}, ${currentDate}`;
}

function getHours() {
    const date = new Date();
    const hours = date.getHours();
    return hours;
}

function getTimeOfDay() {
    let hours = getHours();
    let timeOfDay = '';
    if (hours >= 0 && hours < 6) {
        timeOfDay = 'nigth';
    }
    if (hours >= 6 && hours < 12) {
        timeOfDay = 'morning';
    }
    if (hours >= 12 && hours < 18) {
        timeOfDay = 'afternoon';
    }
    if (hours >= 18 && hours < 24) {
        timeOfDay = 'evening';
    }
    return timeOfDay;
}

function showGreeting() {
    const greetingTranslation = {
        en: 'Good morning',
        ru: 'Доброе утро',
        bl: 'Добрай ранiцы',
    }
    const timeOfDay = getTimeOfDay();
    var greetingText = greetingTranslation.bl;
    // const greetingText = `Good ${timeOfDay}`;
    greeting.textContent = greetingText;
}


function setLocalStorage() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('city', city['value']);
  }

window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
    if (localStorage.getItem('name')) {
        name.value = localStorage.getItem('name');
    }
    if (localStorage.getItem('city')) {
        city['value'] = localStorage.getItem('city');
        getWeather();
    }
  }
window.addEventListener('load', getLocalStorage);


let randomNum;

function getRandomNum(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomNum(1, 20);


function setBg() {
    let timeOfDay = getTimeOfDay();
    let bgNum = String(randomNum).padStart(2,'0');
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${timeOfDay}/${bgNum}.jpg`;
    img.addEventListener('load', () => {      
        body.style.backgroundImage = `url('${img.src}')`;
    }) 
}
setBg();

function getSlideNext() {
    randomNum < 20 ? randomNum++ : randomNum = 1;
    setBg();
}

function getSlidePrev() {
    randomNum > 1 ? randomNum-- : randomNum = 20;
    setBg();
}

slideNext.addEventListener('click', getSlideNext);
slidePrev.addEventListener('click', getSlidePrev);


//Виджет погоды 


async function getWeather() {  
    const errorEmpty = "Error! Nothing to geocode for ''!";
    const errorNotEmpty = "Error! city not found for"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=cdc4cf23bbb336b1c5a0c7bdc9331065&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    try {
        weatherError.textContent = '';
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.floor(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `Wind speed: ${Math.floor(data.wind.speed)} m/s`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
    } catch (error) {
        if ( res.status === 400) {
            weatherError.textContent = errorEmpty;
            weatherIcon.className = 'weather-icon owf';
            temperature.textContent = '';
            weatherDescription.textContent = '';
            wind.textContent = '';
            humidity.textContent = '';
        }
        if ( res.status === 404) {
            weatherError.textContent = `${errorNotEmpty} '${city['value']}' !`;
            weatherIcon.className = 'weather-icon owf';
            temperature.textContent = '';
            weatherDescription.textContent = '';
            wind.textContent = '';
            humidity.textContent = '';
        }
    }
  }

function setCity(event) {
    if (event.code === 'Enter') {
        getWeather();
        city.blur();
    }
}

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);

async function getQuotes () {
    const quotes = 'json/data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    
    randomNum = Math.floor(Math.random() * 100);
    quote.textContent = data[randomNum].quote;
    author.textContent = data[randomNum].author;

}

document.addEventListener('DOMContentLoaded', getQuotes);
changeQuoteButton.addEventListener('click', getQuotes);

// Аудиоплеер

let isPlay = false;
let playNum = 0;
const audio = new Audio();

function playAudio() {
    if (!isPlay) {
        audio.src = playList[playNum].src;
        audio.title = playList[playNum].title;
        audio.currentTime = 0;
        audio.play();
        playButton.classList.add('pause');
        isPlay = true;
        stylePlayItems(playNum);
    } else {
        playButton.classList.remove('pause');
        audio.pause();
        isPlay = false;
    }
}

playButton.addEventListener('click', playAudio);

function playNext() {
    playNum >= 3 ? playNum = 0 : playNum++;
    isPlay = false;
    playAudio();
}

function playPrev() {
    playNum === 0 ? playNum = 3 : playNum-- ;
    isPlay= false;
    playAudio();
}
playNextButton.addEventListener('click', playNext);
playPrevButton.addEventListener('click', playPrev);



playList.forEach(item => {
    const li = document.createElement('li');
    li.classList.add('play-item');
    li.textContent = item.title;
    playListContainer.append(li);
});

function stylePlayItems() {
    const playItems = document.querySelectorAll('.play-item');
    const playItemsArray = Array.from(playItems);
}



