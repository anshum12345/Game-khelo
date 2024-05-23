import React from "react";

const Card = ({ imageSrc, title, tutorialLink, demoLink, repoLink }) => {
  return (
    <>
      <style jsx="true">{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Arial', sans-serif;
        }
        
        .card-container {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 40px;
        }
        
        .card {
          background: #fff;
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.2s ease-in-out;
          width: 100%;
          max-width: 400px;
        }
        
        .card:hover {
          transform: translateY(-10px);
        }
        
        .card-image img {
          width: 100%;
          height: auto;
          border-bottom: 1px solid #ddd;
        }
        
        .card-content {
          padding: 2px;
        }
        
        .card-title {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 10px;
          text-align: center;
        }
        
        .card-action {
          display: flex;
          justify-content: space-around;
          padding: 5px;
          background: #f4f4f4;
          border-top: 1px solid #ddd;
        }
        
        .card-action a {
          text-decoration: none;
          color: #007bff;
          font-weight: bold;
          transition: color 0.3s ease;
        }
        
        .card-action a:hover {
          color: #0056b3;
        }
        
        @media (max-width: 768px) {
          .card-container {
            flex-direction: column;
            align-items: center;
          }
        
          .card {
            margin: 10px;
          }
        }
      `}</style>
      <div className="card-container">
        <div className="card">
          <div className="card-image">
            <img src={imageSrc} alt={title} />
          </div>
          <div className="card-content">
            <h2 className="card-title">{title}</h2>
          </div>
          <div className="card-action">
            {/* <a href={tutorialLink} target="_blank" rel="noopener noreferrer">Tutorial</a> */}
            <a href={demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">Repo</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
