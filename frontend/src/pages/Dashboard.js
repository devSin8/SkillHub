import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/projects')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => console.error("Error fetching projects:", error));
    }, []);

    return (
        <div className="container mt-4">
            <h1 className="mb-4">Project Dashboard</h1>
            <div className="row">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;