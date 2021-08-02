export const CURRENT_PRODUCT = 'CURRENT_PRODUCT'; 
export const FILTERED_PRODUCTS_BY_NAME = 'FILTERED_PRODUCTS_BY_NAME'; 
export const CURRENT_CATEGORY = 'CURRENT_CATEGORY'; 

export const findCurrentItem = (id) => {
    
    return {
        type: CURRENT_PRODUCT,
        productID: id,
    };

};

export const findCurrentCategoryItems = (categoryName) => {
    console.log("BUSCAR POR CATEGORÍA");
    return {
        type: CURRENT_CATEGORY,
        categoryName: categoryName,
    };

};


export const findItemsByName = (text) => {
    
    return {
        type: FILTERED_PRODUCTS_BY_NAME,
        productName: text,
    };

};