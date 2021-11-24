const time = document.querySelector('.time')
const dt = luxon.DateTime.now();
time.textContent= dt.toLocaleString(luxon.DateTime.DATETIME_MED_WITH_SECONDS)

