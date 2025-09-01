document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("customPopup");
  const closeBtn = document.getElementById("closePopup");

  // Show popup once per visit
  if (!sessionStorage.getItem("popupShown")) {
    popup.style.display = "flex";
    sessionStorage.setItem("popupShown", "true");
  }

  // Close button
  closeBtn.onclick = () => {
    popup.style.display = "none";
  };

  // Click outside to close
  window.onclick = (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  };
});
