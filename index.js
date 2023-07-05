function submitData(name, email) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name,
      email,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not OK");
      }
      return response.json();
    })
    .then((data) => {
      const id = data.id;
      const idElement = document.createElement("p");
      idElement.textContent = `New ID: ${id}`;
      document.body.appendChild(idElement);
      return id;
    })
    .catch((error) => {
      const errorElement = document.createElement("p");
      errorElement.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorElement);
    });
}

submitData();
