import express from 'express'
import MovieService from '../src/services/MovieService'

var router = express.Router();

router.get('/movies/:page', (req, res) => {
  var page = req.params.page
  var service = new MovieService()
  var movies

  service.getMovies(page).then(response => {
    movies = response.data
    res.send(movies)
  }).catch(error => {
    res.send('Request failed. Try again later.')
  }) 
});

router.get('/movie/:id', (req, res) => {
  var id = req.params.id
  var service = new MovieService()
  var movie

  service.getMovieById(id).then(response => {
    movie = response.data
    res.send(movie)
  }).catch(error => {
    res.send('Request failed. Try again later.')
  }) 
});


module.exports = router;
