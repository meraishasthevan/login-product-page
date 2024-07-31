import React from 'react';
import {Link} from 'react-router-dom';

function About (){
    return(
        <div className='abt-backimg'>
          <div className='perfume-flex'>
              <h1 className='col-6'>About</h1>
             <nav className='perfume-flex col-6 about-top'>
                 <Link className='link-abt' to='/home'>Home</Link>
                 <Link className='link-abt' to='/dashboard'>Dashboard</Link>
                
            </nav>
            </div>
              <div className='about-image'>
                <div>
                <h1>"Memory is the perfume of the soul"</h1>
                <h2>"Perfume is a poem to be breathed in"</h2>
                <h3>"Perfume is the confessed trace of a passion"</h3>
                <h4>"The beautiful perfume is the one that gives us a shock"</h4>
                <h5>"The glance is often deceptive, not the nose"</h5>
                <h6>"Smell is the intelligence of flowers"</h6>
                </div>
                </div>
                <div className='about-para'>
                  <h2>Men's Perfume Logos</h2>
                  <p>With Men’s perfume, logos often take geometric and dark-colored designs. You will often see stocky shapes as well. One famous example is Blue de Chanel which uses a neat sans serif typography and a dark background.

                    There are different ways that you can create a masculine identity for your products. You have the option to incorporate masculine lettering by using bold serif fonts. Adding illustrations of strong characters like gentlemen or creatures such as lions can be a great focal point.

                    However, make sure that you keep it simple. You don’t want to oversaturate your logo with 

                    Take a look at this section to learn more.</p>
                <div className='abt-img1'> 
                   <img src="images/men perfume.png " alt="Loading" /> 
                   <h2>Men's Perfume</h2>
                </div>
                
              </div>
              <div className='about-para'>
                <h2>Women's Perfume Logos</h2>
                <p>Subtlety is one of the most common characteristics of feminine perfume design. This allows the perfume to speak for itself. Often, you will not see overwhelming graphics for this type of brand. 

                 Design elements such as flower illustrations, circles, and calligraphy are used for this kind of logo. You will notice that a lot of curvy visuals are involved in women’s logos. That is because femininity is associated with circular and eye-catching shapes. 

                 Additionally, colors are also a great tool to use to tap into femininity. You can use pink, white, red, and other warm shades in your brand mark. </p>
                <div  className='abt-img2'>
                   <img src="images/women perfume.png" alt="Loading"/>
                   <h2>Women's Perfume</h2>
                </div>
              </div>

              <div className='about-para'>
                <h2>Gender Neutral Perfume Logos</h2>
                <p>Unisex perfume appeals to people for various reasons. It is a versatile product that doesn’t gender scent. Plus, it can be shared and make someone appear all the more mysterious. 

                  A unisex brand’s logo can take various forms, such as text-based or even something boldly artistic like an abstract design. You want to use neutral images that aren’t associated with society’s common notions when it comes to gender expression. 

                  Like the famous unisex brand Le Labo, you could opt for something simple and minimalist. Avoid using colors such as pink or blue to signal your audience that your products are for everyone. 

                  Get more inspiration on gender-neutral brand identities below.</p>
                  <div  className='abt-img3'>
                     <img src="images/gender perfume.png" alt="Loading"/>
                     <h2>Gender Neutral Perfume</h2>
                  </div>
              </div>
        </div>
      );
}
export default About;