import React from 'react'
import './App.css';
import Header from './components/Header';
import NewsNotification from './components/NewsNotification';
import News from './components/News';
document.body.style.backgroundColor = "lightgray";

function App() {
  return (
    
    <div>
      <Header />
      <div style={{paddingBottom:'20px', paddingTop:'10px'}}>
                  {
        NewsNotificationData.map(element =>  <NewsNotification data={element} />)
      }
      </div>
      <News />
    </div>
  );
}

const NewsNotificationData = [
  {
    topic: 'Eilen',
    body: 'Paavi meni nukkumaan klo 20.15.'
  },
  {
    topic: 'Kulttuuri',
    body: 'R-Kelly vihdoin vangittu seksuaalisista syytteistä'
  },
  {
    topic: 'Päivän pläjäys',
    body: 'Pommi posahti Iin Keskustassa'
  }
]

document.body.style.backgroundColor = "lightgray";


export default App;
