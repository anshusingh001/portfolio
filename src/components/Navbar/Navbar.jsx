import React, { useState } from 'react'
import { Nav,NavbarContainer,NavLink,Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledcomponent';
import { useTheme } from 'styled-components';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';


const Navbar = () => {
  const [isopen, setIsOpen] = useState(false);
  const theme = useTheme()
  return (
    <Nav>
    <NavbarContainer>
      <NavLogo to='/'>
        <div style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20', cursor: 'pointer' }}>
          <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
        </div>
      </NavLogo>
      <MobileIcon>
        <FaBars onClick={() => {
          setIsOpen(!isopen)
        }} />
      </MobileIcon>
      <NavItems>
        <NavLink href="#about">About</NavLink>
        <NavLink href='#skills'>Skills</NavLink>
        <NavLink href='#experience'>Experience</NavLink>
        <NavLink href='#projects'>Projects</NavLink>
        <NavLink href='#education'>Education</NavLink>
      </NavItems>
      <ButtonContainer>
        <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
      </ButtonContainer>
      {
        isopen &&
        <MobileMenu isOpen={isopen}>
          <MobileLink href="#about" onClick={() => {
            setIsOpen(!isopen)
          }}>About</MobileLink>
          <MobileLink href='#skills' onClick={() => {
            setIsOpen(!isopen)
          }}>Skills</MobileLink>
          <MobileLink href='#experience' onClick={() => {
            setIsOpen(!isopen)
          }}>Experience</MobileLink>
          <MobileLink href='#projects' onClick={() => {
            setIsOpen(!isopen)
          }}>Projects</MobileLink>
          <MobileLink href='#education' onClick={() => {
            setIsOpen(!isopen)
          }}>Education</MobileLink>
          <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </MobileMenu>
      }
    </NavbarContainer>
  </Nav>
  )
}

export default Navbar
