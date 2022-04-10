const Component = (function () {
  let state = '';

  return {
    get getState() {
      return state;
    },

    set setState(newState) {
      state = newState;
    },
  };
})();

export default Component;
