import {SET_COLLECTION} from '../actions/collectionActions01';

const initState = {
    ids: [],
    entities: {},
};

export default (state = initState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case SET_COLLECTION: {
        const ids = payload.map(entity => entity['id']);
        const entities = payload.reduce(
          (finalEntities, entity) => ({
            ...finalEntities,
            [entity['id']]: entity,
          }),
          {},
        );
        console.log(ids,"ids");
        console.log(entities, "entities");
        return { ...state, ids, entities };
      }
      default:
        return state;
    }
  };
  