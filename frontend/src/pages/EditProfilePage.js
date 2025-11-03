import React, { useState } from 'react';
import axios from 'axios';

const EditProfilePage = () => {
    const [name, setName] = useState('');
    const [collegeRegisterNumber, setCollegeRegisterNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [languages, setLanguages] = useState('');
    const [githubUrl, setGithubUrl] = useState('');
    const [linkedinUrl, setLinkedinUrl] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const profileData = {
            name,
            collegeRegisterNumber,
            phoneNumber,
            languages,
            githubUrl,
            linkedinUrl
        };

        try {
            await axios.post('http://localhost:8080/api/profile', profileData);
            alert('Profile saved successfully!');
        } catch (error) {
            console.error("Error saving profile:", error);
            alert('Failed to save profile. Please try again.');
        }
    };

    return (
        <div className="container mt-4" style={{ maxWidth: '800px' }}>
            <h2>Edit Your Profile</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name"
                        value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="regNo" className="form-label">College Register Number</label>
                    <input type="text" className="form-control" id="regNo"
                        value={collegeRegisterNumber} onChange={(e) => setCollegeRegisterNumber(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phone"
                        value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="languages" className="form-label">Languages (comma-separated)</label>
                    <input type="text" className="form-control" id="languages"
                        placeholder="e.g., Java, Python, JavaScript"
                        value={languages} onChange={(e) => setLanguages(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="github" className="form-label">GitHub Profile URL</label>
                    <input type="url" className="form-control" id="github"
                        value={githubUrl} onChange={(e) => setGithubUrl(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="linkedin" className="form-label">LinkedIn Profile URL</label>
                    <input type="url" className="form-control" id="linkedin"
                        value={linkedinUrl} onChange={(e) => setLinkedinUrl(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Save Profile</button>
            </form>
        </div>
    );
};

export default EditProfilePage;