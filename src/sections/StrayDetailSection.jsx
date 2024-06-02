import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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

export default function StrayDetailSection() {
    const { id } = useParams();
    const stray = strayAnimals.find(animal => animal.id === parseInt(id));

    if (!stray) {
        return <div>Stray animal not found</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
                    <img className="h-64 w-full object-cover rounded-md" src={stray.image} alt={stray.name} />
                    <h2 className="mt-4 text-2xl font-bold text-gray-900">{stray.name}</h2>
                    <p className="text-gray-600">{stray.type}</p>
                    <p className="mt-4 text-gray-600">{stray.description}</p>
                    <p className="mt-4 text-gray-600">Location: {stray.location}</p>
                    <button className="mt-4 w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary">
                                    Adopt {stray.name}
                                </button>
                </div>
                
            </div>
            <Footer />
        </div>
    );
}
