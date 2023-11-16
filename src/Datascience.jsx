
import React from 'react';

function Datascience({ visible }) {
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
      <h1>Datascience</h1>
      {visible && (
        <>
          
          <div style={rowStyle}>
            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-2048x1072.webp'
                alt="Datascience Image 1"
                style={{ ...imageSize, marginBottom: '20px' }}
              />
              <p>Impact of Certification Programs on Hiring Data Scientists</p>
            </div>

            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp'
                alt="Datascience Image 2"
                style={{ ...imageSize, marginBottom: '20px' }}
              />
              <p>Top Product-Based Companies for Data Science Freshers</p>
            </div>

            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/10/Feature-image-Difference-between-Data-Science-and-Data-Engineering.webp'
                alt="Datascience Image 3"
                style={{ ...imageSize, marginBottom: '20px' }}
              />
              <p>What is the between Data Science and Data Engineering?</p>
            </div>
          </div>

          
          <div style={rowStyle}>
            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/08/Future-of-Data-Science.webp'
                alt="Datascience Image 4"
                style={{ ...imageSize, marginBottom: '20px'}}
              />
              <p>Product-Based Companies for Data Scientists in 2023</p>
            </div>

            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/08/How-Long-Would-It-Take-to-Learn-Data-Science-2048x1072.png'
                alt="Datascience Image 5"
                style={{ ...imageSize, marginBottom: '20px' }}
              />
              <p>Extraordinary Data Science Projects for Beginners  Veterans</p>
            </div>

            <div style={imageContainerStyle}>
              <img
                src='https://www.guvi.in/blog/wp-content/uploads/2023/07/best-data-science-frameworks.webp'
                alt="Datascience Image 6"
                style={{ ...imageSize, marginBottom: '20px' }}
              />
              <p>10 Best Data Science Frameworks in 2023</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Datascience;
