const urlParams = new URLSearchParams(window.location.search);
const serviceParam = urlParams.get("service");

if (serviceParam && document.getElementById("service")) {
  document.getElementById("service").value = serviceParam;
}

document.getElementById("bookingForm")?.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  const summary = `
    <strong>Name:</strong> ${name}<br/>
    <strong>Phone:</strong> ${phone}<br/>
    <strong>Address:</strong> ${address}<br/>
    <strong>Service:</strong> ${service}<br/>
    <strong>Date:</strong> ${date}<br/>
    <strong>Time:</strong> ${time}
  `;

  document.getElementById("summary").innerHTML = summary;
  document.getElementById("confirmation").classList.remove("hidden");

  setTimeout(() => {
    document.getElementById("bookingForm").reset();

    const serviceInput = document.getElementById("service");
    if (serviceParam && serviceInput) {
      serviceInput.value = serviceParam;
    }

    document.getElementById("confirmation").classList.add("hidden");
  }, 10000);
});
