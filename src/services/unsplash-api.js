import axios from 'axios';

const ACCESS_KEY = 'DQPo-YOmV8dPN_4RG-7UYXW_CmmZWDQL01tcgBtpeoU';

export const searchImages = async (query, page = 1, perPage = 12) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      query,
      page,
      per_page: perPage,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });
  return response.data;
};

