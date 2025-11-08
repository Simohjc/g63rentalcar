

function sendToEmail(event) {
    event.preventDefault();
  
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const pickup = document.getElementById("pickup").value;
    const dropoff = document.getElementById("dropoff").value;
    const pickupdate = document.getElementById("pickupdate").value;
    const dropoffdate = document.getElementById("dropoffdate").value;
    const pickuptime = document.getElementById("pickuptime").value;
  
    const templateParams = {
      fullname,
      email,
      pickup,
      dropoff,
      pickupdate,
      dropoffdate,
      pickuptime,
    };
  
    emailjs
      .send("service_2ov5rzm", "template_tkna205", templateParams)
      .then(
        function(response) {
          alert("✅ Réservation envoyée avec succès !");
          document.querySelector("form").reset();
        },
        function(error) {
          alert("❌ Erreur lors de l'envoi, veuillez réessayer.");
          console.error(error);
        }
      );
  }
 