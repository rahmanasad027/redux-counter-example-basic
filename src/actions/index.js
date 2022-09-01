export const increment = (add) => {
  return {
    type: "INCREMENT",
    payload: add,
  };
};
export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};
export const logedIn = () => {
  return {
    type: "SIGN_IN",
  };
};
