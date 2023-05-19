import axios from 'axios'

export const getProductsRequests = async () => await axios.get('/altavehiculosadicionales')

export const createProductsRequests = async (product) => await axios.post('/altavehiculosadicionales', product)

export const createPendientesRequests = async (product) => await axios.post('/pendientes', product)