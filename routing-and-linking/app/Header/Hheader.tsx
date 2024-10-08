import Link from "next/link";

function Heaad() {
  return (
    <div>
      <header>000
        <ul>
          <li><Link href="/head">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/gallery">Gallery</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </header>
    </div>
  );
}

export default Heaad; // Ensure Head is exported correctly
