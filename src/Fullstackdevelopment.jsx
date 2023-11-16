
import React from 'react';

function Fullstackdevelopment({ visible }) {
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

  const secondRowStyle = {
    ...rowStyle,
    paddingRight: '20px', 
  };

  const imageContainerStyle = {
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1>Fullstackdevelopment</h1>
      {visible && (
        <>
          
          <div style={rowStyle}>
            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/11/top-ways-to-assess-soft-skills-in-full-stack-developers.webp'
                alt="Fullstackdevelopment Image 1"
                style={{ ...imageSize, marginBottom: '20px' }}
              />
              <p>Top 10 Product-Based Companies for Full-Stack Developers [2023]</p>
            </div>

            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Full-Stack-Developer-vs-Software-Engineer-.webp'
                alt="Fullstackdevelopment Image 2"
                style={{ ...imageSize, marginBottom: '20px' }}
              />
              <p>Top Differences: Full Stack Developer vs Software Engineer 2023</p>
            </div>

            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Horizontal-vs-Vertical-Scaling-for-Efficient-System-Design.webp'
                alt="Fullstackdevelopment Image 3"
                style={{ ...imageSize, marginBottom: '20px' }}
              />
              <p>Top Differences: Full Stack Developer vs Software Engineer 2023</p>
            </div>
          </div>

          
          <div style={secondRowStyle}>
            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-2048x1072.png'
                alt="Fullstackdevelopment Image 4"
                style={{ ...imageSize, marginBottom: '20px', marginLeft: '50px' }}
              />
              <p>The Top 10 Tools Every Full-Stack Developer Should Master in 2023</p>
            </div>

            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Ultimate-Guide-to-Real-World-Full-Stack-Development-Applications-2048x1072.png'
                alt="Fullstackdevelopment Image 5"
                style={{ ...imageSize, marginBottom: '20px' }}
              />
              <p>The Ultimate Guide to Real-World Full-Stack Development Applications</p>
            </div>

            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/07/best-way-to-learn-full-stack-development-2048x1072.webp'
                alt="Fullstackdevelopment Image 6"
                style={{ ...imageSize, marginBottom: '20px' }}
              />
              <p>Best Ways to Learn Full Stack Development in 2023</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Fullstackdevelopment;
