import Component from './Component.js';

console.log(Component);
console.log(Component.getState);

Component.setState = 'Raven';

console.log(Component);
console.log(Component.getState);
