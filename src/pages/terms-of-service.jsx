import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import PageContainer from '../components/page-container'

const TermsOfService = () => (
  <>
    <PageContainer>
      <Container>
        <div className="heading">
          <h1>Terms of Service</h1>
        </div>
        <h2>1. Terms</h2>
        <p>
          By accessing the website at{' '}
          <a href="https://www.humancrafted.tech">
            https://www.humancrafted.tech
          </a>
          , you are agreeing to be bound by these terms of service, all
          applicable laws and regulations, and agree that you are responsible
          for compliance with any applicable local laws. If you do not agree
          with any of these terms, you are prohibited from using or accessing
          this site. The materials contained in this website are protected by
          applicable copyright and trademark law.
        </p>
        <h2>2. Use Licence</h2>
        <ol type="a">
          <li>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Human Crafted Technology
            Ltd&apos;s website for personal, non-commercial transitory viewing
            only. This is the grant of a licence, not a transfer of title, and
            under this licence you may not:
            <ol type="i">
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose, or for any public
                display (commercial or non-commercial);
              </li>
              <li>
                attempt to decompile or reverse engineer any software contained
                on Human Crafted Technology Ltd&apos;s website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transfer the materials to another person or &quot;mirror&quot;
                the materials on any other server.
              </li>
            </ol>
          </li>
          <li>
            This licence shall automatically terminate if you violate any of
            these restrictions and may be terminated by Human Crafted Technology
            Ltd at any time. Upon terminating your viewing of these materials or
            upon the termination of this licence, you must destroy any
            downloaded materials in your possession whether in electronic or
            printed format.
          </li>
        </ol>
        <h2>3. Disclaimer</h2>
        <ol type="a">
          <li>
            The materials on Human Crafted Technology Ltd&apos;s website are
            provided on an &apos;as is&apos; basis. Human Crafted Technology Ltd
            makes no warranties, expressed or implied, and hereby disclaims and
            negates all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </li>
          <li>
            Further, Human Crafted Technology Ltd does not warrant or make any
            representations concerning the accuracy, likely results, or
            reliability of the use of the materials on its website or otherwise
            relating to such materials or on any sites linked to this site.
          </li>
        </ol>
        <h2>4. Limitations</h2>
        <p>
          In no event shall Human Crafted Technology Ltd or its suppliers be
          liable for any damages (including, without limitation, damages for
          loss of data or profit, or due to business interruption) arising out
          of the use or inability to use the materials on Human Crafted
          Technology Ltd&apos;s website, even if Human Crafted Technology Ltd or
          a Human Crafted Technology Ltd authorised representative has been
          notified orally or in writing of the possibility of such damage.
          Because some jurisdictions do not allow limitations on implied
          warranties, or limitations of liability for consequential or
          incidental damages, these limitations may not apply to you.
        </p>
        <h2>5. Accuracy of materials</h2>
        <p>
          The materials appearing on Human Crafted Technology Ltd&apos;s website
          could include technical, typographical, or photographic errors. Human
          Crafted Technology Ltd does not warrant that any of the materials on
          its website are accurate, complete or current. Human Crafted
          Technology Ltd may make changes to the materials contained on its
          website at any time without notice. However Human Crafted Technology
          Ltd does not make any commitment to update the materials.
        </p>
        <h2>6. Links</h2>
        <p>
          Human Crafted Technology Ltd has not reviewed all of the sites linked
          to its website and is not responsible for the contents of any such
          linked site. The inclusion of any link does not imply endorsement by
          Human Crafted Technology Ltd of the site. Use of any such linked
          website is at the user&apos;s own risk.
        </p>
        <h2>7. Modifications</h2>
        <p>
          Human Crafted Technology Ltd may revise these terms of service for its
          website at any time without notice. By using this website you are
          agreeing to be bound by the then current version of these terms of
          service.
        </p>
        <h2>8. Governing Law</h2>
        <p>
          These terms and conditions are governed by and construed in accordance
          with the laws of UK and you irrevocably submit to the exclusive
          jurisdiction of the courts in that State or location.
        </p>
      </Container>
    </PageContainer>
  </>
)

export default TermsOfService

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 60px;
  .heading {
    flex: 1;
    display: flex;
    align-items: center;
  }
  a {
    color: white;
  }
  .links {
    font-size: 16px;
    color: white;
  }
  ${media.greaterThan('medium')`
    max-width: 750px;
  `};
  min-height: 85vh;
  p,
  ol {
    color: ${p => p.theme.colors.grey};
  }
`
