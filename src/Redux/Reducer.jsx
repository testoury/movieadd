import { moviesList } from '../assets/Data';

const favorite = {
  moviesList: moviesList,
  Cart: []
};

export default function Reducer(state = favorite, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, Cart: [...state.Cart, action.payload] };
    case "DELETE":
      return {
        ...state,
        Cart: state.Cart.filter((e) => e.id !== action.payload)
      };
    default:
      return state;
  }
}
