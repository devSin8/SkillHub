import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectById, getCommentsByProjectId } from '../api'; // <-- UPDATED

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Fetch project details
        getProjectById(id) // <-- UPDATED
            .then(res => setProject(res.data))
            .catch(err => console.error(err));

        // Fetch project comments
        getCommentsByProjectId(id) // <-- UPDATED
            .then(res => setComments(res.data))
            .catch(err => console.error(err));
    }, [id]);

    if (!project) return <div>Loading...</div>;

    return (
        <div className="container mt-4">
            <h2>{project.title}</h2>
            <p className="text-muted">by {project.author}</p>
            <img src={project.mediaUrl} className="img-fluid rounded mb-3" alt={project.title} style={{maxWidth: '600px'}} />
            
            <h4>Description</h4>
            <p>{project.description}</p>
            
            <h4>Technologies Used</h4>
            <div>
                {project.technologies.map(tech => (
                    <span key={tech} className="badge bg-info me-1">{tech}</span>
                ))}
            </div>

            <a href={project.demoLink} className="btn btn-success mt-3" target="_blank" rel="noopener noreferrer">View Demo</a>

            <hr />

            <h4>Comments ({comments.length})</h4>
            <div className="list-group">
                {comments.map(comment => (
                    <div key={comment.id} className="list-group-item">
                        <strong>{comment.author}:</strong> {comment.content}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectDetails;
