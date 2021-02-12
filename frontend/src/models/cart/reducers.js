export default function cart(state = [], action) {


    switch (action.type) {
        case 'ADD_TO_CART':

            console.log(state);
            return [...state, action.product];
        
        case 'REMOVE_ALL_CART':
            
            return [];
        default:
            return state;
    }
}