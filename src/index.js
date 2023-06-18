import "./style.css";

let darkmode = JSON.parse(localStorage.getItem("darkmode") || "false");

let links = [
  {
    name: "Official Website",
    url: "https://rasso.netlify.app/",
    icon: (color) => `https://img.icons8.com/small/24/${color}/home.png`,
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/channel/UC_-Sg3dW0yIathaX7-RtJMQ",
    icon: (color) => `https://img.icons8.com/small/24/${color}/youtube--v1.png`,
  },
  {
    name: `Twitter`,
    url: `https://twitter.com/`,
    icon: (color) => `https://img.icons8.com/small/24/${color}/twitter.png`,
  },
  {
    name: `Github`,
    url: `https://github.com/0xrasla`,
    icon: (color) => `https://img.icons8.com/small/24/${color}/github.png`,
  },
  {
    name: `Instagram`,
    url: `https://www.instagram.com/dev_rasla/`,
    icon: (color) =>
      `https://img.icons8.com/small/24/${color}/instagram-new.png`,
  },
];

function createLinks(links) {
  // add nav bar links
  createDarkToggle();

  const el = document.querySelector(".links");
  el.innerHTML = "";
  links.forEach((link) => {
    const d = document.createElement("div");
    const a = document.createElement("a");
    const i = document.createElement("img");

    d.addEventListener("click", () => {
      window.open(link.url, "_blank");
    });

    a.rel = "noopener noreferrer";
    a.innerText = link.name;

    i.src = link.icon(darkmode ? "ffffff" : "000000");
    i.alt = link.name;
    i.width = 26;
    i.height = 26;

    d.appendChild(i);
    d.appendChild(a);

    d.classList.add("link");

    el.appendChild(d);
  });
}

function createDarkToggle() {
  const icon = darkmode ? "moon" : "sun";
  const darkToggle = document.createElement("img");
  darkToggle.src = `https://img.icons8.com/small/20/${
    darkmode ? "ffffff" : "000000"
  }/${icon}.png`;
  darkToggle.alt = "dark mode";

  const nav = document.querySelector(".dark-toggle");

  nav.innerHTML = "";
  nav.addEventListener("click", swithDarkmode);
  nav.appendChild(darkToggle);
}

function swithDarkmode() {
  localStorage.setItem("darkmode", JSON.stringify(!darkmode));
  darkmode = JSON.parse(localStorage.getItem("darkmode") || "false");
  document.documentElement.classList.toggle("dark");
  createDarkToggle();
  fireParticles(darkmode ? "dark" : "light");
  createLinks(links);
}

function loadingBar() {
  const loadingBar = document.querySelector(".loading");

  window.addEventListener("load", () => {
    loadingBar.style.display = "none";
    document.body.classList.remove("overflow-hidden");
    document.body.style.overflowX = "hidden";
  });
}

function fireParticles(mode) {
  particlesJS.load(
    "particles-js",
    mode == "light" ? "light-particles.json" : "dark-particles.json",
    function () {
      console.log("callback - particles.js config loaded");
    }
  );
}

function init() {
  loadingBar();
  fireParticles(darkmode ? "dark" : "light");
  createLinks(links);

  // dark mode
  if (darkmode) {
    document.documentElement.classList.add("dark");
  }

  createDarkToggle();
}

init();
