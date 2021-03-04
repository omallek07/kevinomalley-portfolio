import axios from 'axios';

export default async (req, res) => {
  try {
    const apiLink = `https://jsonplaceholder.typicode.com/posts`;
    const { data } = await axios.get(apiLink);
    res.status(200).json(data.slice(0, 10));
  } catch(e) {
    console.log(e);
    res.status(e.status || 400).json({message: 'API Error'});
  }
}
