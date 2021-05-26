import axios from 'axios';
class PortfolioApi {

  getAll() {
    return axios.get('http://localhost:3001/api/portfolios')
  }
}

export default PortfolioApi;
