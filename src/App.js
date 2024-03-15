import { Component } from 'react';
import Features from './Components/Features';
import './App.css';


class App extends Component{
  render(){
    return(
      <>
        <header className='hero-section'>
            <div className='container'>
              <a href='#logo'>CAR<span>ENTAL</span></a>
              <nav className='nav-bar'>
                <ul>
                  <li><a href='#RENT'>RENT</a></li>
                  <li><a href='#SHARE'>SHARE</a></li>
                  <li><a href='#RIDE'>RIDE</a></li>
                  <li><a href='#SERVICE'>SERVICE</a></li>
                  <li><a href='#CONTACT'>CONTACT</a></li>
                </ul>
              </nav>
              <div>
                <button className='button'>
                  Log in
                </button>
                <button className='button'>
                  Log in
                </button>
              </div>
            </div>
        </header>

        <main className='bg'>

          
          <section className='hero-section'>
            <div className='container'>
              <div className='even-columns'>
                <div>
                  <h1>WE RENT THE HIGHEST CALIBER AUTOMOBILES</h1>
                  <p>Experience unrivaled luxury with our elite car rentals – where style meets performance for an extraordinary journey on the road.</p>
                  <div>
                    <button>Rent Now</button>
                    <button>Learn More</button>
                  </div>
                </div>
                <div>
                
                  <img src='images/car.png' alt='hero-img' />
                </div>
              </div>
            </div>
          </section>


          <section>
            <div className='container card-sections'>
                <div className='even-columns'>
                  <div>
                    <h3>Where to Pick Up</h3>
                    <div>
                      <i class="fa-solid fa-location-dot"></i>
                      
                      <input  placeholder='Entere Your location here' />
                    </div>
                  </div>
                  <div>
                    <h3>Pick Up Date</h3>
                    <div>
                      <i class="fa-regular fa-calendar-days"></i>
                      <input  placeholder='Entere Your location here' />
                    </div>
                  </div>
                  <div>
                    <h3>Return Date</h3>
                    <div>
                      <i class="fa-regular fa-calendar-days"></i>
                      <input  placeholder='Entere Your location here' />
                    </div>
                  </div>
                  <div>
                    <input  placeholder='Entere Your location here' />
                    <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </div>              
            </div>
          </section>

          <section className='brand-section'>
            <div className='container '>
              <div className='brand-container'>
                <img width="50" height="50" src="https://img.icons8.com/ios/50/suzuki.png" alt="suzuki"/>
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/000000/volkswagen.png" alt="volkswagen"/>
                <img width="50" height="50" src="https://img.icons8.com/ios/50/bmw.png" alt="bmw"/>
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/honda.png" alt="honda"/>
                <img width="50" height="50" src="https://img.icons8.com/carbon-copy/100/kia.png" alt="kia"/>
                <img width="50" height="50" src="https://img.icons8.com/pastel-glyph/64/tesla-logo.png" alt="tesla-logo"/> 
                <img width="50" height="50" src="https://img.icons8.com/carbon-copy/100/toyota.png" alt="toyota"/>
                <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/mitsubishi.png" alt="mitsubishi"/>
              </div>
            </div>
          </section>

          <section>
            <div className='container'>
              <div>
                <p>How it Works</p>
                <h2>Our Working Steps</h2>
                <div>
                  <div>
                    <i class="fa-solid fa-location-dot"></i>
                    <h3>Choose Location</h3>
                    <p>Discover nearby attractions, receive real-time updates, connect with like-minded individuals, and explore effortlessly with our intuitive location app. Your journey, simplified and personalized, starts here.</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-location-dot"></i>
                    <h3>Pick-Up-Date</h3>
                    <p>Access 'Pickup Dates,' select desired start and end dates, confirm, and effortlessly schedule your tasks. Streamlined and user-friendly, our platform simplifies the process for your convenience.</p>
                  </div>
                  <div>
                    <i class="fa-solid fa-location-dot"></i>
                    <h3>Book Your Car</h3>
                    <p>Effortlessly book your car with us. Choose your vehicle, pick-up, and drop-off dates, confirm, and embark on a smooth journey. Your convenient car reservation starts now.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='cards-section'>
              <div className='container'>
                <div>

                </div>
                <div> 
                  <h2>Feel The Best Experience With Our Rental Deals</h2>
                  <div>
                    <i class="fa-solid fa-handshake"></i>
                    
                    <div>
                      <h3>Deals for every budget</h3>
                      <p>Looking for a car rental for your next trip?
                        <br/>Here are Some tips to help you find
                      </p>
                    </div>
                  </div>
                  <div>
                    <i class="fa-solid fa-hand-holding-dollar"></i>
                    <div>
                      <h3>Best price guaranted</h3>
                      <p>Looking for a car rental for your next trip?
                        <br/>Here are Some tips to help you find
                      </p>
                    </div>
                  </div>
                  <div>
                    <i class="fa-solid fa-gear"></i>
                    <div>
                      <h3>24/7 Support</h3>
                      <p>Looking for a car rental for your next trip?
                        <br/>Here are Some tips to help you find
                      </p>
                    </div>
                  </div>
                </div>
              </div>
          </section>

          <section>
            <div className='container'>
              <p>Best Offer</p>
              <h2>Our Featured Car</h2>
              <div className='container'>
                <Features/>
              </div>
              <button className='button'> View All Cars</button>
            </div>
          </section>

          <section className='card-sections'>
            <div className='container'>
              <div className='even-colunms'>
                <div>
                   <h2>Our Clients Reviews & Testimonials</h2>
                   <p>The majority of our users tell us that readable content distracts readers. The majority of our users tell us that readable</p>
                </div>
              </div>
              <div>
                <img src='https://imgur.com/a/VRIM2fP' alt="img" />
              </div>
            </div>
          </section>
        </main>

        <footer className='card-sections'>
          <div className='container'>
            <div >
              <h3>CARENTAL</h3>
              <p></p>
            </div>
            <div>
              <h3>Our Product</h3>
              <ul>
                <li><a href='#Home'>Driver</a></li>
                <li><a href='#Home'>Car</a></li> 
                <li><a href='#Home'>career</a></li> 
                <li><a href='#Home'>Features</a></li>  
              </ul>
            </div>
            <div>
              <h3>Resources</h3>
              <ul>
                <li><a href='#Home'>Driver</a></li>
                <li><a href='#Home'>Car</a></li> 
                <li><a href='#Home'>career</a></li> 
                <li><a href='#Home'>Features</a></li>  
              </ul>
            </div>
            <div>
              <h3>About Us</h3>
              <ul>
                <li><a href='#Home'>Driver</a></li>
                <li><a href='#Home'>Car</a></li> 
                <li><a href='#Home'>career</a></li> 
                <li><a href='#Home'>Features</a></li>  
              </ul>
            </div>
            <div>
              <h3>Get In Touch</h3>
              <div>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <hr/>
          <p>Privacy | Term & Condition | Copyright 2022 Fluxtree. All right reserved</p>
        </footer>
      </>
    )
  }
}

export default App;
