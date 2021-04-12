import React, { useEffect, useState } from 'react'
import Button from '../components/Button'
import {useSelector, useDispatch} from 'react-redux'
import { increment } from '../store/action'

export default function Home() {
  const {umurJono} = useSelector(state => state)
  const dispatch = useDispatch()

  const [count, setCount] = useState(1)
  console.log('rerender ==> global state', umurJono)

  useEffect(() => {
    setCount(umurJono)
  }, [umurJono])

  const renderButton = () => {
    return (
      <Button style={{backgroundColor: 'orange'}} changeValue={() => dispatch(increment(count))}>
        + increment
      </Button>
    )
  }
  
  return (
    <>
      <h1>{count}</h1>
      {renderButton()}
    </>
  )
}