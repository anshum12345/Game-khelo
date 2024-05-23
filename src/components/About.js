import React from "react";

const About = () => {
  const styles = {
    container: {
      padding: "20px",
      fontFamily: "Arial, sans-serif",
    },
    header: {
      fontSize: "4em",
      marginBottom: "20px",
      fontWeight:"bold",
    },
    paragraph: {
      marginBottom: "15px",
      lineHeight: "1.6",
    },
    subscribeLink: {
      color: "#007BFF",
      textDecoration: "none",
    },
    subscribeLinkBold: {
      fontWeight: "bold",
    },
    lastUpdated: {
      textAlign: "right",
      fontStyle: "italic",
      marginTop: "20px",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>About</div>
      <p style={styles.paragraph}>
        Welcome to my web page! Here you will find the list of game programming project available.
        Each project contains links, demo page for you to play around with the end results, and the GitHub repo containing the source code.
        More Games added as soon as possible!
      </p>
      <p style={styles.paragraph}>
        In the future we create some extra game to play and create these games on large scale. Also we create blog on Data Structure and Algorithm using c++ 
        want to stay update and please Visit
        {" "}
        <a href="https://anshumdwivedi.vercel.app/" target="_blank" style={{ ...styles.subscribeLink, ...styles.subscribeLinkBold }}>
          My Portfolio..
        </a>
      </p>
      {/* <p style={styles.lastUpdated}><i>Last Updated: February 11, 2024</i></p> */}
    </div>
  );
};

export default About;
