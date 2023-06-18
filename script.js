console.log("hello");

document.querySelector(".cross").style.display = "none";
document.querySelector(".hamburger").addEventListener =
  ("click",
  () => {
    document.querySelector(".sidebar").classList.toggle("sidebarGo");
    if (document.querySelector(".sidebar").classList.contains("sidebarGo")) {
      document.querySelector(".ham").style.display = "inline";
      document.querySelector(".cross").style.display = "none";
    } else {
      document.querySelector(".ham").style.display = "none";
      document.querySelector(".cross").style.display = "inline";
    }
  });

// JavaScript for responsive behavior
window.addEventListener("resize", function () {
  if (window.innerWidth < 768) {
    document.querySelector(".intro").style.padding = "50px";
  } else {
    document.querySelector(".intro").style.padding = "100px";
  }
});
