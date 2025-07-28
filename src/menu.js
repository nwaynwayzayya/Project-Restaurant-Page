export function menu() {
    const contentDiv = document.querySelector("#content");

    // Clear existing content
    contentDiv.innerHTML = "";

    // Heading
    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    // Dummy menu items with image src
    const menuItems = [
        {
            name: "Valhalla Feast Platter",
            description: "A generous sampling of roasted meats, root vegetables, and house-baked bread served with herbed butter.",
            price: "$35",
            image: "../src/assets/valhalla-feast.jpg"
        },
        {
            name: "Mjölnir Ribeye",
            description: "Grilled ribeye steak marinated in dark ale and Nordic herbs, served with juniper sauce.",
            price: "$42",
            image: "../src/assets/mjolnir-ribeye.jpg"
        },
        {
            name: "Freyja’s Garden Salad",
            description: "Fresh greens, berries, goat cheese, and candied walnuts with a lingonberry vinaigrette.",
            price: "$16",
            image: "../src/assets/freyja-salad.jpg"
        },
        {
            name: "Loki's Fire Wings",
            description: "Crispy chicken wings tossed in our house-made spicy mead glaze. Served with cooling yogurt dip.",
            price: "$18",
            image: "../src/assets/loki-wings.jpg"
        },
        {
            name: "Asgard Apple Tart",
            description: "Warm spiced apple tart served with vanilla skyr cream and honey drizzle.",
            price: "$12",
            image: "../src/assets/asgard-apple-tart.jpg"
        }
    ];

    // Create and append each menu item
    menuItems.forEach(item => {
        const itemContainer = document.createElement("div");
        itemContainer.classList.add("menu-item");

        const itemImage = document.createElement("img");
        itemImage.src = item.image;
        itemImage.alt = item.name;
        itemImage.classList.add("menu-img");

        const itemName = document.createElement("h2");
        itemName.textContent = item.name;

        const itemDescription = document.createElement("p");
        itemDescription.textContent = item.description;

        const itemPrice = document.createElement("p");
        itemPrice.classList.add("menu-price");
        itemPrice.textContent = item.price;

        itemContainer.appendChild(itemImage);
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(itemPrice);

        contentDiv.appendChild(itemContainer);
    });
}


