import './Card.css'
import background from '../../src/assets/mount-fuji.png'
export default function Card(props){
    return(
        <div className="card">
            <img src={`../../src/assets/${props.travel.imageUrl}`} className="card--image" alt="" />
            <div className='card--details'>
                <div className="card--location">
                    <img src="../../src/assets/fill 219.png" alt="" className='icon-location'/>
                    <p className='card--country'>{props.travel.location}</p>
                    <a href="#"  className='card--link'>View on Google Maps</a>
                </div>
                <h2 className='details--title'>{props.travel.title}</h2>
                <p className='details--date'>{props.travel.startDate} - {props.travel.endDate}</p>
                <p className='details--des'>{props.travel.description}
                </p>
            </div>
        </div>
    )
}