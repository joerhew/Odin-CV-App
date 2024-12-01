interface OutputProps {
  data: {
    name: string;
    email: string;
    number: string;
  }
}

function Output(props: OutputProps) {

  return (
    <div>
      <h3>{props.data.name}</h3>
      <h4>{props.data.email}</h4>
      <h4>{props.data.number}</h4>
    </div>
  )
}

export default Output