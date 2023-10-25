import React from 'react';

const Links = ({githubLink, linkedinLink}) => {
    return (
        <div>
            <h3>Links</h3>
            <a href={githubLink}></a>
            <a href={linkedinLink}q></a>
        </div>
    );
};

export default Links;