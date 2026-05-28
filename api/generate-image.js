import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const { prompt } = req.body;

  if (!prompt) return res.status(400).json({ error: "Prompt fehlt" });

  try {
    const result = await openai.images.generate({
      model: "gpt-image-1",
      prompt,
      size: "1024x1024"
    });

    const image_url = result.data[0].url;

    res.status(200).json({ image: image_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}
