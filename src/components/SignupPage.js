import React, { useState } from 'react'

export const SignupPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [language, setLanguage] = useState('')
    const [signup, setSignup] = useState([])

    const createAccount = (event) => {
        event.preventDefault()

        setSignup([
            ...signup,
            {
                email,
                password,
                language
            }
        ])

        event.target.reset()
        setEmail('')
        setPassword('')
        setLanguage('')

    }

    const selectedLanguage = (item) => {
        if (item === 'de') {
            return 'Hallo'
        } else if (item === 'en') {
            return 'Hello'
        } else {
            return 'Bonjour'
        }
    }

    return (
        <>
          
          <form onSubmit={ createAccount }>
              <h3>Email</h3>  
              <input 
                type="text" 
                placeholder="hello@test.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <h3>Password</h3>
              <input 
                type="password" 
                placeholder="**********"
                onChange={(e) => setPassword(e.target.value)}
              />
              <h3>Nationality</h3>
              <select onChange={(e) => setLanguage(e.target.value)}>
                  <option value="none">Select language</option>
                  <option value="en">English</option>
                  <option value="de">German</option>
                  <option value="fr">French</option>
              </select>
              <br />
              <br />
              <button>Signup</button>
          </form>
          <ul>
              {
                  signup.map((item, index) => (
                      <div>
                          
                          <p>{selectedLanguage(item.language)}</p>
                          <p>Your email address is: {item.email}</p>
                          
                      </div>
                  ))
              }
          </ul>
        </>
    )
}
