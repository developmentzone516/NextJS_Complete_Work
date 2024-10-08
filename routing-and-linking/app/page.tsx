import Heaad from './Header/Hheader'; 
import Foot from './Footer/Ffooter'; 

function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      <Heaad />
      <div style={{ textAlign: "center", margin: "20px auto", maxWidth: "800px" }}>
        <h1 style={{ color: "#D97706", fontSize: "3rem", marginBottom: "20px" }}>
          This is my Practice of Next.js
        </h1>
        <p style={{ color: "#F59E0B", fontSize: "1.2rem", lineHeight: "1.6", marginBottom: "30px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
        <h4 style={{ color: "#9B2C2C", fontSize: "1.5rem", marginBottom: "10px" }}>
          Why we are using it?
        </h4>
        <ul style={{ listStyleType: "disc", textAlign: "left", margin: "0 auto 30px auto", paddingLeft: "20px", maxWidth: "600px" }}>
          <li>For example 1</li>
          <li>For example 2</li>
          <li>For example 3</li>
          <li>For example 4</li>
          <li>For example 5</li>
        </ul>
        <button style={{ 
          padding: "10px 20px", 
          backgroundColor: "#34D399", 
          color: "#fff", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer", 
          fontSize: "1rem" 
        }}>
          Visit More
        </button>
      </div>
      <Foot />
    </div>
  );
}

export default Home; 
