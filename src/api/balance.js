import fetch from '../utils/request';
export default {
  gets(code) {
    return fetch({
      url: `${window.server}/api/balance`,
      method: 'get',
      params: { code }
    });
  },
  getsByCodeAndReportType(code, reportType) {
    return fetch({
      url: `${window.server}/api/code/reportType/balance`,
      method: 'get',
      params: { code, reportType }
    });
  },
  getLatestForecasts(code) {
    return fetch({
      url: `${window.server}/api/latest/forecast/balance/code`,
      method: 'get',
      params: { code }
    });
  },
  getRemotes(code, count) {
    return fetch({
      url: `${window.server}/api/remote/balance`,
      method: 'get',
      params: {
        code,
        count
      }
    });
  },
  inserts(data) {
    return fetch({
      url: `${window.server}/api/balance`,
      method: 'post',
      data
    });
  },
  updates(data) {
    return fetch({
      url: `${window.server}/api/balance`,
      method: 'put',
      data
    });
  }
}