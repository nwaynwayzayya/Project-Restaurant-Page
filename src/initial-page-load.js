export function initialPageLoad() {
    const contentDiv = document.querySelector("#content");

    // Clear existing content
    contentDiv.innerHTML = "";

    // Create a wrapper for layout
    const landingContainer = document.createElement("div");
    landingContainer.classList.add("landing-container");

    // Heading
    const heading = document.createElement("h1");
    heading.textContent = "Welcome To Odin Restaurant";
    heading.classList.add("landing-title");

    // Top Image
    const topImage = document.createElement("img");
    topImage.classList.add("top-image");
    topImage.src = "../src/assets/restaurant.jpg";
    topImage.alt = "Elegant restaurant interior";

    // Text Content
    const textSection = document.createElement("div");
    textSection.classList.add("landing-text");

    const paragraphs = [
        "At Odin Restaurant, we blend tradition and innovation to bring you a dining experience like no other. Our chefs craft each dish with passion and precision.",
        "Step into a cozy yet sophisticated atmosphere, where every detail is designed to make your visit unforgettable—from the soft lighting to the curated playlist.",
        "Whether you're joining us for a romantic evening, a family celebration, or a business lunch, Odin Restaurant offers the perfect setting and an exceptional menu."
    ];

    paragraphs.forEach(text => {
        const p = document.createElement("p");
        p.classList.add("landing-page-copy");
        p.textContent = text;
        textSection.appendChild(p);
    });

    // Append all to the container
    landingContainer.appendChild(heading);
    landingContainer.appendChild(topImage);
    landingContainer.appendChild(textSection);

    // Append to #content
    contentDiv.appendChild(landingContainer);
}
