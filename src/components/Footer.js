import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.p`
  ${props => props.fullWidth && `
    margin-left: 0 !important;
    margin-right: 0!important;
  `}
`

const Footer = ({ fullWidth }) => (
  <FooterWrapper className="footer" fullWidth={fullWidth}>
    ควิซนี้เป็นข้อมูลที่ตั้งโดยผู้ใช้งานของเว็บไซต์ Dek-D.com หากพบเห็นข้อมูลที่ไม่เหมาะสม โปรดแจ้ง
    &nbsp;<a href="mailto:webmaster@dek-d.com">webmaster@dek-d.com</a><br/>
    <a href="https://www.dek-d.com" title="Dek-D.com เว็บสำหรับวัยรุ่นโดยเฉพาะ" target="_blank"
       rel="noopener noreferrer">www.Dek-D.com</a>
    &nbsp;©1999-2017; All rights reserved by Dek-D Interactive Co.,Ltd.
  </FooterWrapper>
)

export default Footer