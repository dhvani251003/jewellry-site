function showCategory(category) {
  const container = document.getElementById("collection-display");
  container.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)} Collection</h2>`;

  if (category === "gold") {
    container.innerHTML += `
      <div class="image-boxes">
        <div>
          <img src="images/male.jpg" alt="Male Gold Collection" />
          <p>Male</p>
        </div>
        <div>
          <img src="images/female.jpg" alt="Female Gold Collection" />
          <p>Female</p>
        </div>
      </div>
    `;
  } else {
    container.innerHTML += `<p>Coming soon...</p>`;
  }
}
