import Link from 'next/link'
import React from 'react'
function Footer() {
    return (
        <>
            <div className='navlinks d-flex flex-wrap justify-content-center mt-4  mb-4'>
                <Link href="/">Lorem</Link>
                <Link href="/">Lorem</Link>
                <Link href="/">Lorem</Link>
                <Link href="/">Lorem</Link>
                <Link href="/">Lorem</Link>
                <Link href="/">Lorem</Link>
                <Link href="/">Lorem</Link>
            </div>
            <h6 className='text-white text-center mb-3 copyright'>2024 Nova Super App</h6>
        </>
    )
}

export default Footer