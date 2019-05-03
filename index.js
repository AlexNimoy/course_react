import { later } from '~/src/Delay';

later(5000)
  .then(() => {
    console.log('Done');
  })
  .catch((e) => console.log('error', e))
