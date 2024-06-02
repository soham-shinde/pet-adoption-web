import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';

export default function AdoptStray() {
    const history = useNavigate();
    const strayAnimals = [
        {
            id: 1,
            name: 'Buddy',
            type: 'Dog',
            description: 'A friendly dog looking for a new home.',
            location: 'New York, NY',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            name: 'Whiskers',
            type: 'Cat',
            description: 'A playful cat that loves to cuddle.',
            location: 'Los Angeles, CA',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            name: 'Tweety',
            type: 'Bird',
            description: 'A chirpy bird that enjoys singing.',
            location: 'Chicago, IL',
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 4,
            name: 'Rex',
            type: 'Dog',
            description: 'A loyal dog that loves to play fetch.',
            location: 'Houston, TX',
            image: 'https://via.placeholder.com/150'
        },
    ];

    const handleCardClick = (id) => {
        history(`/stray/${id}`);
      };
    return (
        <div>
            <Navbar dark={false}/>
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Adopt a Stray Animal</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {strayAnimals.map((animal) => (
                        <div key={animal.id} className="bg-white rounded-lg shadow-md overflow-hidden" onClick={() => handleCardClick(animal.id)}>
                            <img className="h-48 w-full object-cover" src={animal.image} alt={animal.name} />
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900">{animal.name}</h3>
                                <p className="text-gray-600">{animal.type}</p>
                                <p className="mt-2 text-gray-600">{animal.description}</p>
                                <p className="mt-2 text-gray-600">Location: {animal.location}</p>
                                <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary">
                                    Adopt {animal.name}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}
