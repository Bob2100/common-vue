import fetch from '../utils/request';
export default {
  insert(data) {
    return fetch({
      url: `${window.server}/api/stock`,
      method: 'post',
      data
    });
  },
  gets(accountCode) {
    return fetch({
      url: `${window.server}/api/stocks`,
      method: 'get',
      params: {
        accountCode
      }
    });
  },
  getStock(code) {
    return fetch({
      url: `${window.server}/api/stock/code`,
      method: 'get',
      params: {
        code
      }
    });
  },
  getRemoteStocks(params) {
    return fetch({
      url: `${window.server}/api/remoteStock`,
      method: 'get',
      params
    });
  },
  delete(code) {
    return fetch({
      url: `${window.server}/api/stock`,
      method: 'delete',
      data: {
        code
      }
    });
  },
  update(data) {
    return fetch({
      url: `${window.server}/api/stock`,
      method: 'put',
      data
    });
  }
}