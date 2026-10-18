let state = {
    Transactions: []
};

// Load state
function setState(data) {
    state.Transactions = data;
}

// Get state
function getState() {
    return state;
}

// Add transaction
function addTransaction(transaction) {
    state.Transactions.push(transaction);
}

// Remove transaction
function removeTransaction(index) {
    state.Transactions.splice(index, 1);
}