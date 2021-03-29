const btn = document.querySelector(".video-buton");
const video = document.querySelector(".video");

btn.addEventListener("click", function(){
    if (!btn.classList.contains("slide")) {
        btn.classList.add("slide");
        video.pause();
      } else {
        btn.classList.remove("slide");
        video.play();
      }
});

