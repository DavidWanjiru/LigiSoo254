// scripts/standings.js

const leagueId = "2631909"; // Your FPL league ID
const container = document.getElementById("standings-container");

async function fetchLeagueStandings() {
    try {
        const response = await fetch(`https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/`);
        const data = await response.json();
        const members = data.standings.results;

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

// Only fetch when the tab is active
document.addEventListener("DOMContentLoaded", () => {
    fetchLeagueStandings();
});

