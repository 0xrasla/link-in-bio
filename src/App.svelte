<script>
  import "./app.css";
  import bgVideo from "./assets/bg.mp4";

  let muted = false;

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

  function toggleMuted() {
    muted = !muted;
  }
</script>

<main>
  <!-- BG -->
  <div class="absolute w-full h-full top-0 left-0 -z-10">
    <video autoplay loop bind:muted class="w-full h-full object-cover">
      <source src={bgVideo} type="video/mp4" />
      <!-- https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4 -->
      <track
        kind="captions"
        src="https://storage.googleapis.com/coverr-main/vtt/Mt_Baker.vtt"
      />
    </video>
  </div>
  <div class="flex flex-col justify-center items-center mt-12">
    <div class="head flex flex-col items-center">
      <img
        class="object-cover rounded-full"
        width="170px"
        src="https://avatars.githubusercontent.com/u/76244740?v=4"
        alt="Rasla"
      />
      <div class="bg-gray-900 text-yellow-200 p-1 rounded-lg mt-3 w-16">
        @Rasla
      </div>
    </div>
    <div class="links flex flex-col gap-5 mt-5 w-72 h-3">
      {#each links as link}
        <div class="card md:hover:bg-black text-white transition-all">
          <img src={link.icon} alt="icon" width="30px" class="" />
          <h2>{link.name}</h2>
          <a href={link.url}>
            <i class="fa fa-{link.icon}" />
          </a>
        </div>
      {/each}
    </div>
    <div
      class="mute-btn fixed cursor-pointer bg-black rounded-full opacity-50 p-2"
    >
      <img
        on:click={() => (muted = !muted)}
        alt="Mute"
        src={!muted
          ? "https://img.icons8.com/ios/30/ffffff/mute--v2.png"
          : "https://img.icons8.com/ios/30/ffffff/mute--v1.png"}
      />
    </div>
  </div>
</main>

<style>
  .mute-btn {
    right: 20px;
    top: 20px;
    z-index: 1;
  }
</style>
