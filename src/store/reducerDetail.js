const initialState = {
   item: []
  };
  
  const loadHero = () => {
    const storedData = localStorage.getItem('hero');
    if (storedData) {
      return JSON.parse(storedData);
    }
    return initialState;
  };
  
  const reducerDetail = (state = loadHero(), action) => {
    switch (action.type) {
      case 'GetHero':
        const newState = {
          ...state,
          item: action.item,
        };
        localStorage.setItem('hero', JSON.stringify(newState));
        return newState;
      default:
        return state;
    }
  };
  
  export default reducerDetail;
  