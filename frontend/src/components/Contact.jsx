import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='pt-24'>
        <form>
          <div>
            <input type='text' placeholder='first name'/>
            <input type='text' placeholder='last name'/>
          </div>
          <input type='email' placeholder='ENTER YOUR EMAIL'/>
          <input type='text' placeholder='subject'/>
          <textarea placeholder='Enter your message'/>
          <button type='submit'>SUBMIT</button>
        </form>
      </div>
    </>
  )
}

export default Contact