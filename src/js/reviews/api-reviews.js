import axios from 'axios';

export default async function getReview() {
  const BASE_URL = 'https://portfolio-js.b.goit.study/api';
  const END_POINT = '/reviews';

  try {
    const response = await axios.get(`${BASE_URL}${END_POINT}`);

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
