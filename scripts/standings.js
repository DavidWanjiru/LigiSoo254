// scripts/standings.js

const container = document.getElementById("standings-container");

/**
 * Fetch league data from Vercel serverless function
 */
async function fetchLeagueStandings() {
    try {
        // Call your Vercel serverless function
        const response = await fetch("/api/standings");
        const data = await response.json();

        if (!data.standings || !data.standings.results) {
            container.innerHTML = `<p style="color:red">No standings data found.</p>`;
            return;
        }

        const members = data.standings.results;

        // Build the table
        let html = '<table border="1" cellpadding="5" cellspacing="0">';
        html += '<tr><th>Rank</th><th>Team</th><th>Player</th><th>Total Points</th></tr>';

        members.forEach((m, index) => {
            html += `<tr>
                        <td>${index + 1}</td>
                        <td>${m.entry_name}</td>
                        <td>${m.player_name}</td>
                        <td>${m.total}</td>
                     </tr>`;
        });

        html += '</table>';
        container.innerHTML = html;

    } catch (error) {
        container.innerHTML = `<p style="color:red">Failed to fetch league data: ${error}</p>`;
    }
}

// Fetch standings when page loads
document.addEventListener("DOMContentLoaded", () => {
    fetchLeagueStandings();
});

