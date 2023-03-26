import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Heading from './Input';
import Card from './Card';
import adventimg from './adventimg.png'
import Nav from './Nav_footer';
import Social from './socialmedia';


function App() {
  return (
    <section>
      <div className="container logo">
        <Nav/>
      </div>
      <div className='landing-img'>
          <div className='container contact-us'>
              <h1>Contact Us</h1>
          </div>
      </div>

    <div className='container form-section'>
      <div className='row'>
          <div className="col drop-message">
            <p >
            Drop us a message, and we’ll get back to you in no time.
            </p>
          </div>
          <div className="col">
            <Heading className='input-field' typeofinput='text' data="Your Name"/>
            <Heading className='input-field' typeofinput='number' data="Contact Number"/>
            <Heading className='message-box' data="Message"/>
            <button type="button" class="btn btn-outline-dark">Submit</button>
          </div>
          <div className="col">
            <Heading className='input-field' typeofinput='text' data="Organisation Name"/>
            <Heading className='input-field' typeofinput='email' data="Email ID"/>
            <Heading className='input-field'/>
          </div>       
      </div>
    </div>
    <div className='container-fluid'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60299.354638438286!2d72.86713660000001!3d19.164182100000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b707bfffffff%3A0x6ac9c4fc7911bf6b!2sOberoi%20Mall!5e0!3m2!1sen!2sin!4v1679653337437!5m2!1sen!2sin" width="100%" height="500" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    <div className='container advent-chembio'>
        <div className='row'>
            <div className='col card1 d-flex justify-content-end position-relative'>
            <div class="card bg-light mb-3 with-img position-absolute">
                <div class="card-body ">
                  <h5 class="card-title">Advent Chembio Pvt. Ltd.</h5>
                  <p class="card-text">W-288, T.T.C. Industrial Area, MIDC Industrial Area, Rabale, Navi Mumbai, Maharashtra 400701</p>
                  <p class="card-text"><svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.67105 1C2.19737 1 1 2.10094 1 3.45595V19.544C1 20.8991 2.19737 22 3.67105 22H12.3289C13.8026 22 15 20.8991 15 19.544V3.45595C15 2.10094 13.8026 1 12.3289 1H3.67105ZM3.67105 1.6775H12.3289C13.3959 1.6775 14.2632 2.47493 14.2632 3.45595V17.2601H1.73684V3.45595C1.73684 2.47357 2.60411 1.6775 3.67105 1.6775ZM6.50329 3.73913V4.41664H9.47368V3.73913H6.50329ZM1.73684 17.9376H14.2632V19.5467C14.2632 20.5277 13.3959 21.3251 12.3289 21.3251H3.67105C2.60411 21.3251 1.73684 20.5277 1.73684 19.5467V17.9376Z" fill="#828282" stroke="#828282" stroke-width="0.25"/>
                    </svg>
                    +91 7777084837
                  </p>  
                  <Social/>
       
                </div>
            </div>
            </div>
            <div className='col img-advent position-relative'>
                <div className='img-div position-absolute'>
                  <img src={adventimg} className="App-logo" alt="logo" />
                </div>  
            </div>
        </div>

        

        <div className='row contact-cards'>
          <div className='col d-flex justify-content-end'>
            <Card >
            </Card>
          </div>
          <div className='col'>
            <Card/> 
          </div>
        </div>
    </div>

    <div className='container logo footer'>
      <Nav/> 
    </div>
    </section> 
  );

}

export default App;
