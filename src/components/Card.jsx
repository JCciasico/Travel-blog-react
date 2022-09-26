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
            <div className='card--details'>
                <div className="card--location">
                    <img src="../../src/assets/fill 219.png" alt="" className='icon-location'/>
                    <p className='card--country'>JAPAN</p>
                    <a href="#"  className='card--link'>View on Google Maps</a>
                </div>
                <h2 className='details--title'>Mount Fuji</h2>
                <p className='details--date'>12 Jan,2021 - 24 Jan,2021</p>
                <p className='details--des'>Mount Fuji is the tallest mountain 
                in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is 
                the single most popular tourist site in Japan, for both Japanese 
                and foreign tourists.
                </p>
            </div>
        </div>
    )
}