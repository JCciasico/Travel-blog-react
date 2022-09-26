import './Card.css'
import background from '../../src/assets/mount-fuji.png'
export default function Card(){
    return(
        <div className="card">
            <div className='image' style={
                {
                    backgroundImage: `url(${background})`
                }
            }>
            </div>
            <div className="card--location">
                <img src="../../src/assets/fill 219.png" alt="" className='icon-location'/>
                <p className='card--country'>JAPAN</p>
                <a href="#"  className='card--link'>View on Google Maps</a>
            </div>
        </div>
    )
}