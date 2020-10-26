/* elements */
const button = document.querySelector(".switch-circle");
const switchArea = document.querySelector(".switch");
const month = document.querySelector(".month");
const year = document.querySelector(".year");
const prices = document.querySelectorAll(".price");

/* variables */
const color2 = "hsl(237, 63%, 64%)";
const darkGray = "#7e7e7e";
let isAnnually = true;

/* events */
switchArea.addEventListener("click", () => {
	if (!isAnnually) {
		// change to annually
		button.style.left = "";
		year.style.color = color2;
		month.style.color = darkGray;
		changeValues(199.99, 249.99, 399.99);
		isAnnually = true;
	} else {
		// change to monthly
		button.style.left = "20px";
		year.style.color = darkGray;
		month.style.color = color2;
		changeValues(19.99, 24.99, 39.99);
		isAnnually = false;
	}
});

/* functions */
// change values of prices
const changeValues = (priceBasic, priceProfessional, priceMaster) => {
	prices.forEach((price, i) => {
		price.style.opacity = "0%";
		window.setTimeout(() => {
			switch (i) {
				case 0:
					price.innerHTML = `<span class="dollar">&dollar;</span>${priceBasic}`;
					break;
				case 1:
					price.innerHTML = `<span class="dollar">&dollar;</span>${priceProfessional}`;
					break;
				case 2:
					price.innerHTML = `<span class="dollar">&dollar;</span>${priceMaster}`;
					break;
				default:
					break;
			}
			price.style.opacity = "100%";
		}, 650);
	});
};
