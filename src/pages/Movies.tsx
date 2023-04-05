import { useEffect, useState } from 'react';
import data from '../MovieData.json';
import { Movie } from '../movie/movie';

const MDS = data.MovieData;

function Movies() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const rsp = await fetch('https://localhost:4000/movie');
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovie();
  }, []);

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
                <th>Movie ID</th>
                <th>Category</th>
                <th>Title</th>
                <th>Year</th>
                <th>Director</th>
                <th>Rating</th>
                <th>Edited</th>
                <th>Lent To</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {movieData.map((m) => (
                <tr>
                  <td>{m.movieId}</td>
                  <td>{m.category}</td>
                  <td>{m.title}</td>
                  <td>{m.year}</td>
                  <td>{m.director}</td>
                  <td>{m.rating}</td>
                  <td>{m.edited}</td>
                  <td>{m.lentTo}</td>
                  <td>{m.notes}</td>
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
