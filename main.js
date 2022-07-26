import "./style.css";
import { videoData } from "./utils/utils.js";

let color = "ffffff";

let links = [
  {
    name: "Official Website",
    url: "https://rasso.netlify.app/",
    icon: `https://img.icons8.com/small/16/${color}/home.png`,
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/channel/UCXFJeeYdEikfwazkrTurmgg",
    icon: `https://img.icons8.com/small/16/${color}/youtube--v1.png`,
  },
  {
    name: `Twitter`,
    url: `https://twitter.com/julian_santos`,
    icon: `https://img.icons8.com/small/16/${color}/twitter.png`,
  },
  {
    name: `Github`,
    url: `https://github.com/0xrasla`,
    icon: `https://img.icons8.com/small/16/${color}/github.png`,
  },
  {
    name: `Instagram`,
    url: `https://www.instagram.com/rassouniqz/`,
    icon: `https://img.icons8.com/small/16/${color}/instagram-new.png`,
  },
];

// create list of links
(() => {
  const video = document.getElementById("vid");
  video.src = videoData;
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.playbackRate = 1;
  video.controls = false;
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");

  createLinks(links);
  particlesJS("particles-js", {
    particles: {
      number: { value: 400, density: { enable: true, value_area: 3000 } },
      color: { value: "#fc0000" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 3 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
      },
      size: {
        value: 3,
        random: true,
        anim: { enable: true, speed: 5, size_min: 0, sync: false },
      },
      line_linked: {
        enable: false,
        distance: 500,
        color: "#ffffff",
        opacity: 0.4,
        width: 2,
      },
      move: {
        enable: true,
        speed: 7.8914764163227265,
        direction: "top",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: { enable: false, rotateX: 600, rotateY: 1200 },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "bubble" },
        onclick: { enable: false, mode: "repulse" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 0.5 } },
        bubble: { distance: 400, size: 4, duration: 0.3, opacity: 1, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: true,
  });
  var count_particles, stats, update;
  stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector(".js-count-particles");
  update = function () {
    stats.begin();
    stats.end();
    if (
      window.pJSDom[0].pJS.particles &&
      window.pJSDom[0].pJS.particles.array
    ) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
})();

function createLinks(links) {
  const el = document.querySelector(".app > section > .links");
  el.innerHTML = "";
  links.forEach((link) => {
    const d = document.createElement("div");
    const a = document.createElement("a");
    const i = document.createElement("img");

    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.innerText = link.name;

    i.src = link.icon;
    i.alt = link.name;
    i.width = 26;
    i.height = 26;

    d.appendChild(i);
    d.appendChild(a);

    d.classList.add("link");

    el.appendChild(d);
  });
}
