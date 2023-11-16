
import React from 'react';

function Career({ visible }) {
  const imageSize = {
    width: '450px',
    height: '400px',
    marginRight: '20px',
  };

  const marginBottomStyle = {
    marginBottom: '20px',
  };

  const fourthImageStyle = {
    ...imageSize,
    marginLeft: '30px', 
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const rowStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  return (
    <div style={containerStyle}>
      <h1>Career</h1>
      {visible && (
        <>
          
          <div style={rowStyle}>
            <div>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Product-Based-Companies-for-Product-Managers-in-India.webp'
                alt="Career Image 1"
                style={{ ...imageSize, ...marginBottomStyle }}
              />
              <p>Best 11 Product-Based Companies for Product Managers in India </p>
            </div>
            <div>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/11/top-product-based-companies-for-ai-freshers.webp'
                alt="Career Image 2"
                style={{ ...imageSize, ...marginBottomStyle }}
              />
              <p>Top 13 Product Based Companies for AI Freshers</p>
            </div>
            <div>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Top-Product-based-Companies-for-UIUX-Designers.webp'
                alt="Career Image 3"
                style={{ ...imageSize, ...marginBottomStyle }}
              />
              <p>Top 8 Product-based Companies for UI/UX Designers </p>
            </div>
          </div>

          
          <div style={rowStyle}>
            <div>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Best-Product-Based-Companies-for-Game-Developers.webp'
                alt="Career Image 4"
                style={{ ...imageSize, marginBottom: '20px'}}
              />
              <p> Product-Based Companies for Game Developers in 2023</p>
            </div>
            <div>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/11/Top-Product-Based-Companies-for-AI-Engineers.png'
                alt="Career Image 5"
                style={{ ...imageSize, ...marginBottomStyle }}
              />
              <p>Software Developer vs Software Engineer: Who is More Important</p>
            </div>
            <div>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Excellent-Product-based-Companies-for-UI_UX-Designing.webp'
                alt="Career Image 6"
                style={{ ...imageSize, ...marginBottomStyle }}
              />
              <p>Best Product-Based Companies for AI Engineers in 2023</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Career;
