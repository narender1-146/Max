let likes = 0;

export default function handler(req, res) {
  if (req.method === "POST") {
    likes += 1;
    res.status(200).json({ likes });
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
