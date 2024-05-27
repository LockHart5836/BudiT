document.addEventListener('DOMContentLoaded', () => {
    const currentUser = localStorage.getItem('currentUser') || sessionStorage.getItem('currentUser');
    if (!currentUser) {
        window.location.href = '../login/login.html';
    } else {
        document.getElementById('username-display').textContent = currentUser;
        populateDashboard(currentUser);
    }
});

function populateDashboard(username) {
    // Simulated user-specific data
    const usersData = {
        'user1': {
            income: 1500,
            expense: 800,
            total: 700
        },
        'user2': {
            income: 2000,
            expense: 1200,
            total: 800
        }
        // Add more user data as needed
    };
    const userData = usersData[username] || { income: 0, expense: 0, total: 0 };

    // Populate the dashboard with user-specific data
    document.getElementById('incomeDisplay').textContent = `₱ ${userData.income.toFixed(2)}`;
    document.getElementById('expenseDisplay').textContent = `₱ ${userData.expense.toFixed(2)}`;
    document.getElementById('totalDisplay').textContent = `₱ ${userData.total.toFixed(2)}`;
}
