import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes'
import ChatContainer from '@components/ChatBox/ChatContainer'


export const App = () => {
  return (
    <BrowserRouter>
          
          <Routes />
    </BrowserRouter>
  )
}