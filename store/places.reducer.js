import { ADD_PLACE, LOAD_PLACES } from './places.action';

import Place from  '../models/Place';

const initialState = {
    places: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            console.log("s3");
            console.log(action.payload);
            const newPlace = new Place(
                action.payload.id.toString(),
                action.payload.title,
                action.payload.description,
                action.payload.image,
                action.payload.location,
                action.payload.lat,
                action.payload.lng,
            )
            return {
                ...state,
                places: state.places.concat(newPlace),
            };
        case LOAD_PLACES:
            return {
                ...state,
                places: action.places.map(item => new Place(
                    item.id.toString(),
                    item.title,
                    item.description,
                    item.image,
                    item.location,
                    item.lat,
                    item.lng,
                )),
            }
        default:
            return state;
    }
}