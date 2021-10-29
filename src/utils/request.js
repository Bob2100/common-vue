import axios from 'axios'
import { Message } from 'element-ui'
export default function fetch(options) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      headers: {
        'token': ''
      },
      timeout: 1000 * 60 * 60
    });
    instance(options).then(res => {
      const result = res.data;
      if (result.code === -1) {
        Message.error({ message: result.message });
      }
      resolve(res.data);
    }).catch(err => {
      reject(err);
    });
  });
}