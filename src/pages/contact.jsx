import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import SEO from '../components/seo'
import PageContainer from '../components/page-container'

const InputField = ({ label, type, placeholder, required, fullWidth }) => (
  <Label fullWidth={fullWidth}>
    {label}
    {required && <>*</>}
    <Input
      type={type}
      name={label}
      placeholder={placeholder}
      required={required}
    />
  </Label>
)

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-bottom: 16px;
  ${media.greaterThan('large')`
    margin-bottom: 0;
    flex-basis: ${p => (p.fullWidth ? '100' : '46')}%;
    margin-right: 4%;
  `};
`

const Input = styled.input`
  margin-top: 6px;
  font-weight: normal;
  width: 100%;
  display: inline-block;
  line-height: 1;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  background-color: rgb(43, 43, 43);
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: none;
  padding: 14px 20px;
  border-radius: 3px;
`

const Contact = () => (
  <>
    <PageContainer>
      <Container>
        <SEO title="Work With Us" />
        <div className="header">
          <h1>We'd love to talk, how can we help?</h1>
        </div>
        <Form method="post" action="https://formspree.io/mqnkeldx">
          <InputField
            label="Name"
            type="text"
            placeholder="Your name"
            required
          />
          <InputField
            label="Email"
            type="email"
            placeholder="Your email"
            required
          />
          <InputField
            label="Phone"
            type="tel"
            placeholder="Your phone number"
          />
          <Label fullWidth>
            Message*
            <textarea
              name="message"
              id="message"
              required
              rows="5"
              placeholder="Describe your project or tell us how you're doing"
            />
          </Label>
          <Button type="submit">Send Request.</Button>
        </Form>
      </Container>
    </PageContainer>
  </>
)

export default Contact

const Container = styled.div`
  .header {
    flex: 1;
    display: flex;
    align-items: center;
  }
  margin-top: 90px;
  display: flex;
  flex-direction: column;
  ${media.greaterThan('medium')`
    margin-top: 0px;
  `};
  ${media.greaterThan('large')`
    max-width: 750px;
  `};
  min-height: 85vh;
`

const Form = styled.form`
  flex: 1;
  ${media.greaterThan('large')`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: wrap;
  `};
  textarea {
    resize: none;
    margin-top: 6px;
    font-weight: normal;
    width: 100%;
    display: inline-block;
    line-height: 1.3;
    box-sizing: border-box;
    color: white;
    background-color: rgb(43, 43, 43);
    border-width: 0px;
    border-style: initial;
    border-color: initial;
    border-image: initial;
    outline: none;
    padding: 14px 20px;
    border-radius: 3px;
  }
`

const Button = styled.button`
  font-weight: bold;
  font-size: 18px;
  line-height: 48px;
  height: 50px;
  background-color: white;
  color: rgb(20, 20, 20);
  text-align: center;
  cursor: pointer;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  outline: none;
  padding: 0px 24px;
  border-radius: 3px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  :hover {
    background-color: rgba(255, 255, 255, 0.7);
    color: rgb(20, 20, 20);
  }
`
