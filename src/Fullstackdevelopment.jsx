
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
              <p>Top Differences: Full Stack Developer vs Software Engineer</p>
            </div>
          </div>

          
          <div style={secondRowStyle}>
            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/08/The-Top-10-Tools-Every-Full-Stack-Developer-Should-Master-in-2023-2048x1072.png'
                alt="Fullstackdevelopment Image 4"
                style={{ ...imageSize, marginBottom: '20px', marginLeft: '20px' }}
              />
              <p>The Top 10 Tools Every Full-Stack Developer Should Master</p>
            </div>

            <div style={imageContainerStyle}>
              <img
                src='https://miro.medium.com/v2/resize:fit:1400/0*cl7fc6pt1MHjIF4K.png'
                alt="Fullstackdevelopment Image 5"
                style={{ ...imageSize, marginBottom: '20px' }}
              />
              <p>The Ultimate Guide to Real-World Full-Stack Development</p>
            </div>

            <div style={imageContainerStyle}>
              <img
                src='data:image/jpeg;base64,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'
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
