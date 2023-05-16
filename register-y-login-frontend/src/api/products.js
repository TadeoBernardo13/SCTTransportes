import axios from 'axios'

export const getProductsRequests = async () => await axios.get('/altavehiculosadicionales')

export const createProductsRequests = async (product) => {
    const form = new FormData();

    for (let key in product) {
        form.append(key, product[key]);
    }

    return await axios.post('/altavehiculosadicionales', form, {
        headers: {
            'Content-Type' : 'multipart/form-data'
        },
    });
}