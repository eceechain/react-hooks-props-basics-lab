import React from 'react';
import Links from './Links';

const About = ({ bio, links }) => {
 return (
    <div>
      <h2>About Me</h2>
      <p>{bio}</p>
      <Links githubLink={links.githubLink} linkedinLink={links.linkedinLink} />
    </div>
 );
};

export default About;