export default async function handler(req, res) {
  try {
    console.log("API HIT");

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const body = await req.json?.() || req.body; // <-- Body parsen

    const { prompt } = body;

    if (!prompt) {
      return res.status(400).json({ error: "No prompt provided" });
    }

    console.log("Prompt received:", prompt);

    // Test-Antwort, wir geben den Prompt direkt zurück
    return res.status(200).json({
      ok: true,
      prompt: prompt
    });

  } catch (err) {
    console.error("ERROR:", err);
    return res.status(500).json({
      error: err.message || "Unknown error"
    });
  }
}
