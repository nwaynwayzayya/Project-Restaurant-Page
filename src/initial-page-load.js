export function initialPageLoad() {
    const contentDiv = document.querySelector("#content");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome To Odin Restaurant!";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const topImage = document.createElement("img");
    topImage.classList.add("top-image");
    topImage.src = "../src/assets/restaurant.jpg";
    topImage.alt = "Image of Restaurant";
    contentDiv.appendChild(topImage);

    const para1 = document.createElement("p");
    para1.classList.add("landing-page-copy");
    para1.textContent = "At Odin Restaurant, we blend tradition and innovation to bring you a dining experience like no other. Our chefs craft each dish with passion and precision.";
    contentDiv.appendChild(para1);

    const para2 = document.createElement("p");
    para2.classList.add("landing-page-copy");
    para2.textContent = "Step into a cozy yet sophisticated atmosphere, where every detail is designed to make your visit unforgettable—from the soft lighting to the curated playlist.";
    contentDiv.appendChild(para2);

    const para3 = document.createElement("p");
    para3.classList.add("landing-page-copy");
    para3.textContent = "Whether you're joining us for a romantic evening, a family celebration, or a business lunch, Odin Restaurant offers the perfect setting and an exceptional menu.";
    contentDiv.appendChild(para3);

}