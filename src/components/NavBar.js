import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { seaGreen } from '../utilities/constants'

const Bar = styled.div`
  margin: 0 0 40px 0;
  background-color: ${seaGreen};
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Name = styled.h2`
  margin: 0;
  color: white;
  padding: 20px 50px;
  display: inline-block;
`

const ProfileImage = styled.img`
  max-width: 30px;
  border-radius: 50%;
  margin-right: 50px;
`

const LoggedIn = styled.div`
  float: right;
  display: flex;
  align-items: center;

  p {
    display: inline-block;
    color: white;
    margin: 0 10px;
    font-size: 12px;
  }
`

const NavBar = ({ firstName, profileImage }) => (
  <Bar>
    <Name>Scattr</Name>
    <LoggedIn>
      <p>{firstName}</p>
      <ProfileImage src={profileImage} alt={firstName} />
    </LoggedIn>
  </Bar>
)

NavBar.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.node.isRequired
}

export default NavBar
