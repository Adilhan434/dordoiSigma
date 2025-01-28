import React from 'react';
import "./Cards.css"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP)

const Cards = () => {

  

  return (
    <div className="container flex gap-20   ">
      <div className="card">
        <img src="https://static.tildacdn.one/tild6263-3832-4239-a137-323934346431/__.png" alt="Qualified teachers icon" />
        <h3 className='font-medium'>Dordoi Plaza</h3>
        <pp className="text-[#959595] font-normal">It offers shops, restaurants, cafes and office space, becoming an important shopping and leisure destination in the city.</pp>
      </div>
      <div className="card">
        <img src="https://salymbekov.com/wp-content/uploads/2020/12/cropped-2.png" alt="Modern University icon" id='university'/>
        <h3 className='font-medium'>Modern University</h3>
        <p className="text-[#959595] font-normal">The university is equipped with the most advanced equipment for securing educational materials</p>
      </div>
      <div className="card">
        <img src="https://upload.wikimedia.org/wikipedia/ru/0/01/%D0%A4%D0%9A_%D0%94%D0%BE%D1%80%D0%B4%D0%BE%D0%B9.png" alt="Clinical bases icon" />
        <h3 className='font-medium'>Football club "Dordoi"</h3>
        <p className="text-[#959595] font-normal">He is a multiple champion and winner of the National Cup, and also regularly participates in international tournaments.</p>
      </div>
    </div>
  );
};

export default Cards;
