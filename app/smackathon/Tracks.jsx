import React from 'react';
import TrackCard from './components/TrackCard';

export default function Tracks() {

  const sampleTracks = [
    {
      trackIcon: '/images/sprites/trackIcons/education.png',
      trackTitle: 'Education',
      trackDesc: 'These projects increase access to educational resources, facilitate learning in the classroom, or generally make acquiring knowledge a more engaging process. Hacks submitted under this category can range from all-encompassing edtech solutions to projects that bring awareness to a specific topic.'
    },
    {
      trackIcon: '/images/sprites/trackIcons/health.png',
      trackTitle: 'Healthcare',
      trackDesc: 'These projects take on public health challenges, combat health disparities, or assist with maintaining personal wellness. Hacks submitted under this category can range from digital archives of public health information to apps that track the fitness data of an individual user.'
    },
    {
      trackIcon: '/images/sprites/trackIcons/environment.png',
      trackTitle: 'Environment',
      trackDesc: 'These projects use technology to preserve ecological ecosystems or promote sustainable lifestyles. Hacks submitted under this category can range from sweeping solutions to pertinent environmental crises to apps that encourage small sustainable habits'
    },
    {
      trackIcon: '/images/sprites/trackIcons/finance.png',
      trackTitle: 'Finance',
      trackDesc: 'These projects use technology to drive economic growth, generate employment opportunities, attract investments and achieve economic sustainability. Hacks submitted under this category can range from solutions to mitigate risks, revolutionize fintech, make transactions more secure and handle existing financial crisis.'
    },
    {
      trackIcon: '/images/sprites/trackIcons/web3.png',
      trackTitle: 'Web3',
      trackDesc: 'These projects use technology to revolutionize the digital landscape, impacting data security with online platforms and building robust decentralized applications. Hacks in this category may address data ownership, privacy, censorship resistance, interoperability, and environmental sustainability.'
    },
    {
      trackIcon: '/images/sprites/trackIcons/agriculture.png',
      trackTitle: 'Agriculture',
      trackDesc: 'These projects use technology to impact various factors, including crop cultivation, livestock management, and agribusiness development. Hacks in this category can address agricultural crises, promote eco-friendly farming techniques, and support sustainable agribusiness practices.'
    },
    {
      trackIcon: '/images/sprites/trackIcons/openinnvo.png',
      trackTitle: 'Open Innovation',
      trackDesc: 'Open innovation projects leverage technology and collaboration to foster innovation across various sectors and industries. Projects submitted under this category can encompass a wide range of initiatives, from open-source software development to collaborative research efforts and ecosystem-building activities.'
    }
  ];


  return (
    <div className="relative w-full bg-gradient-to-b from-blue-500 via-blue-400 to-blue-300">
      <p className="text-5xl text-center font-bold text-white mt-16">Tracks</p>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 p-4">
          {
            sampleTracks.map((item, idx) => {
              return (
                <div key={idx} className="w-full flex items-center justify-center mt-10 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
                  <TrackCard trackTitle={item.trackTitle} trackDesc={item.trackDesc} trackIcon={item.trackIcon} />
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}