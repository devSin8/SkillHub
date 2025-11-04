import React, { useState, useEffect } from 'react';
import { getAllProjects } from '../api';
import ProjectCard from '../components/ProjectCard';

const Dashboard = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        getAllProjects()
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
