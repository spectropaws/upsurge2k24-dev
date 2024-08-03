import React from 'react';
import styles1 from './Demo2.module.css';
import upwall from '../images/pacman/downwalls.svg'; 

const Demo2 = () => {
  return (
    <div className='main bg-black'>
        <img src={upwall} alt="Upwall Logo"  className={`mx-auto mb-20 -4 ${styles1.imageSize}`} /> 
        <h1 className={styles1.heading}>Rules and Guidelines for Smackathon 2024</h1>
    <div className={styles1.container}>
      
      <div className={`${styles1.content} ${styles1.customBorder} relative mx-8 md:mx-[6-rem]  my-5`}>
        <ul className={`${styles1.list} text-justify`}>
          <li className="my-5 md:my-3">A team consists of a minimum of 5 members.</li>
          <li className="my-5 md:my-3">A team access pass will be distributed to the team upon registration, which shall be used for future reference.</li>
          <li className="my-5 md:my-3">The ideas presented by the teams should be original and not protected by means of patents, copyrights, or technical publications by anyone.</li>
          <li className="my-5 md:my-3">All official communication will be conducted through the Smackathon email. Participants are advised to monitor all folders in their email accounts.</li>
          <li className="my-5 md:my-3">Registrations must be completed through the Upsurge website by the [registration deadline] to secure a spot.</li>
          <li className="my-5 md:my-3">No responsibility will be held by the Smackathon Team for any late, lost, or misdirected entries.</li>
          <li className="my-5 md:my-3">Problem statements will be provided on the day the hackathon starts.</li>
          <li className="my-5 md:my-3">All projects must align with the pre-announced Smackathon theme or problem statement.</li>
          <li className="my-5 md:my-3">Participants must not engage in any malicious or harmful activities.</li>
          <li className="my-5 md:my-3">Meals and rest areas will be provided onsite only if accommodation is taken.</li>
          <li className="my-5 md:my-3">According to YCCE Policy, no female participants are allowed to stay overnight. After 9 pm, they must leave the campus but can rejoin at 6 am the next day. Those from outside Nagpur will stay at YCCE girls hostel, and the organizing team will manage their accommodation.</li>
          <li className="my-5 md:my-3">Rules and guidelines are subjected to change as per the organizing team.</li>
        </ul>
        <div className={styles1.pacman}>
          <div className={styles1.mouth}></div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Demo2;
