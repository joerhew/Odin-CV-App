import { ChangeEvent, useState } from "react"

import Output from "./Output"
import Input from "./Input"
import Button from "./Button"


function GeneralDash() {
  const [generalData, setGeneralData] = useState({
    name: "",
    email: "",
    number: "",
    schoolName: "",
    major: "",
    schoolStart: "",
    schoolEnd: ""
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setGeneralData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <>
      <h2>General Information</h2>
      <Input 
        name='name' 
        label='Name' 
        value={generalData.name} 
        onChange={handleChange}
      />
      <Input 
        name='email' 
        label='Email' 
        value={generalData.email} 
        onChange={handleChange}
      />
      <Input 
        name='number' 
        label='Phone Number' 
        value={generalData.number} 
        onChange={handleChange}
      />
      <h2>Education Experience</h2>
      <Input 
        name='school-name' 
        label='School' 
        value={generalData.schoolName} 
        onChange={handleChange}
      />
      <Input 
        name='major' 
        label='Major' 
        value={generalData.major} 
        onChange={handleChange}
      />
      <Input 
        name='school-start' 
        label='Started' 
        value={generalData.schoolStart} 
        onChange={handleChange}
      />
      <Input 
        name='school-end' 
        label='Ended' 
        value={generalData.schoolEnd} 
        onChange={handleChange}
      />
      <Button>Confirm</Button>
    </>
  )
}

export default GeneralDash