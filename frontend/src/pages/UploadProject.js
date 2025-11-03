import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UploadProject = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [technologies, setTechnologies] = useState('');
    const [demoLink, setDemoLink] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents the browser from reloading the page

        const newProject = {
            title,
            description,
            // Split the comma-separated string into an array of technologies
            technologies: technologies.split(',').map(tech => tech.trim()),
            demoLink,
            author: "CurrentUser", // Hardcoded for now
            upvotes: 0 // New projects start with 0 upvotes
        };

        try {
            // Send the new project data to the backend
            await axios.post('http://localhost:8080/api/projects', newProject);
            alert('Project submitted successfully!');
            navigate('/'); // Redirect to the dashboard after successful submission
        } catch (error) {
            console.error("Error submitting project:", error);
            alert('Failed to submit project. Please try again.');
        }
    };

    return (
        <div className="container mt-4" style={{ maxWidth: '800px' }}>
            <h2>Upload a New Project</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Project Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea
                        className="form-control"
                        id="description"
                        rows="4"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                 <div className="mb-3">
                    <label htmlFor="tech" className="form-label">Technologies (comma-separated)</label>
                    <input
                        type="text"
                        className="form-control"
                        id="tech"
                        placeholder="e.g., Java, React, SQL"
                        value={technologies}
                        onChange={(e) => setTechnologies(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="link" className="form-label">Code/Demo Link</label>
                    <input
                        type="url"
                        className="form-control"
                        id="link"
                        value={demoLink}
                        onChange={(e) => setDemoLink(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit Project</button>
            </form>
        </div>
    );
};

export default UploadProject;