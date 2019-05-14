import axios from 'axios'

export default class MovieService {

	getMovies(page) {
		return axios.get('https://api.themoviedb.org/3/movie/upcoming?page='+ page +'&api_key=1f54bd990f1cdfb230adb312546d765d')
	}

	getMovieById(id) {
		return axios.get('https://api.themoviedb.org/3/movie/'+ id +'?api_key=1f54bd990f1cdfb230adb312546d765d')
	}
}