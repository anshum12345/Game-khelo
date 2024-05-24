import React from "react";
import Card from "./Card";

const Projects = () => {
  const projects = [
      {
          imageSrc: "https://th.bing.com/th/id/R.ad2fc33674600a750724b201cfebbbcd?rik=aQMasgmcNcqaDQ&riu=http%3a%2f%2fi.ytimg.com%2fvi%2f2nFDEugTliM%2fmaxresdefault.jpg&ehk=W8%2fr%2fOvVMCfRm68N9Z3HVi9fSZTDgpHEh0wN4RkExxQ%3d&risl=&pid=ImgRaw&r=0",
          title: "Doodle Jump",
        //   tutorialLink: "https://youtu.be/pHFtOYU-a20",
          demoLink: "https://doddle-game.vercel.app/",
          repoLink: "https://github.com/anshum12345/Doddle-game"
      },
      {
          imageSrc: "https://i1.wp.com/operationrainfall.com/wp-content/uploads/2014/01/candy-crush-saga.jpg",
          title: "Candy Crush",
        //   tutorialLink: "https://youtu.be/EmhkLLWAZ8E",
          demoLink: "https://candy-crush-lemon.vercel.app/",
          repoLink: "https://github.com/anshum12345/Candy-crush"
      },
      {
          imageSrc: "https://th.bing.com/th/id/R.554c2649f84023fdbc1dbe9f8d4d9d64?rik=IhkGHF%2bqQ5%2b2Rg&riu=http%3a%2f%2fhdqwalls.com%2fdownload%2f1%2fflappy-birds-hd.jpg&ehk=m9tt6zm6YjXpYTqIvxA%2b6APWRMHLX6vahZJx%2buhM8LU%3d&risl=&pid=ImgRaw&r=0",
          title: "Flappy Bird",
        //   tutorialLink: "https://youtu.be/LTtfoyHxAVU",
          demoLink: "https://flappy-bird-indol-two.vercel.app/",
          repoLink: "https://github.com/anshum12345/flappy-bird"
      },
      {
          imageSrc: "https://th.bing.com/th/id/R.7332e825525290cec9e0d30281db863f?rik=90ZUO%2bmAcDUyyw&riu=http%3a%2f%2fangrygamez.com%2fgames%2fimages%2fdoodle-jump_845x600.jpg&ehk=4jGG3sGw3e3CEEj3jIJ4Ar57llygtqiyeSuQN0Qe3r8%3d&risl=&pid=ImgRaw&r=0",
          title: "Whac A Mole",
        //   tutorialLink: "https://youtu.be/ej8SatOj3V4",
          demoLink: "https://whack-a-mole-delta.vercel.app/",
          repoLink: "https://github.com/anshum12345/whack-a-mole"
      },
      {
          imageSrc: "https://th.bing.com/th/id/R.7332e825525290cec9e0d30281db863f?rik=90ZUO%2bmAcDUyyw&riu=http%3a%2f%2fangrygamez.com%2fgames%2fimages%2fdoodle-jump_845x600.jpg&ehk=4jGG3sGw3e3CEEj3jIJ4Ar57llygtqiyeSuQN0Qe3r8%3d&risl=&pid=ImgRaw&r=0",
          title: "Wordle",
          tutorialLink: "https://youtu.be/ckjRsPaWHX8",
          demoLink: "https://imkennyyip.github.io/Wordle/",
          repoLink: "https://github.com/ImKennyYip/Wordle"
      },
      {
          imageSrc: "https://th.bing.com/th/id/R.7332e825525290cec9e0d30281db863f?rik=90ZUO%2bmAcDUyyw&riu=http%3a%2f%2fangrygamez.com%2fgames%2fimages%2fdoodle-jump_845x600.jpg&ehk=4jGG3sGw3e3CEEj3jIJ4Ar57llygtqiyeSuQN0Qe3r8%3d&risl=&pid=ImgRaw&r=0",
          title: "Sudoku",
          tutorialLink: "https://youtu.be/S4uRtTb8U-U",
          demoLink: "https://imkennyyip.github.io/Sudoku/",
          repoLink: "https://github.com/ImKennyYip/Sudoku"
      },
      {
          imageSrc: "https://th.bing.com/th/id/R.7332e825525290cec9e0d30281db863f?rik=90ZUO%2bmAcDUyyw&riu=http%3a%2f%2fangrygamez.com%2fgames%2fimages%2fdoodle-jump_845x600.jpg&ehk=4jGG3sGw3e3CEEj3jIJ4Ar57llygtqiyeSuQN0Qe3r8%3d&risl=&pid=ImgRaw&r=0",
          title: "2048",
          tutorialLink: "https://youtu.be/XM2n1gu4530",
          demoLink: "https://imkennyyip.github.io/2048/",
          repoLink: "https://github.com/ImKennyYip/2048"
      }
  ];

  return (
      <div id="projects">
          <div className="my-header">Game Khelo</div>
          <br />
          <div className="row">
              {projects.map((project, index) => (
                  <Card key={index} {...project} />
              ))}
          </div>
      </div>
  );
};

export default Projects;