import compact from 'lodash/compact';
import map from 'lodash/map';

const PrepareData = (store, state) => {
  const { location, query, params, routes } = state;

  const prepareDataFns = compact(map(routes, route => route.prepareData));

  return Promise.all(map(
    prepareDataFns,
    prepareData => prepareData(store, query, params, location)
  ));
}

export default PrepareData;
