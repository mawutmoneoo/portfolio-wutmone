/*menu show y hidden*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

/*MENU SHOW*/
/*validate if constant exists*/
if (navToggle) {
	navToggle.addEventListener("click", () => {
		// navMenu.classList.add("show-menu")
		console.log("clicked");
		event.preventDefault();
		navMenu.classList.add("show-menu");
	});
}
/*menu hidden*/
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}
/*remove menu mobile*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");
	navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

//accordion skills
const skillsContent = document.getElementsByClassName("skills__content"),
	skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
	let itemClass = this.parentNode.className;
	for (i = 0; i < skillsContent.length; i++) {
		skillsContent[i].className = "skills__content skills__close";
	}
	if (itemClass === "skills__content skills__close") {
		this.parentNode.className = "skills__content skills__open";
	}
}
skillsHeader.forEach((el) => {
	el.addEventListener("click", toggleSkills);
});
/*qualification tabs*/
const tabs = document.querySelectorAll("[data-target]"),
	tabContents = document.querySelectorAll("[data-content]");
tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		const target = document.querySelector(tab.dataset.target);

		tabContents.forEach((tabContent) => {
			tabContent.classList.remove("qualification__active");
		});
		target.classList.add("qualification__active");

		tabs.forEach((tab) => {
			tab.classList.remove("qualification__active");
		});
		tab.classList.add("qualification__active");
	});
});

/*portfolio*/
/*swiper portfolio*/
let swiper = new Swiper(".portfolio__container", {
	cssMode: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
	},
	mousewheel: true,
	keyboard: true,
});

/*scroll section*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
	const scrollY = window.pageYOffset;
	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		const sectionId = current.getAttribute("id");
		// console.log('sectionId',sectionId);
		// if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
		//     document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
		// } else{
		//     document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
		// }
	});
}
window.addEventListener("scroll", scrollActive);

/*scroll header*/
function scrollHeader() {
	const nav = document.getElementById("header");
	if (this.scrollY >= 80) nav.classList.add("scroll-header");
	else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*scroll up*/
function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");
	if (this.scrollY >= 80) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

//modal box
var html = document.documentElement;
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
	modal.style.display = "block";
	html.style.overflow = "hidden";
};
span.onclick = function () {
	modal.style.display = "none";
	html.style.overflow = "auto";
};
window.onclick = function (event) {
	if (event.target === modal) {
		modal.style.display = "none";
		html.style.overflow = "auto";
	}
};
function isValid() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
	if (username == "" || password == "") {
		alert("please fill username and password");
	}
	if (username == "wutmoneoo" && password == 1234) {
		downloadPDF("wutmoneoo-resume.pdf");
	} else {
		alert("wrong username or password");
	}
}

function downloadPDF(pdf) {
	// const linkSource = `data:application/pdf;base64,${pdf}`;
	const downloadLink = document.createElement("a");
	document.body.appendChild(downloadLink);
	downloadLink.target = "_self";
	const fileName = "pdf/wutmoneoo-resume.pdf";
	downloadLink.href = fileName;
	downloadLink.download = fileName;
	downloadLink.click();
}
