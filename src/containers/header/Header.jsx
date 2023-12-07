import React from 'react'
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
        <p>OpenAI's GPT (generative pre-trained transformer) models have been trained to understand natural language and code. GPTs provide text outputs in response to their inputs. The inputs to GPTs are also referred to as "prompts". Designing a prompt is essentially how you "program" a GPT model, usually by providing instructions or some examples of how to successfully complete a task. GPTs can be used across a great variety of tasks including content or code generation, summarization, conversation, creative writing, and more.</p>

        <div className='gpt3__header-content__input'>
          <input type='email' placeholder='Enter your email'/>
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt='people'/>
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai'/>
      </div>
      
    </div>
  )
}

export default Header
