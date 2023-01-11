import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Dropdown from './components/Dropdown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-12">
      <Dropdown options={[
        'Item 1',
        'Item 2',
        'Item 3'
      ]}/>
    </div>
  )
}

export default App
