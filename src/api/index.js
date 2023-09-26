import axios from 'axios';
import md5 from 'md5';

const getMarvelHeroes = async (pub, priv, offset, limit) => {
    const timestamp = new Date().getTime();
    const hash = md5(timestamp + priv + pub);
    try {
        const response = await axios.get(`https://gateway.marvel.com/v1/public/characters`, {
          params: {
            ts: timestamp,
            apikey: pub,
            hash: hash,
            offset: offset, 
            limit: limit,   
          },
        });
        return response;
    } catch (error) {
        throw error;
    }
};

export default { getMarvelHeroes };
