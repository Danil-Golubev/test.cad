export default async function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { name, email, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: "All fields reuired!" });
      }

      return res
        .status(200)
        .json({ message: `Thank you for your interest, ${name}!` });
    }

    res.status(405).json({ error: "Method not allowed" });
  } catch (error) {
    console.error("Server error", error);
    return res.status(500).json({ error: "Server error" });
  }
}
