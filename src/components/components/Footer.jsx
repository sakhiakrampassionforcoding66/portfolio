import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gray-200 p-4 flex justify-center items-center">
      <p className="text-gray-600 mr-2">&copy; Sakhi Akram</p>
      <LinkComponent />
    </div>
  )
}

const LinkComponent = ({ username }) => {
  return (
    <div className='text-black'>
      <a href="https://www.upwork.com/freelancers/~011a004af62c3e1832" target="_blank" rel="noopener noreferrer">
        Upwork
      </a>
      <span className="ml-2"></span>
      <a href="https://twitter.com/SakhiAkram66" target="_blank" rel="noopener noreferrer">
        Twitter
      </a>
      <span className="ml-2"></span>
      <a href="https://www.linkedin.com/in/sakhi-akram-b8a10527a/" target="_blank" rel="noopener noreferrer">
        Linkedin
      </a>
      <span className="ml-2"></span>
      <span>{username}</span>
    </div>
  );
}

export default Footer