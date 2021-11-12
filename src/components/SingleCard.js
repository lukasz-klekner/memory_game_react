import './SingleCard.css'

const SingleCard = ({ card }) => (
  <div className='card'>
    <img src={card.src} alt='card front' className='front' />
    <img src='/img/cover.png' alt='card back' className='back' />
  </div>
)

export default SingleCard
