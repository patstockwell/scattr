import React from 'react'
import styled from 'styled-components'
import { seaGreen } from '../utilities/constants'

const Bar = styled.div`
  margin: 0 0 40px 0;
  background-color: ${seaGreen};
`

const Scattr = styled.h2`
  margin: 0;
  color: white;
  padding: 20px;
`

const NavBar = props => (
  <Bar>
    <Scattr>Scattr</Scattr>
  </Bar>
)

export default NavBar
