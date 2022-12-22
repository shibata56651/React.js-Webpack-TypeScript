import { useEffect, useState } from "react";

const GetData = (props) => {
  const [name, setName] = useState('')
  const [id, setId] = useState('shibata56651')
  const ids = ['shibata56651', 'gaearon', 'aws', 'google', 'facebook']

  const getRandomId = () => {
    const idTarget = ids[Math.floor(Math.random() * ids.length)]
    setId(idTarget)
  }

  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
    .then(res => res.json())
    .then(data => {
      setName(data.name)
    })
    .catch(error => {
      console.log(error)
    })
  }, [id])

  return (
    <>
    <p>{id}のGitHub上の名前は{name}です。</p>
    <button onClick={getRandomId}>IDを変更</button>
    </>
  )
}

export default GetData