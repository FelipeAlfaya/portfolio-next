import Head from 'next/head'
import Header from '../components/Header'
import Particle from '../components/Particle'
import emailjs from '@emailjs/browser'
import { useState } from 'react'
import { sendContactEmail } from '../services/sendMail'
// import { useRef } from 'react';

function contact() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')

  async function handleSubmit(event: any) {
    event.preventDefault()
    console.log(nome, email, subject, content)
    if (nome === '' || email === '' || content === '') {
      alert('Please fill all the fields')
      return
    }

    try {
      await sendContactEmail(nome, email, content)
      setNome('')
      setEmail('')
      setSubject('')
      setContent('')
      alert('Email sent successfully')
    } catch {
      alert('Something went wrong, please try again later')
    }
  }

  return (
    <div>
      <Head>
        <title> Portfolio - Contact</title>
        <link rel='icon' href='/pageicon.png' />
      </Head>
      <Header />
      <Particle />
      <div>
        <h1 className='text-6xl p-2.5 m-2.5 bg-transparent font-bold text-center md:text-4xl lg:text-4xl z-50'>
          Need my <span className='glow text-[#019fb6]/70 '>services</span>?
        </h1>
      </div>
      <div className='msg-co flex flex-col md:mt-16 sm:mt-24 container mx-auto max-w-fit max-h-fit px-4 p-4'>
        <h1 className='text-6xl p-2.5 m-2.5 sm:p-1.5 sm:m-1.5 text-[#019fb6]/70 bg-transparent font-bold text-center sm:text-2xl md:text-4xl lg:text-4xl z-50'>
          Contact me!
        </h1>
        <form
          data-aos='fade-up'
          onSubmit={handleSubmit}
          className='flex flex-col container mx-auto max-w-fit max-h-fit px-4 p-4'
        >
          <input
            value={nome}
            type='text'
            placeholder='Name'
            onChange={({ target }) => setNome(target.value)}
            className='p-2.5 m-2.5 bg-transparent border border-[#019fb6]'
          ></input>
          <input
            value={email}
            type='email'
            placeholder='E-mail'
            onChange={({ target }) => setEmail(target.value)}
            className='p-2.5 m-2.5 bg-transparent border border-[#019fb6]'
          ></input>
          <textarea
            value={content}
            placeholder='Message'
            onChange={({ target }) => setContent(target.value)}
            className='p-2.5 m-2.5 bg-transparent border border-[#019fb6]'
          ></textarea>
          <button
            type='submit'
            value='Send'
            className='sendButton bg-transparent flex items-center justify-center hover:bg-[#019fb6] text-[#019fb6] 
          font-semibold hover:text-white p-2.5 m-2.5 border border-[#019fb6] hover:border-transparent active:bg-[#55e8ff] 
         rounded select-none max-w-none max-h-max'
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default contact
