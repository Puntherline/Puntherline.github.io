const navbarContainer = document.getElementById("navbarContainer"); const navbarToggleButton = document.getElementById("navbarToggle"); const copyLinkButtons = document.querySelectorAll(".copyLink"); const ddButtons = document.querySelectorAll(".ddButton"); const ddContentLinks = document.querySelectorAll(".ddContent a"); function toggleNavbar() { navbarContainer.classList.toggle("hidden"); } function copyLink(event) { const targetId = event.target.parentElement.id; document.location.hash = targetId; navigator.clipboard.writeText(document.location.href); setTimeout(function() { }, 5000); } function toggleDropdown(event) { const ddElement = event.target.parentElement.querySelector(".ddContent"); ddElement.classList.toggle("ddHidden"); event.target.classList.toggle("active"); } function toggleLinkActive(event) { const currentlyActive = document.querySelectorAll(".ddContent a.active"); for (i = 0; i < currentlyActive.length; i++) currentlyActive[i].classList.remove("active"); event.target.classList.add("active"); } navbarToggleButton.addEventListener("click", toggleNavbar); for (i = 0; i < copyLinkButtons.length; i++) copyLinkButtons[i].addEventListener("click", copyLink); for (i = 0; i < ddButtons.length; i++) ddButtons[i].addEventListener("click", toggleDropdown); for (i = 0; i < ddContentLinks.length; i++) ddContentLinks[i].addEventListener("click", toggleLinkActive);
