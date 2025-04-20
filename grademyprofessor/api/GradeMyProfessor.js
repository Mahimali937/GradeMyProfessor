import axios from 'axios';

export default async function handler(req, res) {
  const path = req.url.replace('/api', ''); // removes '/api' from the path
  const url = `https://api.gritview.io${path}`;

  try {
    const response = await axios({
      method: req.method,
      url: url,
      headers: {
        'Content-Type': 'application/json',
      },
      data: req.body,
    });
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Proxy error:', error.message);
    res.status(error.response?.status || 500).json({ error: 'Proxy error' });
  }
}
