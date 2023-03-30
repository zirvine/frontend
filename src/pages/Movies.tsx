import { useState } from 'react';
import data from '../MovieData.json';

const MDS = data.MovieData;

function Movies() {
  return (
    <>
      <br></br>
      <div className="text-center">
        <h1>Joel Hilton's Movie Collection</h1>
      </div>
      <br></br>
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Category</th>
                <th>Edited</th>
              </tr>
            </thead>
            <tbody>
              {MDS.map((m) => (
                <tr>
                  <td>{m.Title}</td>
                  <td>{m.Year}</td>
                  <td>{m.Director}</td>
                  <td>{m.Rating}</td>
                  <td>{m.Category}</td>
                  <td>{m.Edited}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-2"></div>
      </div>
    </>
  );
}

export default Movies;
