import React from 'react'
import {
  FaFacebook,
  FaTwitter,
  FaSnapchat,
  FaGoogle,
  FaYoutube,
} from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="tracking-widest">
        <p>Sweet Water Plaza</p>
        <p>1234 Beauty Drive</p>
        <p>Sweet Water, NY 12345</p>
        <p>(954) 000 - 1234</p>
      </div>

      <div className="flex flex-row">
        {/* ------------social-icons------------ */}
        <ul className="social-icons">
          <li>
            <a href="">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="">
              <FaSnapchat />
            </a>
          </li>
          <li>
            <a href="">
              <FaGoogle />
            </a>
          </li>
          <li>
            <a href="">
              <FaYoutube />
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
