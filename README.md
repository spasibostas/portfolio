
# Momentum app

Momentum is an analog of the Chrome Web Store app of the same name.

![App Screenshot](https://github.com/spasibostas/projects/blob/momentum_app/momentum-app/assets/img/screenshot-1.png?raw=true)


- [Clock and calendar](https://github.com/spasibostas/projects/blob/5c81a4af20b4c895c473448d24243b3a6b05b1bf/momentum-app/js/script.js#L25-L75)

Time is displayed in 24-hour format, day of the week, date, month are displayed, e.g: "Monday, April 10". If the day of the week, date, month are changed, these data are changed in the application.

- [Greeting](https://github.com/spasibostas/projects/blob/5c81a4af20b4c895c473448d24243b3a6b05b1bf/momentum-app/js/script.js#L76-L103)

The text of the greeting changes depending on the time of day (morning, afternoon, evening, night).
The user can enter his/her name.
When reloading the application page, the user's name is saved, its data is stored in local storage.

- [Image Slider](https://github.com/spasibostas/projects/blob/5c81a4af20b4c895c473448d24243b3a6b05b1bf/momentum-app/js/script.js#L116-L138)

The link to the background image is generated taking into account the time of day and a random image number. Images can be flipped by clicking on the arrows on the sides of the screen.

- [Weather widget](https://github.com/spasibostas/projects/blob/5c81a4af20b4c895c473448d24243b3a6b05b1bf/momentum-app/js/script.js#L144-L186)

The default city is Minsk until the user enters a different city.
When reloading the application page, the city specified by the user is saved, its data is stored in local storage.
Weather data includes: weather icon, weather description, temperature in °C, wind speed in m/s, relative humidity in %.
Numerical weather parameters are rounded to whole numbers.


An error notification is displayed when entering invalid values for which the API does not return weather (empty string or meaningless character set)

![App Screenshot](https://github.com/spasibostas/projects/blob/momentum_app/momentum-app/assets/img/screenshot-2.png?raw=true)

![App Screenshot](https://github.com/spasibostas/projects/blob/momentum_app/momentum-app/assets/img/screenshot-3.png?raw=true)

- [Quote of the Day Widget](https://github.com/spasibostas/projects/blob/5c81a4af20b4c895c473448d24243b3a6b05b1bf/momentum-app/js/script.js#L188-L200)

When the application page loads, a random quote and its author are displayed. When the page reloads, the quote is updated. There is a button, when clicking on which the quote is updated.

- [Audio player](https://github.com/spasibostas/projects/blob/5c81a4af20b4c895c473448d24243b3a6b05b1bf/momentum-app/js/script.js#L204-L247)

When you click the Play button, the first track is played.
Clicking the Play button turns it into a Pause button.
When you click the Pause button, the track playback stops, the Pause button turns into the Play button, and the play icon is displayed on it. You can scroll through tracks using the next/previous buttons.