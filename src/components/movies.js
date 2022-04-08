import React from 'react';

const movies = (title, poster_path, overview) => (
    <div className="movie">
        <div className="movie-info"> 
        <h3>{title}</h3>
        
        <div/>
        <div className="movie-over"> 
        <h2>Overview:</h2>
        <p>{overview}</p>

        
        <div/>
        


    </div>
);

export default movies;