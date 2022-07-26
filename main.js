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
  // low speed of video

  video.controls = false;
  video.setAttribute("playsinline", "");
  video.setAttribute("webkit-playsinline", "");

  createLinks(links);
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
