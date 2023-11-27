import { useState } from "react"

const Company: React.FC<any> = () => {
  const [data, setData] = useState(false)
  console.log(data, setData, 'hahaha')
  return (
    <>
    Company
    </>
  )
}

export default Company