// api/standings.js
import fetch from "node-fetch"; // only if your Node version <18

export default async function handler(req, res) {
  const leagueId = "2631909";
  const url = `https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/`;

  try {
    const response = await fetch(url);
    
    // Check if response is ok
    if (!response.ok) {
      return res.status(response.status).json({ error: "FPL API returned status " + response.status });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error("Serverless fetch error:", err);
    res.status(500).json({ error: err.message });
  }
}

