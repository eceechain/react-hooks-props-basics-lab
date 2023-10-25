import React from 'react';

const Home = ({ name, age, bio, githubLink, linkedinLink }) => {
 return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
      <p>GitHub: <a href={githubLink}>{githubLink}</a></p>
      <p>LinkedIn: <a href={linkedinLink}>{linkedinLink}</a></p>
    </div>
 );
};

export default Home;