import React from "react";

const Card = ({ imageSrc, title, demoLink, repoLink }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '10px',
    padding: '20px',
    margin: '20px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
    backgroundColor: '#fff',
  };

  const imgStyle = {
    width: '100%',
    borderRadius: '10px',
  };

  const titleStyle = {
    fontSize: '1.5em',
    margin: '10px 0',
    color: '#333',
  };

  const linksStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '15px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007BFF',
    padding: '10px 20px',
    borderRadius: '5px',
    border: '1px solid #007BFF',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const linkHoverStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
  };

  const cardHoverStyle = {
    transform: 'scale(1.05)',
  };

  return (
    <div
      className="card"
      style={cardStyle}
      onMouseOver={e => {
        e.currentTarget.style.transform = cardHoverStyle.transform;
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <img src={imageSrc} alt={title} style={imgStyle} />
      <h3 style={titleStyle}>{title}</h3>
      <div className="links" style={linksStyle}>
       
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseOver={e => {
            e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor;
            e.currentTarget.style.color = linkHoverStyle.color;
          }}
          onMouseOut={e => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = linkStyle.color;
          }}
        >
          Demo
        </a>
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          onMouseOver={e => {
            e.currentTarget.style.backgroundColor = linkHoverStyle.backgroundColor;
            e.currentTarget.style.color = linkHoverStyle.color;
          }}
          onMouseOut={e => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = linkStyle.color;
          }}
        >
          Repo
        </a>
      </div>
    </div>
  );
};

export default Card;
