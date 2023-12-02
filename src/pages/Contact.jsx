import React, { useState, useRef, Suspense } from 'react'
import emailjs from '@emailjs/browser'
import { Canvas } from '@react-three/fiber'

import Fox from '../models/Fox'
import Loader from '../components/Loader'
import UseAlert from '../hooks/UseAlert'
import Alert from '../components/Alert'

const Contact = () => {

  const formRef = useRef(null)

  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const [isLoading, setIsLoading] = useState(false)

  const [currentAnimation, setCurrentAnimation] = useState('idle')

  const { alert, showAlert, hideAlert } = UseAlert()

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setCurrentAnimation('hit')

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'User_Name',
        from_email: form.email,
        to_email: 'user@mail.com',
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {

      setIsLoading(false)

      showAlert({ show: true, text: ' Your message was sent successfully!', type: 'success' })

      setTimeout(() => {
        hideAlert()
        setCurrentAnimation('idle')
        setForm({ name: '', email: '', message: '' })
      }, [3000]);

    }).catch((error) => {
      setIsLoading(false)

      showAlert({ show: true, text: "I didn't recieve your message! 😢", type: 'danger' })

      setCurrentAnimation('idle')
      console.log(error)
    })
  }





  const handleFocus = () => setCurrentAnimation('walk')

  const handleBlur = () => setCurrentAnimation('idle')


  return (
    <section className='relative flex lg:flex-row flex-col max-container h-screen'>
      {alert.show && <Alert {...alert} />}
      <div className='flex-1 min-w-[50%] flex flex-col'>
        <h1 className='head-text'>Get in touch</h1>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='w-full flex flex-col gap-7 mt-14'>
          <label className='text-black-500 font-semibold'>
            Name
            <input
              type='text'
              name='name'
              className='input'
              placeholder='User Name'
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Email
            <input
              type='email'
              name='email'
              className='input'
              placeholder='user@mail.com'
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className='text-black-500 font-semibold'>
            Your Message
            <textarea
              className='textarea'
              rows={4}
              name='message'
              input='input'
              placeholder='Let me how could I help you!'
              value={form.text}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur} />
          </label>
          <button
            className='btn'
            type='submit'
            disabled={isLoading}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000
          }}
        >
          <directionalLight intensity={2.5} position={[0, 0, 1]} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={<Loader />} >
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.6, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}

            />
          </Suspense>
        </Canvas>
      </div>

    </section>
  )
}


export default Contact;