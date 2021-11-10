import { useState } from 'react'

import './App.css'

const cardImages = [
  { src: '/img/helmet-1.png' },
  { src: '/img/potion-1.png' },
  { src: '/img/ring-1.png' },
  { src: '/img/scroll-1.png' },
  { src: '/img/shield-1.png' },
  { src: '/img/sword-1.png' },
]

function App() {
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  const shuffledCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.floor(Math.random() * 10000) }))

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns)
  return (
    <div className='App'>
      <h1>Memory game</h1>
      <button onClick={shuffledCards}>New game</button>
      <div className='card-grid'>
        {cards.map((card) => (
          <div key={card.id} className='card'>
            <img src={card.src} alt='card front' className='front' />
            <img src='/img/cover.png' alt='card back' className='back' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
