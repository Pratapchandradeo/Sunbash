const customerTableBody = document.getElementById('customerTableBody');

// Function to fetch customer data from the API
let token =localStorage.getItem('token')
function fetchCustomers() {
    
    axios.get('http://localhost:8088/sunbase/portal/api/get_customer_list',
    { headers: {
        "Authorization": `Bearer ${token}`
      }},
    )
        .then(response => {
            const customers = response.data;

            // Clear existing table rows
            customerTableBody.innerHTML = '';

            // Loop through the customers and create table rows
            customers.forEach(customer => {
                const row = document.createElement('tr');
                row.innerHTML = `
                                <th>${customer.first_name}</th>
                                <th>${customer.last_name}</th>
                                <th>${customer.address}</th>
                                <th>${customer.city}</th>
                                <th>${customer.state}</th>
                                <th>${customer.email}</th>
                                <th>${customer.phone}</th>
                    <td>
                        <button onclick="deleteCustomer('${customer.id}')">Delete</button>
                    </td>
                    <td>
                        <button onclick="updateCustomer('${customer.id}')">Update</button>
                    </td>
                `;
                customerTableBody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error fetching customers:', error);
        });
}

// Function to delete a customer by ID
function deleteCustomer(id) {
    console.log(id);

    if (!confirm("Are you sure you want to delete this customer?")) {
      return;
    }
  
    fetch(`http://localhost:8088/sunbase/portal/api/delete/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        alert("Customer deleted successfully!");
        location.reload(); // Reload the page after successful deletion
      })
      
      location.reload();
  
}

// Function to update a customer by ID (you can implement the update logic)
function updateCustomer(customerId) {
     // Create the URL with the ID as a parameter
  var url = './UpdateCustomer.html?id=' + customerId;
  
  // Redirect to the new page
  window.location.href = url;

}

// Fetch customers when the page loads
fetchCustomers();

function createPage(){
    window.location.href="./CreateCustomer.html";
}