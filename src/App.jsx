import React from 'react'
import './index.css'

const RESUME_URL = 'https://drive.google.com/file/d/1fmyuz7IRiTUHNtcoz2TYtZPGloOidX12/view?usp=sharing'
const LINKEDIN_URL = 'https://www.linkedin.com/in/shivani-jilukara/'  // ← put your real LinkedIn URL

function App() {
  return (
    <div className="wrapper">
      <div className="card">
        <div className="avatar">S</div>
        <h1>Hey, I&apos;m Shivani</h1>
        <p>I'm glad to connect with you</p>

        <div className="buttons">
          <a className="btn" href={RESUME_URL} target="_blank" rel="noopener">
             View My Resume
          </a>
          <a className="btn" href={LINKEDIN_URL} target="_blank" rel="noopener">
             Connect with me on LinkedIn
          </a>
        </div>
      </div>

      <footer>
        <small>Thanks for scanning my QR code! 🎉</small>
      </footer>
    </div>
  )
}

export default App
