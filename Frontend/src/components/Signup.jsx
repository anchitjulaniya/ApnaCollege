import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { link } from '../utils/link';

function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        // Basic validation
        if (!formData.name || !formData.email || !formData.password) {
            setError('Please fill all the fields.');
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(`${link}/api/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || 'Signup failed');
                setLoading(false);
                return;
            }

            alert('Signup successful! Please login.');
            setLoading(false);
            navigate('/login'); // Redirect to login after successful signup

        } catch (err) {
            console.error('Error during signup:', err);
            setError('Internal server error');
            setLoading(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen w-screen">
            <div className="sm:p-6 sm:border-8 sm:border-red-500">
                <div className="border border-black w-[300px] min-h-[300px] rounded-md bg-white py-5 px-4">
                    <h1 className="text-center font-semibold text-2xl">Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label><br />
                            <input
                                className="border border-black outline-none py-1 px-2 w-full rounded-lg"
                                type="text"
                                id="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="email">Email</label><br />
                            <input
                                className="border border-black outline-none py-1 px-2 w-full rounded-lg"
                                type="email"
                                id="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                            />
                        </div>
                        <br />
                        <div>
                            <label htmlFor="password">Password</label><br />
                            <input
                                className="border border-black outline-none py-1 px-2 w-full rounded-lg"
                                type="password"
                                id="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={e => setFormData({ ...formData, password: e.target.value })}
                            />
                        </div>
                        <br />
                        {error && <p className="text-red-500">{error}</p>}
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-600 text-white py-2 px-4 rounded-md w-full mt-4 cursor-pointer disabled:opacity-50"
                        >
                            {loading ? 'Signing up...' : 'Sign Up'}
                        </button>
                    </form>
                    <br />
                    <span className="flex justify-center">
                        <button
                            className="text-blue-700 cursor-pointer"
                            onClick={() => navigate('/login')}
                            type="button"
                        >
                            Login
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Signup;
