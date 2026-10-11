const contactForm = document.getElementById("contact-form");
const contactResult = document.getElementById("contact-result");
const contactButton = document.getElementById("contact-submit");

contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Let HTML validation run before sending
    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    contactButton.disabled = true;
    contactButton.textContent = "Sending...";
    contactResult.textContent = "Sending your message...";

    try {
        const formData = new FormData(contactForm);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const result = await response.json();

        if (!response.ok || !result.success) {
            throw new Error(result.message || "Unable to send your message.");
        }

        contactResult.textContent = "Message sent successfully!";
        contactResult.style.color = "green";
        contactForm.reset();
    } catch (error) {
        contactResult.textContent =
            "Sorry, your message could not be sent. Please try again.";
        contactResult.style.color = "red";
        console.error("Contact form error:", error);
    } finally {
        contactButton.disabled = false;
        contactButton.textContent = "Send Message";

        // Keep the feedback visible for about one second
        setTimeout(() => {
            contactResult.textContent = "";
        }, 1000);
    }
});