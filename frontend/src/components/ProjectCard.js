import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = ({ project }) => {
    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100">
                <img src={project.mediaUrl} className="card-img-top" alt={project.title} />
                <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text text-muted">by {project.author}</p>
                    <p className="card-text">{project.description}</p>
                    <div>
                        {project.technologies.map(tech => (
                            <span key={tech} className="badge bg-secondary me-1">{tech}</span>
                        ))}
                    </div>
                </div>
                <div className="card-footer d-flex justify-content-between align-items-center">
                    <Link to={`/project/${project.id}`} className="btn btn-primary">View Details</Link>
                    <span>👍 {project.upvotes}</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;