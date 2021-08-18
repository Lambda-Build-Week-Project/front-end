import '../../src/App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Register from './Register';

import thumb1 from '../copyOfImages/gallery/thumbs/01.jpg'
import thumb2 from '../copyOfImages/gallery/thumbs/02.jpg'
import thumb3 from '../copyOfImages/gallery/thumbs/03.jpg'
import thumb4 from '../copyOfImages/gallery/thumbs/04.jpg'
import thumb8 from '../copyOfImages/gallery/thumbs/08.jpg'
import thumb9 from '../copyOfImages/gallery/thumbs/09.jpg'
import thumb10 from '../copyOfImages/gallery/thumbs/10.jpg'
import flowerPot from '../copyOfImages/icons/flowerPot.png'

function Home() {
  
  return (
    <div className="App">

      <header className="App-header">
          <section className="intro">
            <ul className="actions">
              <li>
                <Link to="/register">
                  <button className="button primary">Register</button>
                </Link>
                <br />
                <button className="button primary">Sign In</button>
              </li>
            </ul>
          </section>
        </header>


        <div id="wrapper"> 


          <section>
            <header>
              <h2> Simplify Your Gardening </h2>
              {/* I tried to allign this text with the line below in the center but some other styles in App.css interfere
              style={{textAlign: 'center'}} */}
            </header>
            <div className="content">
              <p>
                <strong>Track</strong> water and soil and learn about your 
                plants and handy gardening tricks.
              </p>
              <ul className="feature-icons">
                <li> <img width='10%' src={flowerPot}/>
                  Water</li>
                <li> <img width='10%' src={flowerPot}/>
                  Soil</li>
                <li> <img width='10%' src={flowerPot}/>
                  Light</li>
                <li> <img width='10%' src={flowerPot}/>
                  Temperature</li>
                <li> <img width='10%' src={flowerPot}/>
                  Pots</li>
                <li> <img width='10%' src={flowerPot}/>
                  Plant</li>
              </ul>
              <p>
                Vehicula ultrices sed ultricies condimentum. Magna sed etiam
                consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et
                dolor libero, feugiat magna tempus, sed et lorem adipiscing.
              </p>
            </div>
          </section>


          <section>

            <header>
              <h2>Get in touch</h2>
            </header>

              <form>
                <div className="fields">

                  <div className="field half">
                    <input type="text" name="name" 
                    id="name" placeholder="Name" />
                  </div>

                  <div className="field half">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>

                  <div className="field">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      rows="7"
                    ></textarea>
                  </div>

                  <div>
                    <ul className="actions">
                      <li>
                        <input
                          type="submit"
                          value="Send Message"
                          className="button primary"
                        />
                      </li>
                    </ul>
                  </div>

                </div>
              </form>


            <footer>
              <ul className="items">
                <li>
                  <h3>Email</h3>
                  <a href="#">information@untitled.ext</a>
                </li>
              </ul>
            </footer>

          </section>

        </div>
    </div>
  );
}

export default Home;
