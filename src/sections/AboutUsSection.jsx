/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function AboutUsSection() {
    const missionImage = "/img/mission.jpg";
    const visionImage = "/img/vision.jpg";
    const teamImage = "/img/team.jpg";
    return (
        <div>
            <Navbar/>
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">About Us</h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <div className="flex flex-col md:flex-row md:items-center">
                <img src={missionImage} alt="Mission" className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"/>
                <p className="text-gray-700 md:w-1/2">
                  At STRAYCARE, our mission is to provide care and protection to stray animals, ensuring they receive the necessary medical treatment and finding loving homes for them. We believe every stray deserves a chance to live a happy and healthy life.
                </p>
              </div>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <div className="flex flex-col md:flex-row md:items-center">
                <p className="text-gray-700 md:w-1/2">
                  Our vision is a world where all stray animals are treated with compassion and respect. We aim to create a community where strays are no longer homeless, but rather have the opportunity to be cared for and loved.
                </p>
                <img src={visionImage} alt="Vision" className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4 h-72"/>

              </div>
            </div>
    
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Team</h3>
              <div className="flex flex-col md:flex-row md:items-center">
                <img src={teamImage} alt="Team" className="w-full md:w-1/2 rounded-lg shadow-md mb-4 md:mb-0 md:mr-4"/>
                <p className="text-gray-700 md:w-1/2">
                  The STRAYCARE team is composed of dedicated volunteers, veterinarians, and animal lovers who work tirelessly to rescue, rehabilitate, and rehome stray animals. Our team's commitment and passion drive our efforts to make a positive impact on the lives of stray animals.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
        
        </div>

      );
    
}
