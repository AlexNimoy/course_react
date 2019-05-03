import { later } from '~/src/Delay';

const arr = [later(1000), later(5000)];

later(10000)
  .then(() => {
    console.log('Done');
  })
  .catch((e) => console.log('error', e))

Promise
  .all(arr)
  .then((resultArray) => console.log('all done', resultArray))
