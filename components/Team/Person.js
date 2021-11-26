import Image from 'next/image'

import ayomide from '../../public/assets/team/ayomide.jpg';
import peterson from '../../public/assets/team/Peterson Oaikhenah.jpg';
import yusuf from '../../public/assets/team/Adamu Yusuf.jpg';
import adebisi from '../../public/assets/team/Adebisi Adesanya.jpg';
import ayoola from '../../public/assets/team/Ayoola Masha.jpg';
import kator from '../../public/assets/team/gyata kator.jpg';
import segun from '../../public/assets/team/segun.jpg';
import kemi from '../../public/assets/team/Lawal Oluwakemi.jpg';
import daniel from '../../public/assets/team/Daniel Udo.jpg';
import godswill from '../../public/assets/team/Ezeoke Godswill.jpg';
import toba from '../../public/assets/team/Oloruntoba Fasakin.jpg';
import peace from '../../public/assets/team/Pause Media-1.jpg';
import dayo from '../../public/assets/team/Temidayo Idowu Oguntimehin.jpg';
import samuel from '../../public/assets/team/S A M U E L A Y O.jpg';
import lateef from '../../public/assets/team/Habeeb Lateef.jpg';
import kay from '../../public/assets/team/kay.jpg';
//import image9 from '../../public/assets/img/undraw_code_thinking_1jeh.png';


import {useState} from 'react';



function Person() {
    const [person] = useState ([
        {
          id: 1,
          name: "Ayomide Onibokun",
          img: ayomide,
          quote: "If you wanted to change the world you don't need to a open factory you only need to open a laptop.",
          position: "Campus Director",
          twitter: "https://www.twitter.com/ayomideonibokun",
          instagram: "https://www.instagram.com/ayomide_onibokun",
          linkedin: "https://www.linkedin.com/in/ayomide.onibokun",
        },
        {
          id: 2,
          name: "Peterson Oaikhenah",
          img: peterson,
          quote: "Later we excel in the very area of our greatest struggles",
          position: "Technical Director",
          twitter: "https://twitter.com/I_am_nextwebb",
          instagram: "",
          linkedin: "https://www.linkedin.com/in/peterson-oaikhenah-102645144",      
        },
        {
            id: 3,
            name: "Adamu Yusuf",
            img: yusuf,
            quote: "Stay Hungry, Stay Foolish",
            position: "Head Of Operations",
            twitter: "https://www.twitter.com/Iam_Yuzzi",
            instagram: "https://www.instagram.com/Iam_Yuzzi",
            linkedin: "",      
          },
          {
            id: 4,
            name: "Lawal Oluwakemi Simbiat",
            img: kemi,
            quote: "Simplicity is about subtracting the obvious and adding the meaningful",
            position: "Financial Director",
            twitter: "",
            instagram: "",
            linkedin: "https://www.linkedin.com/in/lawal-oluwakemi-41b80a1a1",      
          },
          {
            id: 5,
            name: "Gyata Kator",
            img: kator,
            quote: "Cyber security is not a product but a process",
            position: "Cyber/Marketing Lead",
            twitter: "https://www.twitter.com/K470R",
            instagram: "https://www.instagram.com/K470R",
            linkedin: "https://www.linkedin.com/in/gyata-kator",      
          },
          {
            id: 6,
            name: "Peace Orishadipe",
            img: peace,
            quote: "Whenever an opportunity is being presented to you make sure you seize it",
            position: "Public Relations Officer",
            twitter: "https://www.twitter.com/SeunOrishadipe",
            instagram: "https://www.instagram.com/_Shaewun",
            linkedin: "",      
          },
          {
            id: 7,
            name: "Segun Adesanya",
            img: segun,
            quote: "It has become appallingly obvious that our technology has exeeded our humanity",
            position: "Product Design lead",
            twitter: "https://twitter.com/iamraindas",
            instagram: "https://instagram.com/iamraindas",
            linkedin: "",      
          },
          {
            id: 8,
            name: "Ayoola Masha",
            img: ayoola,
            quote: "Growth should always be constant",
            position: "Mobile Lead",
            twitter: "https://www.twitter.com/ayoola_m7",
            instagram: "",
            linkedin: "https://www.linkedin.com/in/ayoola-masha-57349b13b/",      
          },
          {
            id: 9,
            name: "Ezeoke Chidera Godswill",
            img: godswill,
            quote: "Equipped with his five senses, man explores the universe around him and calls the adventure Science",
            position: "Data Science Lead",
            twitter: "https://www.twitter.com/its_the_will",
            instagram: "",
            linkedin: "https://www.linkedin.com/in/ezeoke-chidera-142166150",      
          },
          {
            id: 10,
            name: "Udo Daniel Isaiah",
            img: daniel,
            quote: "Whenever an opportunity is being presented to you make sure you seize it",
            position: "3D Modeling/Simulation Lead",
            twitter: "https://twitter.com/D745niel?s=09",
            instagram: "",
            linkedin: "https://www.linkedin.com/in/daniel-udo-548425123",      
          },
          {
            id: 11,
            name: "Adesanya Adebisi",
            img: adebisi,
            quote: "Design is the silent ambassador for your brand",
            position: "Mentor",
            twitter: "https://twitter.com/Bisiblogonline",
            instagram: "https://www.instagram.com/michael_da_great8",
            linkedin: "https://www.linkedin.com/in/bi-news-61502a1ab",      
          },
          {
            id: 12,
            name: "Oguntimehin Idowu Temidayo",
            img: dayo,
            quote: "Technology is best when it brings people together",
            position: "Mentor",
            twitter: "https://twitter.com/i_am_Temidayor",
            instagram: "https://www.instagram.com/michael_da_great8",
            linkedin: "https://www.linkedin.com/mwlite/in/oguntimehin-idowu-temidayo-1b275ab0",      
          },
          {
            id: 13,
            name: "Oloruntoba Fasakin",
            img: toba,
            quote: "Keep preparing and working on yourself, opportunities will come, you don't wanna be unprepared in the face of opportunities",
            position: "Mentor",
            twitter: "https://twitter.com/_Teevoc",
            instagram: "",
            linkedin: "https://www.linkedin.com/in/fasakin-oloruntoba",      
          },
          {
            id: 14,
            name: "Ayinla Samuel",
            img: samuel,
            quote: "Design is intelligence made visible",
            position: "Mentor",
            twitter: "https://twitter.com/SamuelAyo__",
            instagram: "",
            linkedin: "https://www.linkedin.com/in/samuel-ayinla-7635191a9",      
          },
          {
            id: 15,
            name: "Kayode Ajayi",
            img: kay,
            quote: "We Can",
            position: "Mentor",
            twitter: "https://twitter.com/naijatechmentor",
            instagram: "https://instagram.com/naijatechmentor",
            linkedin: "https://www.linkedin.com/in/naijatechmentor",      
          },{
            id: 16,
            name: "Habeeb Lateef",
            img: lateef,
            quote: "Technology is best when it brings people together",
            position: "Mentor",
            twitter: "https://twitter.com/devhabeeblateef",
            instagram: "",
            linkedin: "https://www.linkedin.com/in/habeeb-lateef-1507ba203",      
          },
      ])
    return (
        <>
            {person.map((person)=>(
          
       
                <div className="col-lg-3 col-md-6 text-center" key={person.id}>
                    <div className="card mr-2 d-inline-block shadow-lg team-card">
                        <div className="img-card-top">
                           
                              <Image className="img-fluid rounded-circle p-4 team-img" 
                                width={151} height={158} src={person.img} 
                                alt={person.name} placeholder="blur"
                              />

                           
                            
                        </div>
                        
                    
                        <div className="card-body">
                            <div className="card-content-text">
                                <h3 className="card-title text-center  team-name" key={person.id}>{person.name}</h3>
                                <h5 className="card-title text-center text-muted team-position">{person.position}</h5>
                                
                                <p className="card-text">&quot;{person.quote}.&quot;</p>
                            </div>
                            <div className="social-networks">
                                <div className="inner">
                                    <a target="_blank" rel="noopener noreferrer" href={person.instagram} className={`hint--bounce hint--top ${person.instagram === ""? 'hidden-icon' : '' }`} aria-label="Instagram">
                                            
                                        <span className="bi-instagram"></span>
                                    </a>
                                    
                                    <a target="_blank" rel="noopener noreferrer" href={person.linkedin} className={`hint--bounce hint--top ${person.linkedin === ""? 'hidden-icon' : '' }`} aria-label="LinkedIn">
                                            
                                        <span className="bi-linkedin"></span>
                                    </a>
                                    <a target="_blank" rel="noopener noreferrer" href={person.twitter} className={`hint--bounce hint--top ${person.twitter === ""? 'hidden-icon' : '' }`} aria-label="Twitter">
                                            
                                        <span className="bi-twitter"></span>
                                    </a>
                                </div>    
                                            
                            </div>
                        </div>
                        
                        
                    </div>
                </div>

                ))}

        </>
  
          
    );
  }
  
  export default Person;
  
