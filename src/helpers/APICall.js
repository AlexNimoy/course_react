import { stringify } from 'qs';

import { API_ROOT } from '~/src/constants/API';

import request from 'superagent';

const APICall = ({ endpoint, method, query, payload }) => {
  return new Promise((resolve, reject) => {
    let r = request[method.toLowerCase()](`${API_ROOT}${endpoint}`);

    if(query)
      r.query(stringify(query));

    if(payload)
      r = r.send(payload);

    r.end((error, data) => (
      error ?
        reject(error) :
        resolve(data.body)
    ))
  })
}

export default APICall;
