import './App.css';
import BugTracker from './BugTracker';
import Navbar from './Navbar';
import { Container } from '@chakra-ui/react'
import { GlobalContextProvider } from './store';

function App() {

  return (
    <GlobalContextProvider>
      <Navbar />
      <Container centerContent>
        <BugTracker />
      </Container >
    </GlobalContextProvider>
  )
}

export default App
