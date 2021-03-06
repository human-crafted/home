import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import Img from 'gatsby-image'
import { FaLinkedinIn, FaTwitter, FaMedium, FaDev } from 'react-icons/fa'

const SocialIcon = ({ Icon, link }) => (
  <Item>
    <a target="_blank" rel="noopener noreferrer" href={link}>
      <Icon size={18} />
    </a>
  </Item>
)

const Item = styled.div`
  margin: 12px 12px 0px 12px;
  a {
    color: ${p => p.theme.colors.grey};
    transition: 0.2s ease-in-out;
  }
  a:hover {
    color: white;
  }
`

const TeamMember = ({ firstName, jobRole, image, links }) => (
  <Container>
    <TeamMemberIcon fluid={image.childImageSharp.fluid} />
    <p id="name">{firstName}</p>
    <p id="job">{jobRole}</p>
    <SocialIconContainer>
      {links.linkedin && (
        <SocialIcon Icon={FaLinkedinIn} link={links.linkedin} />
      )}
      {links.twitter && <SocialIcon Icon={FaTwitter} link={links.twitter} />}
      {links.medium && <SocialIcon Icon={FaMedium} link={links.medium} />}
      {links.dev && <SocialIcon Icon={FaDev} link={links.dev} />}
    </SocialIconContainer>
  </Container>
)

export default TeamMember

const TeamMemberIcon = styled(Img)`
  width: 100%;
  height: 100%;
  opacity: 0.75;
  border-radius: 50%;
  max-width: 150px;
`

const SocialIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 15px; // offset for icons being weird
`

const Container = styled.div`
  background-color: ${p => p.theme.colors.secondary};
  width: 100%;
  ${media.greaterThan('medium')`
   min-width: 190px;
   max-width: 240px;
   min-height: 320px;
  `};
  max-width: 240px;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 12px;
  padding: 24px 32px 24px 32px;
  p {
    margin-bottom: 0;
    text-align: center;
  }
  #content {
  }
  #name {
    margin-top: 12px;
    color: white;
  }
  #job {
    color: rgb(157, 157, 157);
  }
`
