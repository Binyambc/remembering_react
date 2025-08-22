import { Button } from '@mui/material';
import './App.css'
import Products from './components/Products'

function App() {
  return (
    <>
      <h1>Hello React Advanced</h1>
      <Products/>
      <Button variant="contained" color="primary" >Click Me</Button>
    </>
  )
}

export default App;
