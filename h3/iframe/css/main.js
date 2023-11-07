function toggle(elementId, iconId) {
  var element = document.getElementById(elementId);
  var iconElement = document.getElementById(iconId)
  if (iconElement.style.display === "none") {
    element.style.display = "none";
    iconElement.style.display = "block";

  } else {
    element.style.display = "block";
    iconElement.style.display="none";
  }
}
