export default async function handler(req, res) {
  try {
    console.log("API HIT");

    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "No prompt" });
    }

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
