const initialState = {
  isLoggedIn: false,
  private: null,
  public: null,
};

const loadLoginDataFromLocalStorage = () => {
  const storedData = localStorage.getItem('loginData');
  if (storedData) {
    return JSON.parse(storedData);
  }
  return initialState;
};

const loginReducer = (state = loadLoginDataFromLocalStorage(), action) => {
  switch (action.type) {
    case 'LOGIN':
      const newState = {
        ...state,
        isLoggedIn: true,
        public: action.publicData,
        private: action.privateData,
      };
      localStorage.setItem('loginData', JSON.stringify(newState));
      return newState;
    case 'LOGOUT':
      localStorage.removeItem('loginData');
      return initialState;
    default:
      return state;
  }
};

export default loginReducer;
