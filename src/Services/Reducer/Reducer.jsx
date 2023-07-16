import { ADD_TO_CART,REMOVE_TO_CART } from "../Constants";
const initialState = {
  cardData: [],
};

export default function cardItems(state=[], Action) {
  switch (Action.type) {
    case ADD_TO_CART:
       // console.warn('reducer',Action)
      return [
        ...state,
        {cardData: Action.data}
      ]  
      case REMOVE_TO_CART:
       // console.warn('reducer',Action)
       state.pop();
      return [
        ...state,
        
      ]  
      
      default:
        return state
  }
}
