'use client'
import { useState } from 'react'

export default function VoiceGenerator() {
  const [text, setText] = useState('')

  const speakText = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'en-US'
      window.speechSynthesis.speak(utterance)
    } else {
      alert('Sorry, your browser does not support speech synthesis.')
    }
  }

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Voice Generator (Free)</h1>
      <textarea
        className="w-full h-32 p-2 border border-gray-300 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something to convert into voice..."
      />
      <button
        onClick={speakText}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Speak
      </button>
    </div>
  )
}
