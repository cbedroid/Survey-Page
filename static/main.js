var test;
document.addEventListener("DOMContentLoaded", function () {
  let click = "click touchstart";
  const populateLocationForm = () => {
    const states = [
      "Alabama",
      "Alaska",
      "Arizona",
      "Arkansas",
      "California",
      "Colorado",
      "Connecticut",
      "Delaware",
      "Florida",
      "Georgia",
      "Hawaii",
      "Idaho",
      "Illinois",
      "Indiana",
      "Iowa",
      "Kansas",
      "Kentucky",
      "Louisiana",
      "Maine",
      "Maryland",
      "Massachusetts",
      "Michigan",
      "Minnesota",
      "Mississippi",
      "Missouri",
      "Montana",
      "Nebraska",
      "Nevada",
      "New Hampshire",
      "New Jersey",
      "New Mexico",
      "New York",
      "North Carolina",
      "North Dakota",
      "Ohio",
      "Oklahoma",
      "Oregon",
      "Pennsylvania",
      "Rhode Island",
      "South Carolina",
      "South Dakota",
      "Tennessee",
      "Texas",
      "Utah",
      "Vermont",
      "Virginia",
      "Washington",
      "West Virginia",
      "Wisconsin",
      "Wyoming",
    ];
    const form_location = document.getElementById("location");
    test = states;
    states.forEach(function (state) {
      const option = document.createElement("option");
      option.value = state.toLowerCase();
      option.innerText = state;
      form_location.append(option);
    });
  };

  const employment = document.getElementById("employment");
  const employment_radio_yes = document.querySelector('[name="employment"]');

  // Hide and unhide secondary employment form
  // according to employment selected radio button
  employment.addEventListener("change", function () {
    const secondary_employment_form = document.querySelectorAll(".h-form");

    if (employment_radio_yes.checked) {
      secondary_employment_form.forEach((form) =>
        form.classList.remove("d-none")
      );
    } else {
      secondary_employment_form.forEach((form) => form.classList.add("d-none"));
    }
  });

  populateLocationForm();

  /* Render Thank You modal after form */
  const thankyou_modal = $("#thankyou_modal");
  const thankyou_modal_close_btn = $("#thankyou_modal .btn-close");

  $(thankyou_modal_close_btn).on(click, function () {
    $(thankyou_modal).modal("hide");
  });
  $("#survey-form").on("submit", function (e) {
    e.preventDefault();
    $(thankyou_modal).modal("show");
    setTimeout(function () {}, 1000);
  });
}); // READY;
