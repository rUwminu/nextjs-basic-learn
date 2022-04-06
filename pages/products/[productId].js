import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const ProductView = ({ product }) => {
  const router = useRouter()

  if (router.isFallback) {
    return (
      <div>
        <span>Loading...</span>
      </div>
    )
  }

  return (
    <ProductCard>
      <h2>{product.title}</h2>
      <span>{product.price}</span>
      <p>{product.description}</p>
    </ProductCard>
  )
}

const ProductCard = styled.div`
  ${tw`
    flex
    flex-col
    p-2
    w-full
    max-w-xs
    font-semibold
    ring-1
    ring-yellow-600
    rounded-md
  `}

  h2 {
    ${tw`
        text-lg
    `}
  }

  span {
    ${tw`
        mb-2
        text-sm
        text-gray-600
    `}
  }

  p {
    ${tw``}
  }
`

export default ProductView

export async function getStaticPaths() {
  return {
    paths: [{ params: { productId: '1' } }],
    fallback: true,
  }
}

export async function getStaticProps(ctx) {
  const { params } = ctx

  const res = await fetch(`http://localhost:4001/products/${params.productId}`)
  const data = await res.json()

  return {
    props: {
      product: data,
    },
  }
}
