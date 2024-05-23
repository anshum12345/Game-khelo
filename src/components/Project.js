import React from "react";
import Card from "./Card";

const Projects = () => {
  const projects = [
      {
          imageSrc: "https://th.bing.com/th/id/R.7332e825525290cec9e0d30281db863f?rik=90ZUO%2bmAcDUyyw&riu=http%3a%2f%2fangrygamez.com%2fgames%2fimages%2fdoodle-jump_845x600.jpg&ehk=4jGG3sGw3e3CEEj3jIJ4Ar57llygtqiyeSuQN0Qe3r8%3d&risl=&pid=ImgRaw&r=0",
          title: "Doodle Jump",
          tutorialLink: "https://youtu.be/pHFtOYU-a20",
          demoLink: "https://imkennyyip.github.io/doodle-jump/",
          repoLink: "https://github.com/ImKennyYip/doodle-jump"
      },
      {
          imageSrc: "https://th.bing.com/th/id/R.7332e825525290cec9e0d30281db863f?rik=90ZUO%2bmAcDUyyw&riu=http%3a%2f%2fangrygamez.com%2fgames%2fimages%2fdoodle-jump_845x600.jpg&ehk=4jGG3sGw3e3CEEj3jIJ4Ar57llygtqiyeSuQN0Qe3r8%3d&risl=&pid=ImgRaw&r=0",
          title: "Breakout",
          tutorialLink: "https://youtu.be/EmhkLLWAZ8E",
          demoLink: "https://imkennyyip.github.io/breakout/",
          repoLink: "https://github.com/ImKennyYip/breakout"
      },
      {
          imageSrc: "https://th.bing.com/th/id/R.7332e825525290cec9e0d30281db863f?rik=90ZUO%2bmAcDUyyw&riu=http%3a%2f%2fangrygamez.com%2fgames%2fimages%2fdoodle-jump_845x600.jpg&ehk=4jGG3sGw3e3CEEj3jIJ4Ar57llygtqiyeSuQN0Qe3r8%3d&risl=&pid=ImgRaw&r=0",
          title: "Pong",
          tutorialLink: "https://youtu.be/LTtfoyHxAVU",
          demoLink: "https://imkennyyip.github.io/pong/",
          repoLink: "https://github.com/ImKennyYip/pong"
      },
      {
          imageSrc: "https://th.bing.com/th/id/R.7332e825525290cec9e0d30281db863f?rik=90ZUO%2bmAcDUyyw&riu=http%3a%2f%2fangrygamez.com%2fgames%2fimages%2fdoodle-jump_845x600.jpg&ehk=4jGG3sGw3e3CEEj3jIJ4Ar57llygtqiyeSuQN0Qe3r8%3d&risl=&pid=ImgRaw&r=0",
          title: "Whac A Mole",
          tutorialLink: "https://youtu.be/ej8SatOj3V4",
          demoLink: "https://imkennyyip.github.io/whac-a-mole/",
          repoLink: "https://github.com/ImKennyYip/whac-a-mole"
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