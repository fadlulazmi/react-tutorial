import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListPokemon } from '../store/action'
import {useParams} from 'react-router-dom'

export default function Todo() {
  const dispatch = useDispatch()
  const param = useParams()
  
  const { listPokemon } = useSelector(state => state)

  useEffect(() => {
    dispatch(getListPokemon())
    if(param.index){
      alert(param.index)
    }
  }, [])

  return (
    <ol>
      {listPokemon.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
      ))}
    </ol>
  )
}
