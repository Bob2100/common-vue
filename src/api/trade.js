import fetch from '../utils/request';
export default {
  gets() {
    return fetch({
      url: `${window.server}/api/trade`,
      method: 'get'
    });
  }
}