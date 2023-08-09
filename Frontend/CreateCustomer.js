// script.js
const customerForm = document.getElementById("customer-form");
let token =localStorage.getItem('token')
// Function to handle form submission
async function handleFormSubmit(event) {
  event.preventDefault();

  const customerData = {
    first_name: document.getElementById("firstName").value,
    last_name: document.getElementById("lastName").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
  };

  try {
    const response = await fetch("http://localhost:8088/sunbase/portal/api/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
         
      },
      body: JSON.stringify(customerData),
    });

    if (!response.ok) {
      throw new Error("Failed to create customer.");
    }

    // Display a success message or perform any desired action
    alert("Customer created successfully!");

    // Redirect to the customer list page after successful submission
    window.location.href = "./Customer.html"; // Replace with the actual URL of the customer list page
  } catch (error) {
    console.error(error);
    alert("Failed to create customer. Please try again.");
  }
}

customerForm.addEventListener("submit", handleFormSubmit);
