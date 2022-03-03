
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
                                  
                                   href='http://pepperfrywebsite.herokuapp.com/products/home'
                                    target='_blank'
                                    rel='noreferrer'
                                   
                                    
                                >   <img className='projectimg' src='./project1.png' /></a>
          <h3 className='namehead'><a
                                  
                                   href='http://pepperfrywebsite.herokuapp.com/products/home'
                                    target='_blank'
                                    rel='noreferrer'
                                   
                                    
                                >PepperFry Clone</a></h3>
          <div className='linkdiv' >
              <label className='paniclass'>Tech Stack : HTML| CSS | JavaScript</label>
              
          <a
                                  
                                   href='https://github.com/bhaskar0507/pepperfry.com'
                                    target='_blank'
                                    rel='noreferrer'
                                   
                                    
                                >
                                    <FaGithub className='gitlogo' aria-label='GitHub' />
                                </a>
          </div>
          <span>It is a website where users can see all types of furniture and their prices.</span>

          </div>


        </div>
        <div className='box_img' className='box_pro'>
        <div className='box_img'>
        <a
                                   
                                    href='https://bookmyshow-5a00b.firebaseapp.com/'
                                    target='_blank'
                                    rel='noreferrer'
                                    
                                    
                                >   <img className='projectimg' src='./moo.png' /></a>
         
          <h3 className='namehead2'> <a
                                   
                                    href='https://bookmyshow-5a00b.firebaseapp.com/'
                                    
                                    target='_blank'
                                    rel='noreferrer'
                                    
                                    
                                >Bookmyshow Clone</a> </h3>
          <div className='linkdiv' >
              <label className='paniclass'>Tech Stack : ReactJs | CSS | MongoDb | ExpressJs </label>
          <a
                                   
                                    href='https://github.com/ashwanikpankaj/bookmyshow_clone'
                                    target='_blank'
                                    rel='noreferrer'
                                    
                                    
                                >
                                    <FaGithub className='gitlogo' aria-label='GitHub' />
                                </a>
          </div>
          <span>A website where people can select movies according their choice and seats where they want to sit.</span>
          </div>
        </div>
      
       </div>
        </div>

        </>
    )






}

export default Projectsmy