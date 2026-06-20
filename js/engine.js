// This is your HR Engine
function calculateHRProbability(barrelPct, fbPct, pitcherRisk, parkFactor) {
    let probability = (barrelPct * fbPct) * pitcherRisk * parkFactor;
    return (probability * 100).toFixed(2) + "%";
}

// Example usage:
const player = "Kyle Schwarber";
const prob = calculateHRProbability(0.144, 0.45, 1.2, 1.1);
console.log(`${player} HR Probability: ${prob}`);
