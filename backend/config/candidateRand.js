function generateCandidateID() {
    const year = new Date().getFullYear(); // Get the current year (e.g., 2024)
    const randomPart = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit number
    return `${year}${randomPart}`;
}

module.exports = {
    generateCandidateID: generateCandidateID()
}