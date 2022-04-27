import axios from 'axios'

// state
export const state = () => ({
  products: [
    {
      brand: 'HQD',
      model: 'Cuvie',
      price: 400,
      old_price: 450,
    },
    {
      brand: 'HQD',
      model: 'Cuvie',
      price: 400,
      old_price: 450,
    },
    {
      brand: 'HQD',
      model: 'Cuvie',
      price: 400,
      old_price: 450,
    },
    {
      brand: 'HQD',
      model: 'Cuvie',
      price: 400,
      old_price: 450,
    },
    {
      brand: 'HQD',
      model: 'Cuvie',
      price: 400,
      old_price: 450,
    }
  ],
  pagination: {
    current_page: 1,
    last_page: 2
  }
})

  // getters
export const getters = {
  products: state => state.products,
  pagination: state => state.pagination
}
  
// mutations
export const mutations = { 
  FETCH_PRODUCTS_SUCCESS (state, data) {
    state.products = data.data;
    state.pagination = {
      current_page: data.current_page,
      last_page: data.last_page
    }
  }
}

// actions
export const actions = {
  async fetchProducts ({ commit }, payload = 1) {
    try {
      const { data } = await axios.get(`/products?page=${payload}`)

      commit('FETCH_PRODUCTS_SUCCESS', data)
      // console.log(data)
    } catch (e) {
      console.error(e);
    }       
  },
}
  
  