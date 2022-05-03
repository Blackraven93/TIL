// const container = document.getElementById('root')
// const element = <h1 title="foo">Hello</h1>;
// ReactDOM.render(element, container)

// const element = <h1 title="foo">Hello</h1>
// const element = React.createElement('h1', { title: 'foo' }, 'Hello');
// ReactDOM.render(element, container)

const element = {
  type: 'h1',
  props: {
    title: 'foo',
    children: 'Hello',
  },
};

const container = document.getElementById('root');

// ReactDOM.render(element, container)
const node = document.createElement(element.type);
node['title'] = element.props.title;

// Using textNode instead of setting innerText
const text = document.createTextNode('');
text['nodeValue'] = element.props.children;

node.appendChild(text);
container.appendChild(node);
