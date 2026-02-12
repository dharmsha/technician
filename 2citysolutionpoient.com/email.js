// EmailJS initialize
(function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // 🔴 yahan EmailJS Public Key daalo
})();

function sendMail(e) {
  e.preventDefault(); // form reload stop

  // Form data get karo (PHP jaise)
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let number = document.getElementById("number").value.trim();
  let message = document.getElementById("message").value.trim();

  // Validation (PHP jaisa)
  if (!name || !email || !subject || !number || !message) {
    alert("❌ Please complete the form and try again.");
    return;
  }

  // Email validation
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("❌ Please enter a valid email address.");
    return;
  }

  // EmailJS params (template me jayega)
  let params = {
    name: name,
    email: email,
    subject: subject,
    number: number,
    message: message,
  };

  // Email send (PHP mail() ka replacement)
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
    .then(function (response) {
      alert("✅ Thank You! Your message has been sent.");
      document.getElementById("contactForm").reset(); // form reset
    })
    .catch(function (error) {
      alert("❌ Oops! Something went wrong. Message not sent.");
      console.log("EmailJS Error:", error);
    });
}
