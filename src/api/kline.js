import fetch from '../utils/request';
import qs from 'qs';
export default {
  gets(code) {
    return fetch({
      url: `${window.server}/api/by/code/klines`,
      method: 'get',
      params: {
        code,
      }
    });
  },
  getsByCodeAndForecast(code, forecast) {
    return fetch({
      url: `${window.server}/api/by/code/by/forecast/klines`,
      method: 'get',
      params: {
        code,
        forecast
      }
    });
  },
  getRemotes(code, count) {
    return fetch({
      url: `${window.server}/api/by/code/by/count/remote/klines`,
      method: 'get',
      params: {
        code,
        count
      }
    });
  },
  getLatestReals(codes) {
    return fetch({
      url: `${window.server}/api/by/codes/latest/real/klines`,
      method: 'get',
      params: { codes },
      paramsSerializer(params) {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      }
    });
  },
  getLatestForecasts(code) {
    return fetch({
      url: `${window.server}/api/by/code/latest/forecast/klines`,
      method: 'get',
      params: { code }
    });
  },
  inserts(data) {
    return fetch({
      url: `${window.server}/api/klines`,
      method: 'post',
      data
    });
  },
  update(data) {
    return fetch({
      url: `${window.server}/api/kline`,
      method: 'put',
      data
    });
  }
}