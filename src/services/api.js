import axios from 'axios';

axios.defaults.baseURL = `https://pixabay.com`;

export async function getImages(value, currentPage, signal) {
  const response = await axios.get('/api/', {
    signal,
    params: {
      q: value,
      key: '38401804-21f7b17662c0023355f3fd6bf',
      page: currentPage,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });

  return response.data;
}
