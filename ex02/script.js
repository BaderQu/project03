const title = document.getElementById("title");
const description = document.querySelector(".description");
const status = document.querySelector("#status");

title.textContent = "The DOM was updated by JavaScript";
description.textContent = "This paragraph was selected with querySelector.";
status.textContent = "Status: active";

title.style.color = "darkblue";
title.style.textDecoration = "underline";
description.style.fontStyle = "italic";

status.classList.add("active");
