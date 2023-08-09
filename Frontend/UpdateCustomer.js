// edit-script.js
const urlParams = new URLSearchParams(window.location.search);
const customerId = urlParams.get("id");
let token =localStorage.getItem('token')

async function getCustomerDetails(customerId) {
  try {
    const response = await fetch(`http://localhost:8088/sunbase/portal/api/${customerId}`,{
     method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
  });
    if (!response.ok) {
      throw new Error("Failed to fetch customer details.");
    }
    const data = await response.json();
    populateFormFields(data);
  } catch (error) {
    console.error(error);
    alert("Failed to fetch customer details. Please try again.");
  }
}

function populateFormFields(customer) {
  document.getElementById("firstName").value = customer.first_name;
  document.getElementById("lastName").value = customer.last_name;
  document.getElementById("address").value = customer.address;
  document.getElementById("city").value = customer.city;
  document.getElementById("state").value = customer.state;
  document.getElementById("email").value = customer.email;
  document.getElementById("phone").value = customer.phone;
}

async function handleFormSubmit(event) {
  event.preventDefault();

  const updatedCustomer = {
    id:customerId,
    first_name: document.getElementById("firstName").value,
    last_name: document.getElementById("lastName").value,
    address: document.getElementById("address").value,
    city: document.getElementById("city").value,
    state: document.getElementById("state").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
  };

  try {
    const response = await fetch(`http://localhost:8088/sunbase/portal/api/update/${customerId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(updatedCustomer),
    });

    if (!response.ok) {
      throw new Error("Failed to update customer data.");
    }

    alert("Customer data updated successfully!");
    window.location.href = "./Customer.html"; // Redirect to the customer list page after successful update
  } catch (error) {
    console.error(error);
    alert("Failed to update customer data. Please try again.");
  }
}

document.getElementById("edit-customer-form").addEventListener("submit", handleFormSubmit);

getCustomerDetails(customerId);
