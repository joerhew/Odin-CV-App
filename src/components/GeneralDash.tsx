import Input from "./Input"
import Button from "./Button"
import { ChangeEvent, useState } from "react"

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
      <h1>General Information</h1>
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
      <Button>Submit</Button>
    </>
  )
}

export default GeneralDash