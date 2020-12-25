document.addEventListener("DOMContentLoaded", function () {
  const employment = document.getElementById("employment");
  const employment_radio_yes = document.querySelector('[name="employment"]');

  // Hide and unhide secondary employment form
  // according to employment selected radio button
  employment.addEventListener("change", function () {
    const secondary_employment_form = document.getElementById("first-job");

    if (employment_radio_yes.checked) {
      secondary_employment_form.classList.remove("d-none");
    } else {
      secondary_employment_form.classList.add("d-none");
    }
  });
});
