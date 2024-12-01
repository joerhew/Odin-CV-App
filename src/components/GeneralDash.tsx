import { ChangeEvent, useState } from "react"

import Output from "./Output"
import Input from "./Input"
import Button from "./Button"


function GeneralDash() {
  const [generalData, setGeneralData] = useState({
    name: "",
    email: "",
    number: ""
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
      <Button>Confirm</Button>
    </>
  )
}

export default GeneralDash