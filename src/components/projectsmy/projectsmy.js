
import './projectmy.css'
import {
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaYoutube,
    FaBloggerB,
    FaRedditAlien,
    FaStackOverflow,
    FaCodepen,
    FaInstagram,
    FaGitlab,
    FaMediumM,
} from 'react-icons/fa';


function Projectsmy(){

 
    return (
<>
       <div id='projectsmy' className='myproject'>
           <div className='headbox'><h1 className='boxname' >Projects</h1></div>
           <div className='maindis'>
        <div className='box_pro'>
         
          
          <div className='box_img'>
          <a
                                    // href={socialsData.github}
                                   href='http://pepperfrywebsite.herokuapp.com/products/home'
                                    target='_blank'
                                    rel='noreferrer'
                                    // className={classes.socialIcon}
                                    
                                >   <img className='projectimg' src='./project1.png' /></a>
          <h3 className='namehead'><a
                                    // href={socialsData.github}
                                   href='http://pepperfrywebsite.herokuapp.com/products/home'
                                    target='_blank'
                                    rel='noreferrer'
                                    // className={classes.socialIcon}
                                    
                                >PepperFry CLONE</a></h3>
          <div className='linkdiv' >
              <label className='paniclass'>Tech Stack : HTML| CSS | JavaScript</label>
              
          <a
                                    // href={socialsData.github}
                                   href='https://github.com/bhaskar0507/pepperfry.com'
                                    target='_blank'
                                    rel='noreferrer'
                                    // className={classes.socialIcon}
                                    
                                >
                                    <FaGithub className='gitlogo' aria-label='GitHub' />
                                </a>
          </div>
          <span>An online website to purchase Home Decor, Lamps, Furnishings, Homeware, and more at the best prices.</span>

          </div>


        </div>
        <div className='box_img' className='box_pro'>
        <div className='box_img'>
        <a
                                    // href={socialsData.github}
                                    href='https://moo-project.vercel.app/'
                                    target='_blank'
                                    rel='noreferrer'
                                    // className={classes.socialIcon}
                                    
                                >   <img className='projectimg' src='./moo.png' /></a>
         
          <h3 className='namehead2'> <a
                                    // href={socialsData.github}
                                    href='https://moo-project.vercel.app/'
                                    target='_blank'
                                    rel='noreferrer'
                                    // className={classes.socialIcon}
                                    
                                >Moo Clone</a> </h3>
          <div className='linkdiv' >
              <label className='paniclass'>Tech Stack : HTML| CSS | JavaScript</label>
          <a
                                    // href={socialsData.github}
                                    href='https://github.com/sHikha06-max/moo_Project'
                                    target='_blank'
                                    rel='noreferrer'
                                    // className={classes.socialIcon}
                                    
                                >
                                    <FaGithub className='gitlogo' aria-label='GitHub' />
                                </a>
          </div>
          <span>A website where people can choose different cards and select the type of design they want on the cards</span>
          </div>
        </div>
        {/* <div className='box_img' className='box_pro'>
        <div className='box_img'>
          <img className='projectimg' src='./project1.png' />
          <h3 className='namehead'>FASSOS CLONE</h3>
          <div className='linkdiv' >
              <label className='paniclass'>Tech Stack : React | MongDB</label>
          <a
                                    // href={socialsData.github}
                                    target='_blank'
                                    rel='noreferrer'
                                    // className={classes.socialIcon}
                                    
                                >
                                    <FaGithub className='gitlogo' aria-label='GitHub' />
                                </a>
          </div>

          </div>
        </div> */}

       </div>
        </div>

        </>
    )






}

export default Projectsmy