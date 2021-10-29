import fetch from '../utils/request';
export default {
  gets(code) {
    return fetch({
      url: `${window.server}/api/dealRecords`,
      method: 'get',
      params: { code }
    });
  },
  inserts(data) {
    return fetch({
      url: `${window.server}/api/dealRecords`,
      method: 'post',
      data
    });
  },
  insert(data) {
    return fetch({
      url: `${window.server}/api/dealRecord`,
      method: 'post',
      data
    });
  },
  updates(data) {
    return fetch({
      url: `${window.server}/api/dealRecords`,
      method: 'put',
      data
    });
  },
  delete(uuid) {
    return fetch({
      url: `${window.server}/api/dealRecord`,
      method: 'delete',
      data: { uuid }
    });
  }
}