import Link from "next/link";


const Home = () => (
  <div>
    <h1>Hello, everyOne</h1>
    <p>My Name is Tabeena yaseen</p>
    <Link className="" href={"/main"}>this is my about us page</Link><br></br>
    <Link className="text-yellow-800" href={"http://localhost:3000/about"}>this is my about us page</Link>
    <h4></h4>
  </div>
);

export default Home;

// const Home = () => (:

//   This defines a functional component in React. The component is named Home, and it's an arrow function that returns JSX (the HTML-like syntax used in React).
//   <div>:
  
//   This is a standard HTML <div> element. It acts as a container for the heading and the paragraph.
//   <h1>Hello, World!</h1>:
  
//   An HTML <h1> tag that displays "Hello, World!" as a heading.
//   <p>This is a simple paragraph.</p>:
  
//   An HTML <p> tag that displays a paragraph with the text "This is a simple paragraph."
//   export default Home;:
  
//   This exports the Home component as the default export of this module, allowing Next.js to recognize and render it as a page when accessed.

