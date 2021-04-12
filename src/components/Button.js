import React from 'react'

export default function Button(props) {
  const { children, changeValue, style } = props
  return (
    <button 
      style={{
        width: '300px',
        height: '50px',
        backgroundColor: 'black',
        color: 'white',
        ...style
      }}
      onClick={() => changeValue()}
    >
      {children}
    </button>
  )
}
