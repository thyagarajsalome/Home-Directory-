// navbar navigation start
// Add this to your script.js file
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  // Update active link on scroll
  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").slice(1) === current) {
        link.classList.add("active");
      }
    });
  });
});
// navbar navigation end

const directoryData = [
  {
    title: "Lowe's",
    description:
      "Major home improvement retailer offering appliances, tools, hardware, and expert advice for DIY and professional projects.",
    image: "/api/placeholder/300/200",
    tags: ["renovation", "tools", "construction", "appliances"],
    link: "https://www.lowes.com",
    location: "Nationwide",
    rating: 4.5,
  },
  {
    title: "Home Depot",
    description:
      "America's largest home improvement retailer offering tools, construction products, and services.",
    image: "/api/placeholder/300/200",
    tags: ["renovation", "tools", "construction"],
    link: "https://www.homedepot.com",
    location: "Nationwide",
    rating: 4.5,
  },
  {
    title: "Sherwin-Williams",
    description:
      "Premium paints and coatings provider with color matching and consultation services.",
    image: "/api/placeholder/300/200",
    tags: ["paint", "supplies"],
    link: "https://www.sherwin-williams.com",
    location: "Nationwide",
    rating: 4.7,
  },
  {
    title: "Lumber Liquidators",
    description:
      "Specialized flooring retailer offering hardwood, laminate, vinyl, and bamboo flooring options.",
    image: "/api/placeholder/300/200",
    tags: ["flooring"],
    link: "https://www.lumberliquidators.com",
    location: "Nationwide",
    rating: 4.3,
  },
  {
    title: "Budget Blinds",
    description:
      "Custom window covering solutions including blinds, shades, shutters, and drapes.",
    image: "/api/placeholder/300/200",
    tags: ["blinds", "window-treatments"],
    link: "https://www.budgetblinds.com",
    location: "Nationwide",
    rating: 4.6,
  },
  {
    title: "Ashley Furniture",
    description:
      "Contemporary and traditional furniture for every room in your home.",
    image: "/api/placeholder/300/200",
    tags: ["furniture"],
    link: "https://www.ashleyfurniture.com",
    location: "Nationwide",
    rating: 4.2,
  },
  {
    title: "Floor & Decor",
    description:
      "Extensive selection of tile, wood, stone, and laminate flooring at warehouse prices.",
    image: "/api/placeholder/300/200",
    tags: ["flooring", "tile"],
    link: "https://www.flooranddecor.com",
    location: "Nationwide",
    rating: 4.4,
  },
  {
    title: "Wayfair",
    description:
      "Online destination for furniture, decor, and home goods with millions of products and competitive prices.",
    image: "/api/placeholder/300/200",
    tags: ["furniture", "decor", "lighting"],
    link: "https://www.wayfair.com",
    location: "Online",
    rating: 4.3,
  },
  {
    title: "Mohawk Flooring",
    description:
      "Premium manufacturer of carpet, hardwood, laminate, and luxury vinyl flooring solutions.",
    image: "/api/placeholder/300/200",
    tags: ["flooring", "carpet"],
    link: "https://www.mohawkflooring.com",
    location: "Nationwide",
    rating: 4.6,
  },
  {
    title: "Benjamin Moore",
    description:
      "High-quality paint manufacturer known for their innovative color technology and premium finishes.",
    image: "/api/placeholder/300/200",
    tags: ["paint", "supplies"],
    link: "https://www.benjaminmoore.com",
    location: "Nationwide",
    rating: 4.8,
  },
  {
    title: "Hunter Douglas",
    description:
      "Leading manufacturer of custom window treatments, including blinds, shades, and shutters.",
    image: "/api/placeholder/300/200",
    tags: ["blinds", "window-treatments"],
    link: "https://www.hunterdouglas.com",
    location: "Nationwide",
    rating: 4.7,
  },
  {
    title: "Restoration Hardware",
    description:
      "Luxury home furnishings retailer offering high-end furniture, lighting, textiles, and decor.",
    image: "/api/placeholder/300/200",
    tags: ["furniture", "lighting", "decor"],
    link: "https://www.rh.com",
    location: "Nationwide",
    rating: 4.5,
  },
  {
    title: "The Tile Shop",
    description:
      "Specialty retailer of premium natural stone and tiles for floors, walls, and outdoor spaces.",
    image: "/api/placeholder/300/200",
    tags: ["flooring", "tile", "renovation"],
    link: "https://www.tileshop.com",
    location: "Nationwide",
    rating: 4.4,
  },
  {
    title: "Crate & Barrel",
    description:
      "Modern and contemporary furniture, home decor, and kitchenware with a focus on quality design.",
    image: "/api/placeholder/300/200",
    tags: ["furniture", "decor"],
    link: "https://www.crateandbarrel.com",
    location: "Nationwide",
    rating: 4.6,
  },
];

function createCard(data) {
  return `
          <div class="card" data-tags="${data.tags.join(",")}">
              <img src="${data.image}" alt="${data.title}" class="card-image">
              <div class="card-content">
                  <h2 class="card-title">${data.title}</h2>
                  <div class="card-tags">
                      ${data.tags
                        .map((tag) => `<span class="tag">${tag}</span>`)
                        .join("")}
                  </div>
                  <p class="card-description">${data.description}</p>
                  <p style="margin-bottom: 1rem;">
                      <strong>Location:</strong> ${data.location}<br>
                      <strong>Rating:</strong> ${data.rating}/5
                  </p>
                  <a href="${
                    data.link
                  }" class="card-link" target="_blank">Visit Website</a>
              </div>
          </div>
      `;
}

function renderCards(filter = "all") {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  const filteredData =
    filter === "all"
      ? directoryData
      : directoryData.filter((item) => item.tags.includes(filter));

  filteredData.forEach((data) => {
    container.innerHTML += createCard(data);
  });
}

// Initial render
renderCards();

// Category filtering
document.querySelector(".categories").addEventListener("click", (e) => {
  if (e.target.classList.contains("category-btn")) {
    document
      .querySelectorAll(".category-btn")
      .forEach((btn) => btn.classList.remove("active"));
    e.target.classList.add("active");
    renderCards(e.target.dataset.category);
  }
});

// Search functionality
document.getElementById("search").addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const content = card.textContent.toLowerCase();
    const tags = card.dataset.tags.toLowerCase();
    const isVisible = content.includes(searchTerm) || tags.includes(searchTerm);
    card.style.display = isVisible ? "block" : "none";
  });
});
