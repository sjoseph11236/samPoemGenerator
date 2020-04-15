const BASE_URL = 'http://localhost:3000/api/entry';

const getEntries = async () => {
  try {
    const { data } = await axios.get(BASE_URL);
    console.log('data',data);
  } catch (error) {
    console.error; 
  }
};

getEntries();