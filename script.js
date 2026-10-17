const list = document.getElementById("repos");

fetch("https://api.github.com/users/Ali-glitch2/repos?sort=updated&per_page=6")
  .then(response => response.json())
  .then(repos => {
    list.innerHTML = "";
    repos.forEach(repo => {
      list.innerHTML += `<li><a href="${repo.html_url}">${repo.name}</a> - ${repo.description || "No description"}</li>`;
    });
  })
  .catch(() => {
    list.innerHTML = "Could not load repositories.";
  });

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const body = message + "\n\nFrom: " + name + " (" + email + ")";
  window.location.href = "mailto:ali.ahmed.cloud2@gmail.com?subject=" + encodeURIComponent("Portfolio message from " + name) + "&body=" + encodeURIComponent(body);
  document.getElementById("status").textContent = "Opening your email app...";
});
