
import React from 'react';

function Cybersecurity({ visible }) {
  const imageSize = {
    width: '450px',
    height: '400px',
    marginRight: '20px',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const imageContainerStyle = {
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1>Cybersecurity</h1>
      {visible && (
        <>
          
          <div style={rowStyle}>
            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp'
                alt="Cybersecurity Image 1"
                style={{ ...imageSize, marginBottom: '20px' }}
              />
              <p>What Is Hacking? Types of Hacking & More</p>
            </div>

            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif'
                alt="Cybersecurity Image 2"
                style={{ ...imageSize, marginBottom: '20px' }}
              />
              <p>Cybersecurity Vs Ethical Hacking: Top 10 Differences</p>
            </div>

            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2022/06/8bfd01c18be1b5059bc0d7770d9dabf1.gif'
                alt="Cybersecurity Image 3"
                style={{ ...imageSize, marginBottom: '20px' }}
              />
              <p>Importance and its uses & the growing challenges in 2023!</p>
            </div>
          </div>

          
          <div style={rowStyle}>
            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2022/06/Types-of-Cyber-Security-Attacks-and-How-to-Minimize-the-Impact.jpg'
                alt="Cybersecurity Image 4"
                style={{ ...imageSize, marginBottom: '20px' }}
              />
              <p>8 Different Types of Cybersecurity and Threats Involved</p>
            </div>

            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2021/03/Blog-9-2048x1072.png'
                alt="Cybersecurity Image 5"
                style={{ ...imageSize, marginBottom: '20px' }}
              />
              <p> If yes, how crucial is coding for cybersecurity?</p>
            </div>

            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2021/03/The-Ultimate-%E2%80%A8Cybersecurity-Roadmap-for-Beginners.webp'
                alt="Cybersecurity Image 6"
                style={{ ...imageSize, marginBottom: '20px' }}
              />
              <p>Top 7 Cyber Security Attacks in Real Life</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cybersecurity;
