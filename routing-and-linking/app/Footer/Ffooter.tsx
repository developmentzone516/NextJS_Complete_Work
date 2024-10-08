import Link from "next/link";

function Foot() {
  return (
    <div>
      <footer>
        <ul>
          <li><Link href="https://github.com">Github</Link></li>
          <li><Link href="https://linkedin.com">LinkedIn</Link></li>
          <li><Link href="https://facebook.com">Facebook</Link></li>
          <li><Link href="https://instagram.com">Instagram</Link></li>
        </ul>
      </footer>
    </div>
  );
}

export default Foot; // Ensure Foot is exported correctly
