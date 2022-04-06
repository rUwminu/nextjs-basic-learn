import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Home = () => {
  const router = useRouter()

  return (
    <div>
      <h1>HomePP</h1>
      <Link href="/products">Products</Link>
    </div>
  )
}

export default Home
