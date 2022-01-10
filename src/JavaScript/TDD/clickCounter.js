let App = App || {};

App.ClickCounter = () => {
  let value = 0;
  return {
    getValue() {
      return value;
    },
    increase() {
      return value++;
    },
  };
};

export default App;
