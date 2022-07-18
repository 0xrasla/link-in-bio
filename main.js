import "./style.css";
import "./utils/utils.js";
import { mobileCheck } from "./utils/utils.js";

let links = [
  {
    name: "Official Website",
    url: "https://rasso.netlify.app/",
    icon: "https://img.icons8.com/small/16/000000/home.png",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/channel/UCXFJeeYdEikfwazkrTurmgg",
    icon: "https://img.icons8.com/small/16/000000/youtube--v1.png",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/julian_santos",
    icon: "https://img.icons8.com/small/16/000000/twitter.png",
  },
  {
    name: "Github",
    url: "https://github.com/0xrasla",
    icon: "https://img.icons8.com/small/16/000000/github.png",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/rassouniqz/",
    icon: "https://img.icons8.com/small/16/000000/instagram-new.png",
  },
];

// create list of links
(() => {
  createLinks(links);
  if (mobileCheck()) {
    changeIconColors();
  }

  window.addEventListener("resize", () => {
    // if (mobileCheck()) {
    //   changeIconColors();
    // }
  });

  // make video mute
  const video = document.querySelector("video");
  const mute = document.querySelector(".app .mute-btn");
  const muteBtn = document.querySelector(".app .mute-btn img");

  muteBtn.src = "https://img.icons8.com/ios/30/ffffff/mute--v1.png";

  video.volume = 0.4;
  mute.addEventListener("click", () => {
    video.muted = !video.muted;
    if (video.muted) {
      muteBtn.src = "https://img.icons8.com/ios/30/ffffff/mute--v2.png";
    } else {
      muteBtn.src = "https://img.icons8.com/ios/30/ffffff/mute--v1.png";
    }
  });
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

function changeIconColors() {
  const icons = document.querySelectorAll(".link img");
  Array.from(icons).forEach((icon) => {
    if (icon.src.includes("000000")) {
      icon.src = icon.src.replace("000000", "ffffff");
    } else {
      icon.src = icon.src.replace("ffffff", "000000");
    }
  });
  console.log(icons);
}
