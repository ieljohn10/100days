import { useState } from "react"

const Features: React.FC<any> = () => {
  const [data, setData] = useState(false)
  console.log(data, setData, 'hahaha')
  return (
    <>
    Features
    </>
  )
}

export default Features