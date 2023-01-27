import Card from '../../components/Card'

const Review = ({review}) => {
  return (
    <Card className="light">
        <p>{review.quote}</p>
        <div className="review__client">
          <div className="review__client-avatar">
            <img src={review.avatar} alt="Review Avatar" />
          </div>
          <div className="review__client-details">
            <h6>{review.name}</h6>
            <small>{review.profession}</small>
          </div>
        </div>
    </Card>
  )
}

export default Review