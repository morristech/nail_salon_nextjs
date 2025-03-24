import React from 'react'
import {
  FaInstagram,
  FaTwitter,
  FaGoogle,
  FaYoutube,
  FaTiktok
} from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="tracking-widest">
        <p>250 St Joseph Avenue</p>
        <p>Eersterust, Pretoria 0022</p>
        <p>0826287365</p>
      </div>

      <div className="flex flex-row">
        {/* ------------social-icons------------ */}
        <ul className="social-icons">
          <li>
            <a href="https://www.instagram.com/beau.mont__?igsh=dHBwdDBvN3owbWVs&utm_source=qr">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="https://www.tiktok.com/@beau.mont_?_t=ZM-8uoR45h1JoL&_r=1">
              <FaTiktok />
            </a>
          </li>
        </ul>
      </div>
      <div className="translate-x-2">
        <ul className="footer-links">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Locations</a>
          </li>
          <li>
            <a href="">Treatments</a>
          </li>
          <li>
            <a href="">Privacy Policy</a>
          </li>
          <li>
            <a href="">Gallery</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
