import axios from 'axios';
const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';

export async function sendData(data) {
	try {
	  const response = await axios.post(BASE_URL, data, {
		headers: {
		  'Content-Type': 'application/json'
		}
	  });
	  console.log('Success:', response.data);
	  return response.data;
	} catch (error) {
	  console.error('Error:', error.response ? error.response.data : error.message);
	  return null;
	}
  }