
const InitialState = {
  claimList: [],
};
const claimViewReducer = (state = InitialState, action) => {
  console.log(action);
  switch (action.type) {
    case "CLAIM_LIST":
      state = { claimObj: action.claimList };
      break;
  }
  return state;
};
export default claimViewReducer;
