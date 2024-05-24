import React, { useState } from "react";
import Card from "./Card";
import Modal from "./Modal";
// import { border, textDecoration } from "@chakra-ui/react";
const Projects = () => {
    const [showRules, setShowRules] = useState(false);
  
    const projects = [
      {
        imageSrc: "https://th.bing.com/th/id/R.ad2fc33674600a750724b201cfebbbcd?rik=aQMasgmcNcqaDQ&riu=http%3a%2f%2fi.ytimg.com%2fvi%2f2nFDEugTliM%2fmaxresdefault.jpg&ehk=W8%2fr%2fOvVMCfRm68N9Z3HVi9fSZTDgpHEh0wN4RkExxQ%3d&risl=&pid=ImgRaw&r=0",
        title: "Doodle Jump",
        demoLink: "https://doddle-game.vercel.app/",
        repoLink: "https://github.com/anshum12345/Doddle-game"
      },
      {
        imageSrc: "https://i1.wp.com/operationrainfall.com/wp-content/uploads/2014/01/candy-crush-saga.jpg",
        title: "Candy Crush",
        demoLink: "https://candy-crush-lemon.vercel.app/",
        repoLink: "https://github.com/anshum12345/Candy-crush"
      },
      {
        imageSrc: "https://th.bing.com/th/id/R.554c2649f84023fdbc1dbe9f8d4d9d64?rik=IhkGHF%2bqQ5%2b2Rg&riu=http%3a%2f%2fhdqwalls.com%2fdownload%2f1%2fflappy-birds-hd.jpg&ehk=m9tt6zm6YjXpYTqIvxA%2b6APWRMHLX6vahZJx%2buhM8LU%3d&risl=&pid=ImgRaw&r=0",
        title: "Flappy Bird",
        demoLink: "https://flappy-bird-indol-two.vercel.app/",
        repoLink: "https://github.com/anshum12345/flappy-bird"
      },
      {
        imageSrc: "https://th.bing.com/th/id/R.7332e825525290cec9e0d30281db863f?rik=90ZUO%2bmAcDUyyw&riu=http%3a%2f%2fangrygamez.com%2fgames%2fimages%2fdoodle-jump_845x600.jpg&ehk=4jGG3sGw3e3CEEj3jIJ4Ar57llygtqiyeSuQN0Qe3r8%3d&risl=&pid=ImgRaw&r=0",
        title: "Whac A Mole",
        demoLink: "https://whack-a-mole-delta.vercel.app/",
        repoLink: "https://github.com/anshum12345/whack-a-mole"
      },
      
      
    //   {
    //     imageSrc: "https://th.bing.com/th/id/R.7332e825525290cec9e0d30281db863f?rik=90ZUO%2bmAcDUyyw&riu=http%3a%2f%2fangrygamez.com%2fgames%2fimages%2fdoodle-jump_845x600.jpg&ehk=4jGG3sGw3e3CEEj3jIJ4Ar57llygtqiyeSuQN0Qe3r8%3d&risl=&pid=ImgRaw&r=0",
    //     title: "2048",
    //     tutorialLink: "https://youtu.be/XM2n1gu4530",
    //     demoLink: "https://imkennyyip.github.io/2048/",
    //     repoLink: "https://github.com/ImKennyYip/2048"
    //   }
    ];
  
    const containerStyle = {
      padding: '20px',
      textAlign: 'center',
    };
  
    const headerStyle = {
      fontSize: '3em',
      color: '#333',
      marginBottom: '20px',
    };
  
    const rowStyle = {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      transition: 'opacity 0.5s',
    };
  
    const rulesLinkStyle = {
      marginTop: '20px',
      fontSize: '2em',
      color: '#007BFF',
      cursor: 'pointer',
      textDecoration: 'none',
    };
  
    const modalContentStyle = {
      textAlign: 'left',
    };
  
    return (
      <div id="projects" style={containerStyle}>
        <div style={headerStyle}>Game Khelo</div>
        <div style={rulesLinkStyle} onClick={() => setShowRules(true)}>
          Rules
        </div>
        <Modal show={showRules} onClose={() => setShowRules(false)}>
          <div style={modalContentStyle}>
            <p>Welcome to Game Khelo! Here are the rules for the games:</p>
            <ul>
              <li><strong>Doodle Jump:</strong> Use the arrow keys to move the character and avoid obstacles. Try to reach the highest score possible.</li>
              <li><strong>Candy Crush:</strong> Match three or more candies to clear them from the board. Complete the objectives to progress through the levels.</li>
              <li><strong>Flappy Bird:</strong> Click or press the space bar to make the bird fly. Navigate through the pipes without hitting them to score points.</li>
              <li><strong>Whac A Mole:</strong> Click on the moles as they appear to score points. Be quick, as they disappear fast!</li>
              {/* <li><strong>Wordle:</strong> Guess the word within six attempts. Each guess must be a valid five-letter word. The color of the tiles will change to show how close your guess was to the word.</li>
              <li><strong>Sudoku:</strong> Fill in the grid with numbers from 1 to 9, making sure no number repeats in any row, column, or 3x3 grid.</li>
              <li><strong>2048:</strong> Combine tiles with the same number to create higher numbers. Try to reach the 2048 tile!</li> */}
            </ul>
          </div>
        </Modal>
        <div className={showRules ? 'hidden' : ''} style={rowStyle}>
          {projects.map((project, index) => (
            <Card key={index} {...project} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;