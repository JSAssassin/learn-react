// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/*
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root

*/

// This is the imperative way to program
// const root = document.getElementById('root');
// const h1 = document.createElement('h1');

// h1.classList.add('header');
// h1.textContent = 'Hello, React!';

// root.appendChild(h1);

// declarative way
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<h1 className='header'>Hello, React!</h1>);
