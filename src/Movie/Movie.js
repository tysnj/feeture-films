import React from 'react';
import './Movie.css';

const Movie = ({ title, description, id }) =>

 (

 <div className='card'>

      <h3>{title}</h3>

      <p>{description}</p>

     //.... more tags and stuff

    </div>

  )

  export default Movie;