// api/standings.js
import fetch from "node-fetch";

export default async function handler(req, res) {
  const leagueId = "2631909";
  const url = `https://fantasy.premierleague.com/api/leagues-classic/${leagueId}/standings/`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

