export function contact() {
    const contentDiv = document.querySelector("#content");

    // Clear existing content
    contentDiv.innerHTML = "";

    // Heading
    const heading = document.createElement("h1");
    heading.textContent = "Contact Us";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    // Image
    const contactImg = document.createElement("img");
    contactImg.src = "../src/assets/restaurant.jpg";
    contactImg.alt = "Odin Restaurant Front View";
    contactImg.classList.add("contact-img");
    contentDiv.appendChild(contactImg);

    // Description paragraph
    const description = document.createElement("p");
    description.classList.add("contact-description");
    description.textContent = "Have questions or want to make a reservation? Reach out to us — we’d love to hear from you!";
    contentDiv.appendChild(description);

    // Contact Details
    const contactDetails = document.createElement("div");
    contactDetails.classList.add("contact-details");

    contactDetails.innerHTML = `
        <p><strong>📍 Address:</strong> 123 Bifrost Avenue, Asgard City, North Realm</p>
        <p><strong>📞 Phone:</strong> +123-456-7890</p>
        <p><strong>📧 Email:</strong> contact@odinrestaurant.com</p>
    `;
    contentDiv.appendChild(contactDetails);

    // Business Hours
    const hours = document.createElement("div");
    hours.classList.add("business-hours");

    const hoursHeading = document.createElement("h2");
    hoursHeading.textContent = "Business Hours";
    hours.appendChild(hoursHeading);

    const hoursList = document.createElement("ul");
    hoursList.innerHTML = `
        <li>Monday - Friday: 11:00 AM – 10:00 PM</li>
        <li>Saturday: 12:00 PM – 11:00 PM</li>
        <li>Sunday: Closed</li>
    `;
    hours.appendChild(hoursList);
    contentDiv.appendChild(hours);
}
