import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
// Change with API key wannna see wether exist or not
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNDljOWU0YjJjY2QxM2FlZGNmMGM1OTczMDc0YTE4ZSIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M6eBWHRPkmJiPkiWJtcyOHBNDCdDZjowYtFgMhScOww"

const headers = {
    Authorization: `Bearer ${TMDB_TOKEN} `
}
// () 
// $
// for API code watch it from 30 mins
// https://developer.themoviedb.org/reference/movie-now-playing-list
// Loot at the right side on LANGUAGE and change it to JS then change to axios 
// you will see QUERY PARAMS are params 
// url is endpoint

// if you export variable like this then import in curly bracer {fetchDataFromApi}
export const fetchDataFromApi = async (url, params) =>  {
 try{
const {data} = await axios.get(`${BASE_URL}/${url}`, {
  headers: headers,
  params: params
}) 
return data
 }
 
//  if tried but you were not sucessful then it will catch error
 catch(error) {
    console.log(error, "error hai bhai" );
    return error;
 } 
}



// Upcoming movies 

export const getUpcomingMovies = async () => {
  // 4. Try-Cath Block for Error Handling
  try {
    // Asked upcoming movies from API and return data if not then error 
    const response = await axios.get(`${config.baseURL}/upcoming`, {
      // We are providing a token cause API is private. If you have a token, then you can use it.
      headers: {
        Authorization: `Bearer ${config.Token}`
      }
    });

    const data = response.data;
    const status = response.status;

    return { success: true, data: data, status: status };
  } catch (error) {
    console.log(error);
    return {success: false, data:data , status:status}
  }
};