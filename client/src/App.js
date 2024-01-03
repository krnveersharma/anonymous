import React from 'react'

const App = () => {
  return (
    <div>
      <h1>SEND MY ANONYMOUS MESSAGE</h1>
      <div>
        <div>
          <textarea name="main-container" style={{ maxHeight: '200px', maxWidth: '250px', minHeight: '200px', minWidth: '250px',borderRadius:'25px',padding:'15px' }} />
        </div>
        <div>
          <button type='submit' name="submit-button">Send Message</button>
        </div>
      </div>
    </div>
  )
}

export default App