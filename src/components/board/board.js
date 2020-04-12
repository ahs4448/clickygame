import React, { Component } from 'react';
import './style.css';
import ScoreNav from './ScoreNav/ScoreNav'

const shuffleArray = arr => (
  arr
    .map(a => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map(a => a[1])
);

alert("Click on an image to earn points, but don't click on any more than once!")

const bannerImg = './images/Bomberman_Logo.png';
const reactLogo = './images/react-1-logo.png'
class ClickyApp extends Component {
  state = {
    totalScore:0,
    whiteScore: 0,
    blackScore: 0,
    blueScore: 0,
    aquaScore: 0,
    thunderScore: 0,
    plasmaScore: 0,
    chaosScore: 0,
    magnetScore: 0,
    louieScore: 0,
    pinkScore: 0,
    greenScore: 0,
    mermScore: 0,

    initialChars: [
      {
        name: 'Black Bomber',
        img: './images/BlackBomber.jpg'
      },
      {
        name: 'Thunder Bomber',
        img: './images/ThunderBomber.png'
      },
      {
        name: 'Aqua Bomber',
        img: './images/Aqua.jpg'
      },
      {
        name: 'Blue Bomber',
        img: './images/KidBlue.png'
      },
      {
        name: 'Chaos Bomber',
        img: './images/Chaos_bomber.png'
      },
      {
        name: 'Green Bomber',
        img: './images/Green_Bomber.jpg'
      },
      {
        name: 'White Bomber',
        img: './images/icon.png'
      },
      {
        name: 'Magnet Bomber',
        img: './images/MagnetBomber.png'
      },
      {
        name: 'Plasma Bomber',
        img: './images/PlasmaBomber.png'
      },
      {
        name: 'mermaid Bomber',
        img: './images/Mermaid_Bomber.jpg'
      },
      {
        name: 'Louie',
        img: './images/Louie.png'
      },
      {
        name: 'Pretty Bomber',
        img: './images/Pink.png'
      },
    ]
  }

  handleRearrange = (e) => {
    const initialChars = shuffleArray(this.state.initialChars)

    if (e.target.id === "White Bomber") {
      this.state.whiteScore += 1
    }

    if (e.target.id === "Black Bomber") {
      this.state.blackScore += 1
    }

    if (e.target.id === "Blue Bomber") {
      this.state.blueScore += 1
    }

    if (e.target.id === "Aqua Bomber") {
      this.state.aquaScore += 1
    }

    if (e.target.id === "Thunder Bomber") {
      this.state.thunderScore += 1
    }

    if (e.target.id === "Chaos Bomber") {
      this.state.chaosScore += 1
    }

    if (e.target.id === "Plasma Bomber") {
      this.state.plasmaScore += 1
    }

    if (e.target.id === "Magnet Bomber") {
      this.state.magnetScore += 1
    }
    if (e.target.id === "Louie") {
      this.state.louieScore += 1
    }
    if (e.target.id === "Pretty Bomber") {
      this.state.pinkScore += 1
    }
    if (e.target.id === "Green Bomber") {
      this.state.greenScore += 1
    }
    if (e.target.id === "mermaid Bomber") {
      this.state.mermScore += 1
    }
    ////handle losing game logic

    if (this.state.whiteScore === 2) {
      alert('ya lose')
    }

    if (this.state.blackScore === 2) {
      alert('ya lose')
    }

    if (this.state.blueScore === 2) {
      alert('ya lose')
    }

    if (this.state.aquaScore === 2) {
      alert('ya lose')
    }
    if (this.state.plasmaScore === 2) {
      alert('ya lose')
    }

    if (this.state.chaosScore === 2) {
      alert('ya lose')
    }

    if (this.state.magnetScore === 2) {
      alert('ya lose')
    }

    if (this.state.thunderScore === 2) {
      alert('ya lose')
    }
    if (this.state.greenScore === 2) {
      alert('ya lose')
    }
    if (this.state.mermScore === 2) {
      alert('ya lose')
    }
    if (this.state.pinkScore === 2) {
      alert('ya lose')
    }
    if (this.state.louieScore === 2) {
      alert('ya lose')
    }else{
      this.state.totalScore++
    }

  

    this.setState({
      initialChars,
    })

  }

  render() {
    return (
    
      <div className ="container">
       
        
        <nav>   <img src={bannerImg} id="banner"/> <p> Score:{this.state.totalScore}</p> </nav> 
        <div className='row'>
          
          {this.state.initialChars.map(bomby => {
            return (

              <div className="col-md-3">
                
                <div className="somethin"></div>
                <img src={bomby.img} alt="" className="img-thumbnail first" id={bomby.name} onClick={this.handleRearrange} />
              </div>
            )

          })}
         
        </div>
        <nav> <img src={bannerImg}  id="banner"/> <img src={reactLogo} id="logo"/> </nav> 
      </div>
      
    )
  }

}

export default ClickyApp
