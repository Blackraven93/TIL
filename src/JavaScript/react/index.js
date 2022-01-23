class ReactDOM {
  static createRoot(element) {
    return (function () {
      return {
        render(component) {
          return `${component} Render!`;
        },
      };
    })();
  }
}

class Component {}

class App extends Component {}

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

console.log(root);
console.log(root.render("This is render"));

// root.render(<App />);
