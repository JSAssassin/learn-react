// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)
// <h1 class="header">Hello world</h1>

// const element = <h1 className="header">This is JSX</h1>
// console.log(element);

// {
//     "type": "h1",
//     "key": null,
//     "ref": null,
//     "props": {
//         "className": "header",
//         "children": "This is JSX"
//     },
//     "_owner": null,
//     "_store": {}
// }

// JSX is kinda like a function which when run returns an object that react can
// interpret and use to create actual elements

// JSX
// ReactDOM.render(element, document.getElementById("root"));

// NOTE: With JSX we should make sure that we are only returning a single parent
// element

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// console.log(page);

// {
//     "type": "div",
//     "key": null,
//     "ref": null,
//     "props": {
//         "children": [
//             {
//                 "type": "h1",
//                 "key": null,
//                 "ref": null,
//                 "props": {
//                     "className": "header",
//                     "children": "This is JSX"
//                 },
//                 "_owner": null,
//                 "_store": {}
//             },
//             {
//                 "type": "p",
//                 "key": null,
//                 "ref": null,
//                 "props": {
//                     "children": "This is a paragraph"
//                 },
//                 "_owner": null,
//                 "_store": {}
//             }
//         ]
//     },
//     "_owner": null,
//     "_store": {}
// }
// ReactDOM.render(
//   page,
//   document.getElementById("root")
// );

/*
Challenge:

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navbar = (
    <nav>
        <h1>My Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);

console.log(navbar);

ReactDOM.render(
    navbar,
    document.getElementById("root")
);
