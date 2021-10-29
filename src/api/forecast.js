import fetch from '../utils/request';
export default {
  getRemotes(code) {
    return fetch({
      url: `${window.server}/api/remote/forecasts`,
      method: 'get',
      params: { code }
    });
  },
  getLatests(code) {
    return fetch({
      url: `${window.server}/api/latest/forecasts`,
      method: 'get',
      params: { code }
    });
  },
  insert(data) {
    return fetch({
      url: `${window.server}/api/forecast`,
      method: 'post',
      data
    });
  },
}