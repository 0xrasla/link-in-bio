import "./style.css";
import "./utils/utils.js";
import { mobileCheck } from "./utils/utils.js";

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
  document.onreadystatechange = function () {
    if (document.readyState !== "complete") {
      document.querySelector("body").style.visibility = "hidden";
      document.querySelector("#loader").style.visibility = "visible";
    } else {
      document.querySelector("#loader").style.display = "none";
      document.querySelector("body").style.visibility = "visible";
    }
  };

  createLinks(links);
  if (mobileCheck()) {
    changeIconColors();
  }

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
