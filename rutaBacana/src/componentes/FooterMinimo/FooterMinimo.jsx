import React from 'react'
import "./footerMinimo.scss"
import Instagram from "../../assets/images/Instagram.png"
import gmail from "../../assets/images/gmail.png"
import Facebook from "../../assets/images/Facebook.png"
import x from "../../assets/images/x.png"

const FooterMinimo = () => {
  return (
    <footer className='minimalFooterComponent'>
        
        <section className='minimalFooterCopyRight'>

                <img src={gmail} alt="Gmail" />
                <img src={Facebook} alt="Facebook" />
                <img src={Instagram} alt="Instagram" />
                <img src={x} alt="x" />

        </section>
    </footer>
  )
}
export default FooterMinimo