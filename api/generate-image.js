import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { title, ingredients } = req.body;

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const prompt = `
Professional food photography of ${title}.

Ingredients: ${ingredients.join(", ")}

Ultra realistic, cinematic lighting, shallow depth of field, 50mm lens, magazine style food photography, wooden table, highly detailed, warm tones.

No text, no watermark, no people.
`;

  try {
    const response = await openai.images.generate({
      model: "gpt-image-1",
      prompt: prompt,
      size: "1024x1024",
    });

    res.status(200).json({
      url: response.data[0].url,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Image generation failed" });
  }
}
