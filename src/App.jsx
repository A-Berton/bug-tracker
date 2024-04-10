import './App.css';
import BugTracker from './BugTracker';
import Navbar from './components/Navbar';
import { Container } from '@chakra-ui/react'

function App() {

  return (
    <>
      <Navbar />
      <Container centerContent>
        <BugTracker />
      </Container >
    </>
  )
}

export default App
