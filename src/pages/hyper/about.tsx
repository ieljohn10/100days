import { useState } from "react"

const About: React.FC<any> = () => {
  const [data, setData] = useState(false)
  console.log(data, setData, 'hahaha')
  return (
    <>
    About
    </>
  )
}

export default About