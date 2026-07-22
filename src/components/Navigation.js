import Link from "next/link"
export default function Navigation(){
    return (
          <header style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      <nav>
        {/* Navigation links displayed horizontally without bullet points */}
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none" }}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/about/team">Our Team</Link></li>
        </ul>
        </nav>
        </header>
    )
}