import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import Link from 'next/link'

const ProductList = ({ products }) => {
  return (
    <SectionContainer>
      <h1>Product List</h1>
      {products.map((x) => (
        <Link href={`/products/${x.id}`} key={x.id}>
          <div className="product-card">
            <h2>{x.title}</h2>
            <span>{x.price}</span>
          </div>
        </Link>
      ))}
    </SectionContainer>
  )
}

const SectionContainer = styled.div`
  ${tw`
    flex
    flex-col
  `}

  .product-card {
    ${tw`
        flex
        flex-col
        p-2
        mb-3
        w-full
        max-w-xs
        ring-1
        ring-gray-600
        rounded-md
    `}

    span {
      ${tw`
        text-sm
        font-semibold
      `}
    }
  }
`

export default ProductList

export async function getStaticProps() {
  const res = await fetch('http://localhost:4001/products')
  const data = await res.json()

  return {
    props: {
      products: data,
    },
    revalidate: 10,
  }
}
