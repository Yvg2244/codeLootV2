export const initialState = {
    // user: userInfo,
    newRoom: [],
    questions: [],
    activeQuestion: 0,
    outputStatus: false,
  };
  //setting up dispatch functions
export const reducer = (state, action) => {
    switch (action.type) {
      case "SET_NEW_ROOM":
        return {
          ...state,
          newRoom: action.newRoom,
        };
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      case "SET_QUESTIONS":
        return {
          ...state,
          questions: action.questions,
        };
      case "SET_ACTIVE_QUESTION":
        return {
          ...state,
          activeQuestion: action.activeQuestion,
        };
      case "SET_OUTPUT_STATUS":
        return {
          ...state,
          outputStatus: action.outputStatus,
        };

      default:
        return state;
    }
  };