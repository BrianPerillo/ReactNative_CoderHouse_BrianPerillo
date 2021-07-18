export const CURRENT_PRODUCT = 'CURRENT_PRODUCT'; 

export const findCurrentItem = (id) => {
    
    return {
        type: CURRENT_PRODUCT,
        productID: id,
    };

};