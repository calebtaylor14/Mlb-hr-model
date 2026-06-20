function calculateHRProbability(barrelPct, fbPct, pitcherRisk, parkFactor) {
    let probability = (barrelPct * fbPct) * pitcherRisk * parkFactor;
    return (probability * 100).toFixed(2) + "%";
}

// This function finds the HTML element and updates it
function updateDashboard() {
    const schwProb = calculateHRProbability(0.144, 0.45, 1.2, 1.1);
    document.getElementById("schwarber-prob").textContent = schwProb;
}

// Run the update when the page loads
window.onload = updateDashboard;
