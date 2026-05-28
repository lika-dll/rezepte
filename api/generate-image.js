export default async function handler(req, res) {
  console.log("FUNCTION STARTED");

  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    // 🔥 WICHTIG: robustes parsing für Vercel
    let body = req.body;

    if (!body) {
      try {
        body = await new Promise((resolve) => {
          let data = "";
          req.on("data", chunk => data += chunk);
          req.on("end", () => resolve(JSON.parse(data)));
        });
      } catch (e) {
        return res.status(400).json({ error: "Invalid JSON" });
      }
    }

    const { prompt } = body;

    console.log("PROMPT:", prompt);

    if (!prompt) {
      return res.status(400).json({ error: "No prompt" });
    }

    return res.status(200).json({
      ok: true,
      prompt,
      debug: "backend works"
    });

  } catch (err) {
    console.error("CRASH:", err);

    return res.status(500).json({
      error: err.message || "unknown error"
    });
  }
}
