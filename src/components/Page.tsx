import styled from "styled-components"

import GeneralDash from "./GeneralDash"

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 420px;
`

function Page() {
  return (
    <StyledPage>
      <h1>CV Application</h1>
      <GeneralDash />
    </StyledPage>
  )
}

export default Page