const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const login_id = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    // { headers: {
    //     "Authorization": `Bearer ${token}`
    //   }},
    // Call the API for authentication
    axios.post('http://localhost:8088/login', { login_id, password },)
        .then(response => {
            // Get the token from the API response
            const token = response.data.token;
           ;
            // Set the token in a cookie as Authorization header
            setAuthorizationHeader(token);

            // Redirect the user to the dashboard page or any other protected route
            window.location.href = "Customer.html";
        })
        .catch(error => {
            console.error('Login failed:', error);
            // Handle login failure (display error message, etc.)
        });
});

function setAuthorizationHeader(token) {
    // Set the token in a cookie or local storage
    // For simplicity, we'll use a cookie here
    localStorage.setItem('token',token)
    document.cookie = `Authorization=Bearer ${token}; path=/;`;
}
