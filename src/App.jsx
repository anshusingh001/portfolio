import './App.css';
import styled from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { darkTheme, lightTheme } from './utils/Theme'
import { ThemeProvider } from 'styled-components'
import HeroSection from './components/HeroSection/HeroSection'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`


function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects/>
          <Wrapper>
            {/* <Education /> */}
            <Contact />
          </Wrapper>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>

  )
}


export default App
