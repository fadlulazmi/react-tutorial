import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export default function Biodata() {

  const {umurJono} = useSelector(state => state) 

  const [data, setData] = useState({
      id: '9248th9bgibwq287q8',
      name: 'Jono',
      age: 0,
      address: 'jono@gmail.com'
    })

  useEffect(() => {
    // proccess
    setData(data => ({
      ...data,
      age: umurJono
    }))
  }, [umurJono])

  const updateEmail = () => {
    const newEmail = 'aldebaran@gmail.com'
    const newData = [...data]
    newData.map(person => {
      if(person.name === 'Aldebaran'){
        return person.address = newEmail
      }
      return person
    })
    setData(newData)
  }

  return (
    <div>
      <div key={data.id}>
        <p>Nama: {data.name}</p>
        <p>Umur: {data.age}</p>
        <p>Email: {data.address}</p>
      </div>
      <button onClick={() => updateEmail()}>Change Email</button>
    </div>
  )
}
