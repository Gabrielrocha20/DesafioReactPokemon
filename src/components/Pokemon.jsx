import {useState} from 'react'
import useGetData from '../hook/useGetData'

const Pokemon = ({item}) => {
  const {data} = useGetData(item.url)

  if (data !== undefined){
    return (
      <tr key={data.name}>
        <td>{data.name}</td>
        <td>{data.base_experience}</td>
        <td><img src={data.sprites.front_default} alt="" /></td>
      </tr>
    )
  }

  return (
    <tr>
      <td>{item.name}</td>
    </tr>
  )
}

export default Pokemon