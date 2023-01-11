import React, { useState } from 'react'
import { CaretDown, CaretUp } from "phosphor-react"

const RotatedCube = ({ size }: { size: number }) => {
  return <div style={{
    position: 'absolute',
    top: '-3px',
    left: '10px',
    width: `${size}px`,
    height: `${size}px`,
    transform: 'rotate(45deg)',
    backgroundColor: 'white',
    borderLeft: `0.1px solid #e5e7eb`,
    borderTop: `0.1px solid #e5e7eb`,
  }}>

  </div>
}

const Dropdown = ({ options }: { options: string[] }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className='relative'>
      <button onClick={() => setIsExpanded(!isExpanded)} className='flex justify-start rounded text-white p-default hover:bg-gray-400 bg-gray-500'>
        Dropdown 
        {isExpanded ? <CaretUp size={24}/> : <CaretDown size={24}/>}
      </button>
      {isExpanded &&
        <div className='bg-white rounded border py-1 absolute mt-2'>
          <RotatedCube size={5}/>
          <ul>
          {options.map(opt => (
            <li 
              className='hover:bg-blue-500 hover:text-white cursor-pointer p-default'
              key={opt}
            >
              {opt}
            </li>
            ))}
          </ul>
        </div>
      }
    </div>
  )
}

export default Dropdown