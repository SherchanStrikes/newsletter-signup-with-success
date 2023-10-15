import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SuccessCard = () => {
  const {email} = useParams()
  const navigate = useNavigate();

  return (
    <div
      className="bg-CharcoalGrey d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="d-flex shadow-lg p-3 mb-md-5 bg-body-tertiary rounded-5 successCard" style={{width: '29rem'}}>
          <div className="py-5 ">
            <div className="px-5 ">
            <div style={{fontSize:'4rem'}}>
                    <i className="bi bi-check-circle-fill text-primary" />
                  </div>
              <header className="py-2 text-DarkSlateGrey" style={{fontWeight: 700, fontSize: '3rem', lineHeight: '3rem'}}>Thanks for subscribing!</header>
              <p className=" py-2 text-DarkSlateGrey">
                A confirmation email has been sent to <span style={{fontWeight: 700}}>{email}</span>. Please open it and click the button inside to confirm your subscription.
              </p>
              <div className='my-3 d-flex justify-content-center'>
                <button className='btn btn-DarkSlateGrey activeBtn w-100 py-3 text-white fw-bold' onClick={() => navigate('/')}>Dismiss message</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default SuccessCard