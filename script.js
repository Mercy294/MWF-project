document
  .getElementById("addProductForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const type = document.getElementById("type").value;
    const category = document.getElementById("category").value;
    const cost = document.getElementById("cost").value;
    const price = document.getElementById("price").value || "—";
    const quantity = document.getElementById("quantity").value;
    const color = document.getElementById("color").value || "—";
    const measurements = document.getElementById("measurements").value || "—";

    const tableBody = document.querySelector(".product-list tbody");
    const totalValue = parseFloat(
    document.getElementById("totalValueInput").value
    );

    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${name}</td>
    <td>${type}</td>
    <td>${category}</td>
    <td>${cost}</td>
    <td>${price}</td>
    <td>${quantity}</td>
    <td>${color}</td>
    <td>${measurements}</td>
  `;

    tableBody.appendChild(row);

    this.reset(); // Clear form
  });
  function updateSummary() {
    const table = document.getElementById("productTable");
    let totalItems = 0;
    let totalQuantity = 0;
    let totalValue = 0;

    for (let i = 1; i < table.rows.length; i++) {
      totalItems++;
      const qty = parseInt(table.rows[i].cells[3].innerText);
      const price = parseFloat(table.rows[i].cells[4].innerText);
      totalQuantity += qty;
      totalValue += qty * price;
      row.insertCell(9).innerText = totalValue.toLocaleString(); // Assuming it's column 10
    }

    document.getElementById("totalItems").innerText = totalItems;
    document.getElementById("totalQuantity").innerText = totalQuantity;
    document.getElementById("totalValue").innerText =
    totalValue.toLocaleString();
  }
  const totalValue = parseFloat(
    table.rows[i].cells[9].innerText.replace(/,/g, "")
  );
  grandTotalValue += totalValue;
  document.getElementById("totalValue").innerText =
    "UGX " + grandTotalValue.toLocaleString();
function deleteUser(id) {
  if (confirm("Are you sure you want to delete this user?")) {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      users.splice(index, 1); // remove user
      updateTable(); // re-render table
    }
  }
}
const customers = [
  {
    id: 1,
    name: "Alice Kimani",
    email: "alice@example.com",
    phone: "0700123456",
    location: "Kampala",
    favorite: "Sofas",
    status: "Active",
    joined: "2024-01-05",
    total: "$1,200",
    avatar: "https://i.pravatar.cc/40?img=1",
    products: "Leather Sofa, Coffee Table",
  },
  {
    id: 2,
    name: "Brian Otim",
    email: "brian@example.com",
    phone: "0700234567",
    location: "Entebbe",
    favorite: "Tables",
    status: "Inactive",
    joined: "2023-11-12",
    total: "$350",
    avatar: "https://i.pravatar.cc/40?img=2",
    products: "Oak Dining Table",
  },
  {
    id: 3,
    name: "Christine Nambi",
    email: "christine@example.com",
    phone: "0700345678",
    location: "Jinja",
    favorite: "Beds",
    status: "Active",
    joined: "2024-03-20",
    total: "$720",
    avatar: "https://i.pravatar.cc/40?img=3",
    products: "Queen Bed, Mattress",
  },
];
