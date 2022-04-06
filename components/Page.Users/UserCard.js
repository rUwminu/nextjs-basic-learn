import React from 'react'
import tw from 'twin.macro'
import styled from 'styled-components'

const UserCard = ({ user }) => {
  const { name, email } = user

  return (
    <CardContainer>
      <h2>{name}</h2>
      <span>{email}</span>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  ${tw`
    flex
    flex-col
    mb-2
    p-2
    w-full
    max-w-xs
    ring-1
    ring-gray-600
    rounded-md
  `}

  h2 {
    ${tw`
        font-semibold
        text-gray-700
    `}
  }

  span {
    ${tw`
        text-sm
        font-semibold
        text-gray-600
    `}
  }
`

export default UserCard
