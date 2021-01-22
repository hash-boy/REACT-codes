import * as actionType from '../actions/actionTypes';


const initialState = {
   ingredients: null,
   totalPrice: 4,
   error: false
};

const INGREDIENT_PRICES = {
   salad: 0.5,
   cheese: 0.4,
   meat: 1.3,
   bacon: 0.7
};

 const reducer = (state=initialState, action) =>{
    switch(action.type){
      case actionType.ADD_INGREDIENTS:
          return{
               ...state,
               ingredients: {
                  ...state.ingredients,
                  [action.ingredientName]: state.ingredients[action.ingredientName] + 1
               },
               totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
          }
      case actionType.REMOVE_INGREDIENTS:
         return{
            ...state,
            ingredients: {
               ...state.ingredients,
               [action.ingredientName]: state.ingredients[action.ingredientName] - 1
            },
            totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
         }
      case actionType.SET_INGREDIENTS:
         return{
            ...state,
            ingredients: action.ingredients,
            totalPrice: 4,
            error: false
         }
      case actionType.FETCH_INGREDIENTS_FAILED:
         return {
            ...state,
            error: true
         }
      default:
         return state;
    }
 }

 export default reducer;