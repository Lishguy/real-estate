import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here (e.g., API call)
        console.log({ name, email, password });
        // Optionally redirect after signup
        history.push('/'); // Redirect to home page after signup
    };

    const handleRedirect = () => {
        history.push('/'); // Redirect to home page
    };

    return (
        <div className='container mx-auto py-20 px-6 md:px-20 lg:px-32'>
            <h1 className='text-3xl font-bold text-center mb-6'>Sign Up</h1>
            <form onSubmit={handleSubmit} className='max-w-md mx-auto bg-white p-6 rounded-lg shadow-md'>
                <div className='mb-4'>
                    <label className='block text-gray-700 mb-2' htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className='border border-gray-300 rounded-lg w-full p-2'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 mb-2' htmlFor='email'>Email</label>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='border border-gray-300 rounded-lg w-full p-2'
                    />
                </div>
                <div className='mb-4'>
                    <label className='block text-gray-700 mb-2' htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className='border border-gray-300 rounded-lg w-full p-2'
                    />
                </div>
                <button type='submit' className='bg-blue-500 text-white rounded-lg px-4 py-2 w-full'>
                    Sign Up
                </button>
            </form>
            <button onClick={handleRedirect} className='mt-4 text-blue-500 underline'>
                Back to Home
            </button>
        </div>
    );
};

export default Signup;
