// Select all accordion headers
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach((header) => {
  header.addEventListener("click", () => {
    // Close nd open accordion in same column
    const currentlyActive = header.parentElement.parentElement.querySelector(
      ".accordion-header.active"
    );
    if (currentlyActive && currentlyActive !== header) {
      currentlyActive.classList.remove("active");
      const content = currentlyActive.nextElementSibling;
      content.style.maxHeight = null;
      content.classList.remove("open");
    }

    // Togle click accordion
    header.classList.toggle("active");
    const accordionContent = header.nextElementSibling;

    if (header.classList.contains("active")) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
      accordionContent.classList.add("open");
    } else {
      accordionContent.style.maxHeight = null;
      accordionContent.classList.remove("open");
    }
  });
});

// images slider

let slider = document.getElementById("slider");
let dotsBox = document.getElementById("dots");

let slides = document.querySelectorAll(".slide").length;
let visible = 3;
let totalSlides = slides - visible + 1;

let index = 0;

// Create dots
for (let i = 0; i < totalSlides; i++) {
  let dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dotsBox.appendChild(dot);

  dot.addEventListener("click", () => moveTo(i));
}

function moveTo(i) {
  index = i;
  slider.style.transform = `translateX(-${i * 33.33}%)`;

  document.querySelectorAll(".dots span").forEach((d, n) => {
    d.classList.toggle("active", n === i);
  });
}

//  slide every 3 sec
setInterval(() => {
  index++;
  if (index >= totalSlides) index = 0;
  moveTo(index);
}, 3000);
