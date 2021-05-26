import axios from 'axios';

export default async (req, res) => {
  try {
    const id = req.query.id;
    const apiLink = `https://jsonplaceholder.typicode.com/posts/${id}`;
    const { data } = await axios.get(apiLink);
    res.status(200).json(data);
  } catch(e) {
    console.log(e);
    res.status(e.status || 400).json({message: 'API Error'});
  }
}
