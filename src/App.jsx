import './App.css'
import Header from './components/Header'
import Card from './components/Card'
import Traveldata from './data/Traveldata'

function App() {
  const travel = Traveldata.map(travel => {
    return <Card
            key = {travel.id}
            travel = {travel}
          />
  })

  return (
    <div className="App">
      <Header />
      <div className="card-container">
          {travel}
      </div>
    </div>
  )
}

export default App
