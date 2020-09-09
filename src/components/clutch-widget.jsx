import styled from 'styled-components'
import React, { useEffect } from 'react'

const ClutchWidget = () => {
  useEffect(() => {
    window.CLUTCHCO.Init()
  }, [])

  return (
    <Container>
      <div
        className="clutch-widget"
        data-url="https://widget.clutch.co"
        data-widget-type="2"
        data-height="50"
        data-darkbg="1"
        data-clutchcompany-id="1002686"
      />
    </Container>
  )
}

export { ClutchWidget }

const Container = styled.div`
  width: 182px;
  height: 50px;
`
