import React, { useState, useEffect } from 'react';
import { SectionWrapper } from '../hoc';
import benu from '../assets/images/Benu_title.webp';
import egs from '../assets/images/EGS_title.webp';
import mms from '../assets/images/MSSalmon_title.webp';
import museum from '../assets/images/MuseumWerdenfels_title.webp';
import unia from '../assets/images/UniAugsburg_title.webp';

const Work = () => {
  const [filter, setFilter] = useState('all'); // Zustand für den Filter

  useEffect(() => {
    const allProjects = document.querySelectorAll('.card'); // Alle Projektkarten im DOM
    if (filter === 'all') {
      // Wenn "Alle Projekte" ausgewählt ist, zeige alle Karten
      allProjects.forEach(card => {
        card.style.display = 'block';
      });
    } else {
      // Filter anwenden: Karten, die nicht der Kategorie entsprechen, ausblenden
      allProjects.forEach(card => {
        if (card.classList.contains(filter)) {
          card.style.display = 'block'; // Karte anzeigen
        } else {
          card.style.display = 'none'; // Karte ausblenden
        }
      });
    }
  }, [filter]); // Abhängigkeit von `filter`, um den Effekt neu auszulösen

  return (
    <section className='h-to-content'>
      <div className="work-menu-container">
        <div className="deco-work">ARB<br />EIT<br />EN</div>
        <div className='work-menu-wrap'>
          <div className="work-menu">
            <li className='menu-text'>
              <button onClick={() => setFilter('grafikdesign')}>Grafik Design</button>
            </li>
            <li className='menu-text'>
              <button onClick={() => setFilter('illustration')}>Illustrationen</button>
            </li>
            <li className='menu-text'>
              <button onClick={() => setFilter('animation')}>Animationen</button>
            </li>
            <li className='menu-text'>
              <button onClick={() => setFilter('andere')}>Andere</button>
            </li>
            <li className='menu-text'>
              <button onClick={() => setFilter('all')}>Alle Projekte</button>
            </li>
          </div>
        </div>
      </div>

      <hr className='line' />

      <div className='flex justify-center items-center h-to-content bg-[#dedede] m-0 py-[70px] rounded-lg'>
        <div id="cards" className="justify-center align-middle">
          {/* Deine statischen Projektkarten bleiben hier */}
          {/* Beispiel für eine Karte */}
          <div className="card animation"> 

            <div className="flex gap-[4px]">

              <div className="card-info">

                <div className="drei-top-info"></div>

                <div className="projekt-kontainer">
              
                  <p className="project-year">2020</p>
                  <p className="project-client">TH Augsburg</p>
                  <hr></hr>
                  <p className="project-discript">2D animierter Kurzfilm als Abschlussarbeit in Kommunikationsdesign</p>
                      
                </div>

                <div className="tags">
                    <div className="tag">Photoshop</div>
                    <div className="tag">After Effects</div>
                    <div className="tag">Premier Pro</div>
                    <div className="tag">TV-Paint</div>
                </div>

              </div>

              <div className="card-pic">
          
                <div className="eins"></div>
                <div className="drei-bot"></div>
                <div className="drei-top"></div>            
            
                <div className="card-content">
                  <div className="card-info-title">
                  <h1>Benu-2D Short</h1>
                  </div>      
                  <img src={benu} alt="Benu-2D Animation" />	
                  <div className="overlay"></div>
                </div>                
            	
              </div>
          	</div>
          </div>

          <div className="card grafikdesign">
            <div className="flex gap-[4px]">

              <div className="card-info">

                <div className="drei-top-info"></div>
                
                <div className="projekt-kontainer">
              
                  <p className="project-year">2020</p>
                  <p className="project-client">TH Augsburg</p>
                  <hr></hr>
                  <p className="project-discript">2D animierter Kurzfilm als Abschlussarbeit in Kommunikationsdesign</p>
                      
                </div>

                <div className="tags">
                    <div className="tag">Photoshop</div>
                    <div className="tag">After Effects</div>
                    <div className="tag">Premier Pro</div>
                    <div className="tag">TV-Paint</div>
                </div>

              </div>

              <div className="card-pic">
          
                <div className="eins"></div>
                <div className="drei-bot"></div>
                <div className="drei-top"></div>            
            
                <div className="card-content">
                  <div className="card-info-title">
                  <h1>Benu-2D Short</h1>
                  </div>      
                  <img src={benu} alt="Benu-2D Animation" />	
                  <div className="overlay"></div>
                </div>                
            	
              </div>
          	</div>
          </div>

          <div className="card illustration">
            <div className="flex  gap-[4px]">

              <div className="card-info">

                <div className="drei-top-info"></div>
                
                <div className="projekt-kontainer">

                  <p className="project-year">2020</p>
                  <p className="project-client">TH Augsburg</p>
                  <hr></hr>
                  <p className="project-discript">2D animierter Kurzfilm als Abschlussarbeit in Kommunikationsdesign</p>
                      
                </div>

                <div className="tags">
                    <div className="tag">Photoshop</div>
                    <div className="tag">After Effects</div>
                    <div className="tag">Premier Pro</div>
                    <div className="tag">TV-Paint</div>
                </div>

              </div>

              <div className="card-pic">

                <div className="eins"></div>
                <div className="drei-bot"></div>
                <div className="drei-top"></div>            

                <div className="card-content">
                  <div className="card-info-title">
                  <h1>Benu-2D Short</h1>
                  </div>      
                  <img src={benu} alt="Benu-2D Animation" />	
                  <div className="overlay"></div>
                </div>                

              </div>
            </div>
          </div>

          <div className="card animation"> 

            <div className="flex gap-[4px]">

              <div className="card-info">

                <div className="drei-top-info"></div>

                <div className="projekt-kontainer">
              
                  <p className="project-year">2020</p>
                  <p className="project-client">TH Augsburg</p>
                  <hr></hr>
                  <p className="project-discript">2D animierter Kurzfilm als Abschlussarbeit in Kommunikationsdesign</p>
                      
                </div>

                <div className="tags">
                    <div className="tag">Photoshop</div>
                    <div className="tag">After Effects</div>
                    <div className="tag">Premier Pro</div>
                    <div className="tag">TV-Paint</div>
                </div>

              </div>

              <div className="card-pic">
          
                <div className="eins"></div>
                <div className="drei-bot"></div>
                <div className="drei-top"></div>            
            
                <div className="card-content">
                  <div className="card-info-title">
                  <h1>Benu-2D Short</h1>
                  </div>      
                  <img src={benu} alt="Benu-2D Animation" />	
                  <div className="overlay"></div>
                </div>                
            	
              </div>
          	</div>
          </div>

          <div className="card grafikdesign ">
            <div className="flex gap-[4px]">

              <div className="card-info">

                <div className="drei-top-info"></div>
                
                <div className="projekt-kontainer">
              
                  <p className="project-year">2020</p>
                  <p className="project-client">TH Augsburg</p>
                  <hr></hr>
                  <p className="project-discript">2D animierter Kurzfilm als Abschlussarbeit in Kommunikationsdesign</p>
                      
                </div>

                <div className="tags">
                    <div className="tag">Photoshop</div>
                    <div className="tag">After Effects</div>
                    <div className="tag">Premier Pro</div>
                    <div className="tag">TV-Paint</div>
                </div>

              </div>

              <div className="card-pic">
          
                <div className="eins"></div>
                <div className="drei-bot"></div>
                <div className="drei-top"></div>            
            
                <div className="card-content">
                  <div className="card-info-title">
                  <h1>Benu-2D Short</h1>
                  </div>      
                  <img src={benu} alt="Benu-2D Animation" />	
                  <div className="overlay"></div>
                </div>                
            	
              </div>
          	</div>
          </div>

          <div className="card illustration andere">
            <div className="flex gap-[4px]">

              <div className="card-info">

                <div className="drei-top-info"></div>
                
                <div className="projekt-kontainer">

                  <p className="project-year">2020</p>
                  <p className="project-client">TH Augsburg</p>
                  <hr></hr>
                  <p className="project-discript">2D animierter Kurzfilm als Abschlussarbeit in Kommunikationsdesign</p>
                      
                </div>

                <div className="tags">
                    <div className="tag">Photoshop</div>
                    <div className="tag">After Effects</div>
                    <div className="tag">Premier Pro</div>
                    <div className="tag">TV-Paint</div>
                </div>

              </div>

              <div className="card-pic">

                <div className="eins"></div>
                <div className="drei-bot"></div>
                <div className="drei-top"></div>            

                <div className="card-content">
                  <div className="card-info-title">
                  <h1>Benu-2D Short</h1>
                  </div>      
                  <img src={benu} alt="Benu-2D Animation" />	
                  <div className="overlay"></div>
                </div>                

              </div>
            </div>
          </div>
          {/* Weitere Karten hier */}
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Work, 'work');
