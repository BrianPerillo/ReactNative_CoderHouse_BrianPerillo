export const FILTERED_PRODUCTS_BY_NAME = 'FILTERED_PRODUCTS_BY_NAME'; 

export const findItemsByName = (text) => {
    
    return {
        type: FILTERED_PRODUCTS_BY_NAME,
        productName: text,
    };

};