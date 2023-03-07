import React from 'react';
import './Meals.css'



export default function Hero() {

  return (
     <div className='meals'>
        <div className='meals-div'>
            <h4>Special Meals of the day!</h4>
            <p>Check our sepecials of the day and get discounts on all our meals <br/> and swift delivery to what ever location within Ilorin.</p>
        </div>

        <div className='food'>
            <div className='food-box'>
               <div className='food-img'></div>
               <p className='hd'>Stir fry Pasta</p>
               <p>Stir fry pasta yada yada yada <br />because of Sesan</p>
            </div>

            <div className='food-box'>
               <div className='food-img two'></div>
               <p className='hd'>Meat Balls</p>
               <p>Stir fry pasta yada yada yada <br />because of Sesan</p>
            </div>

            <div className='food-box'>
               <div className='food-img three'></div>
               <p className='hd'>Burger Meal</p>
               <p>Stir fry pasta yada yada yada <br />because of Sesan</p>
            </div>

        </div>

        <div className='connect'>
            <div className='notify'>
                <p className='up'>Get notified when we update!</p>
               <p>Get notified when we add new items to our specials menu,<br /> update our price list of have promos!</p>

              
            </div>

            <div className='mail'>

                <input type='email' placeholder='gregphilip@gmail.com'></input>

                <a href='/' className='get-started-btn'>Get notified</a>

            </div>

        </div>

     </div>

);

}