import './SingleCard.css'

const SingleCard = ({ card, handleChoice }) => {
  const handleClick = () => {
    handleChoice(card)
  }
  return (
    <div className='card'>
      <img src={card.src} alt='card front' className='front' />
      <img
        src='/img/cover.png'
        alt='card back'
        className='back'
        onClick={handleClick}
      />
    </div>
  )
}

export default SingleCard
