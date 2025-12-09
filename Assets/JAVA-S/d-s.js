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
