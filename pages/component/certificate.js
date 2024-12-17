class CertificationSection extends HTMLElement {
    constructor() {
      super();
  
      // Attach shadow DOM
      const shadow = this.attachShadow({ mode: 'open' });
  
      // Create the container for the component
      const wrapper = document.createElement('section');
      wrapper.className = 'notice';
  
      // Set the inner HTML for the component
      wrapper.innerHTML = `
        <div class="certification-section">
          <h2>Course Certifications</h2>
          <p>
            Upon successful completion, you'll earn certifications to validate
            your skills!
          </p>
          <div class="certification-cards">
            <div class="certification-card">
              <img src="../../images/cert1.png" alt="Certificate 1" />
              <h3>Data Analytics Certificate</h3>
              <p>
                Showcase your Cyber Security skills with this industry-recognized
                certificate.
              </p>
            </div>
          </div>
        </div>
      `;
  
      // Add styles
      const style = document.createElement('style');
      style.textContent = `
        .certification-section {
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #020041, #243b55);
  color: white;
}

.certification-section h2 {
  font-size: 2.5em;
  margin-bottom: 10px;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.7);
}

.certification-section p {
  font-size: 1.2em;
  margin-bottom: 40px;
  color: rgba(255, 255, 255, 0.8);
}

/* Certification Cards */
.certification-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.certification-card {
  background: #02004100;
  border-radius: 15px;
  overflow: hidden;
  width: 700px;
  padding: 40px;
  text-align: center;
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.certification-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

.certification-card img {
  width: 300px;
  height: auto;
  margin-bottom: 25px;
}

.certification-card h3 {
  font-size: 2em;
  margin-bottom: 10px;
  color: #fff;
  text-shadow: 0 0 20px #ff8c00, 0 0 30px #ff8c00, 0 0 40px #ff8c00;
}

.certification-card p {
  font-size: 1.2em;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 15px;
}
      `;
  
      // Append the style and wrapper to the shadow root
      shadow.appendChild(style);
      shadow.appendChild(wrapper);
    }
  }
  
  // Register the custom element
  customElements.define('certification-section', CertificationSection);
  