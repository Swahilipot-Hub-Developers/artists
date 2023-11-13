import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const response = await axios.post('http://127.0.0.1:8000/artistsmgmt/login/', {
      username: req.body.username,
      password: req.body.password,
    });

    return res.status(200).json(response.data);
  } catch (error) {
    console.error('Login failed', error);
    return res.status(401).json({ error: 'Invalid credentials' });
  }
}
