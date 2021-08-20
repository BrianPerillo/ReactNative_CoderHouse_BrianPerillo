import * as FileSystem from 'expo-file-system';

import { fetchAddress, insertAddress } from '../db';

export const ADD_PLACE = 'ADD_PLACE';
export const LOAD_PLACES = 'LOAD_PLACES';

export const addPlace = (title, description, location, image, lat, lng) => {
    console.log("s2");
    return async dispatch => {
        
        const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName;

        try {
            await FileSystem.moveAsync({
                from: image,
                to: Path,
            });

            //Guardo en SQLite
            const result = await insertAddress(
                title,
                description,
                Path,
                location,
                'Address',
                lat,
                lng,
            );

            console.log(result)

            //Guardo en Estado
            dispatch({
                type: ADD_PLACE,
                payload: { id: result.insertId, title, description, image: Path, location, lat, lng },
            });
        } catch (err) {
            console.log(err.mesage);
            throw err;
        }
    }
    
}

export const loadPlaces = () => {
    return async dispatch => {
        try {
            const result = await fetchAddress();
            console.log("result DB");
            console.log(result);
            dispatch({ type: LOAD_PLACES, places: result.rows._array });
        } catch (error) {
            throw error;
        }
    }
}