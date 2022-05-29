const nonSmokingInfo = document.getElementById("non-smoking_info");
const healthInfo = document.getElementById("health-info");
const nonSmokingModalWrap = document.getElementById("non-smoking_modal_wrap");
const healthModalWrap = document.getElementById("health-modal_wrap");
const nonSmokingModalClose = document.getElementById("non-smoking_modal-close");
const healthModalClose = document.getElementById("health-modal-close");

nonSmokingInfo.addEventListener("click", function () {
  nonSmokingModalWrap.style.display = "block";
});
nonSmokingModalClose.addEventListener("click", function () {
  nonSmokingModalWrap.style.display = "none";
});

healthInfo.addEventListener("click", function () {
  healthModalWrap.style.display = "block";
});
healthModalClose.addEventListener("click", function () {
  healthModalWrap.style.display = "none";
});
