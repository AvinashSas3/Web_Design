import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className='gpt3__whatgpt3-feature'>
        <Feature title='What is GPT-3' text='Generative Pre-trained Transformer 3 is a large language model released by OpenAI in 2020. Like its predecessor GPT-2, it is a decoder-only transformer model of deep neural network, which uses attention in place of previous recurrence- and convolution-based architectures.'/>
      </div>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient__text'>The possibilities are beyond our imagination</h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title='ChatBots' text='GPT 3 Chatbot is a large language model chatbot capable of interacting with the user in a conversational way. This AI model uses an advanced dialogue format that allows users to elaborate on the information, answer questions, admit mistakes, challenge incorrect data, and reject irrelevant information.'/>
        <Feature title='Knowledgebase' text='GPT-3 powered Discord bot that answers questions from your Discord community members based on chat history.Ansy reads your message history from public channels and gives contextual answers from the time it is installed.'/>
        <Feature title= 'Education' text='GPT-3 can be a valuable tool for helping students improve their writing skills. By analysing student data and understanding their writing abilities, GPT-3-powered tools can suggest topic ideas, provide grammar and spell-checking, and even generate content.'/>
      </div>
      
    </div>
  )
}

export default WhatGPT3
