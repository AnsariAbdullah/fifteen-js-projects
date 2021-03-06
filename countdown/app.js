const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
const weekdays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4')

// let futureDate = new Date(2002, 1, 6, 11, 30, 0)			// commenting out a hardcoded date

// adding temp date
let tempYear = new Date().getFullYear();
let tempMonth = new Date().getMonth();
let tempDay = new Date().getDate();

// add new future date
const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 11, 30, 0)

console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const month = months[futureDate.getMonth()]
const day = weekdays[futureDate.getDay()]
const date = futureDate.getDate();
giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}:${minutes}am`

// future time in ms 
const futureTime = futureDate.getTime()
console.log(futureTime)

function getRemainingTime() {
	const today = new Date().getTime();
	const t = futureTime - today;
	// console.log('Todays time ===> ', today, 'difference ==> ', t)
	// console.log(new Date(t))

	// 1s = 1000ms
	// 1min = 60s
	// 1hr = 60min
	// 1d = 24hr

	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;

	// calculate all values
	let days = Math.floor(t / oneDay);
	let hours = Math.floor((t % oneDay) / oneHour);
	let minutes = Math.floor((t % oneHour) / oneMinute);
	let seconds = Math.floor((t % oneMinute) / 1000);
	console.log('days => ', days, 'hours => ', hours, 'minutes => ', minutes, 'seconds => ', seconds)

	// set calues array
	const values = [days, hours, minutes, seconds];

	function format(item) {
		if (item < 10) {
			return item = `0${item}`
		}
		return item
	}

	items.forEach(function (item, index) {
		item.innerHTML = format(values[index])
	})

	if (t < 0) {
		clearInterval(countdown);
		deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
	}
}

// countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();
