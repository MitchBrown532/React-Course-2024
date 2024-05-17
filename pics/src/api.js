import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID umnF55Ho3-1_z2Zine2Tpos4vWZxtBdWhrJOEKmOaR4'
        },
        params: {
            query: term
        }
    });


    return response.data.results;
};

export default searchImages;