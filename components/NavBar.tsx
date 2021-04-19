import React from 'react'
import Link from 'next/link'

export default function NavBar() {
    return (
        <nav>
            <h3>Max Sierra</h3>
            <div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/me"><a>About</a></Link>
            </div>
        </nav>
    )
}
