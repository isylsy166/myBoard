const initialState = { 
  text : '', 
  boardID: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TEXT':
      return { ...state, text: action.text, id: action.id};
    case 'SET_BOARD_ID':
      console.log(action)
      return {boardId : action.id};
    default:
      return state;
  }
};

export default reducer;