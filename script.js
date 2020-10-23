/* elements */
const button = document.querySelector(".switch-circle");
const month = document.querySelector(".month");
const year = document.querySelector(".year");

/* variables */
const color2 = "hsl(237, 63%, 64%)";
const darkGray = "#7e7e7e";

/* events */
button.addEventListener("click", () => {
	if (button.style.left !== "") {
		button.style.left = "";
		year.style.color = color2;
		month.style.color = darkGray;
	} else {
		button.style.left = "20px";
		month.style.color = color2;
		year.style.color = darkGray;
	}
});
