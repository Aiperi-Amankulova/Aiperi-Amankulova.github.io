let links = document.querySelectorAll("nav a");

let  navigation = ["aboutMe", "skills", "contact"];
 

for (let i = 0; i < links.length; i++) {
  const element = links[i];

  element.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e);

    const blockID = element.getAttribute("href");

    console.log(blockID);

    if (element.getAttribute("href") === "#") {
      document.querySelector("body").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}