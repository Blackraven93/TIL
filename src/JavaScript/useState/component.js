function Component() {
  const options = {
    currentStateKey: 0,
    renderCount: 0,
    state: [],
  };

  return {
    get getState() {
      return options.state;
    },

    render() {},

    useState(item) {
      options.state.push(item);
    },
  };
}
window.component = component;
const component = Component();

console.log('hello');
console.log(component.useState('Call it!'));
console.log(component.getState);

console.log(window.component);
export default Component;
