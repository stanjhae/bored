import axios from 'axios'

class boredApi {
  static getActivity (details) {
    let query = ''
    if (details) {
      Object.keys(details).map(detail => {
        console.log(detail)
        query += `${detail}=${details[detail]}&`
        // query += query+detail;
      })
      console.log(query)
    }
    return axios({
      method: 'GET',
      url: `http://www.boredapi.com/api/activity?${query}`,
      timeout: 5 * 1000,
    })
      .then(({ data }) => data)
      .catch(error => error)
  }
}

export default boredApi
