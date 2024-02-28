// 1. Import axios from axios library
import axios from 'axios';

// 2. API Configuration:

// In API, the thing that is changing is endPoint{cause it always at the endpoint}
// BbaseURL: https://api.themoviedb.org/3
// : https://api.themoviedb.org/3
const config = {
  baseURL: 'https://api.themoviedb.org/3/movie',
  Token: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWRjYzZmZWE0YjE0YmU3Njc1ZTgxMzNjZmViY2NlZiIsInN1YiI6IjY1MGRiMzRjM2Q3NDU0MDEzODdhYzhiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.invVJQqNIxcKdXNOLBVJ6UDCC99Kh0euwIFHXuUVmT4'
};

// 3. Defining funtion to get UpcomingMoves and using Async funtion


// API is asynchronous, so we will use async funtion, which means it doesn't go time to time{time ke saath nhi chalta}.
// API can show data in 5s, 15s, or 1min, so we will use async programming{JS will wait till data come}.


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

export const getNowPlayingMovies = async () => {
  // 4. Try-Cath Block for Error Handling
  try {
    // Asked upcoming movies from API and return data if not then error 
    const response = await axios.get(`${config.baseURL}/now_playing`, {
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

// 


export const getPopularMovies = async () => {
  // 4. Try-Cath Block for Error Handling
  try {
    // Asked upcoming movies from API and return data if not then error 
    const response = await axios.get(`${config.baseURL}/popular`, {
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

// export const getTopRatedMovies = async () => {
//   // 4. Try-Cath Block for Error Handling
//   try {
//     // Asked upcoming movies from API and return data if not then error 
//     const response = await axios.get(`${config.baseURL}/top_rated`, {
//       // We are providing a token cause API is private. If you have a token, then you can use it.
//       headers: {
//         Authorization: `Bearer ${config.Token}`
//       }
//     });

//     const data = response.data;
//     const status = response.status;

//     return { success: true, data: data, status: status };
//   } catch (error) {
//     console.log(error);
//     return {success: false, data:data , status:status}
//   }
// };

// export const getTopRatedMovies = async () => {
//   // 4. Try-Cath Block for Error Handling
//   try {
//     // Asked upcoming movies from API and return data if not then error 
//     const response = await axios.get(`${config.baseURL}/top_rated`, {
//       // We are providing a token cause API is private. If you have a token, then you can use it.
//       headers: {
//         Authorization: `Bearer ${config.Token}`
//       }
//     });

//     const data = response.data;
//     const status = response.status;

//     return { success: true, data: data, status: status };
//   } catch (error) {
//     console.log(error);
//     return {success: false, data:data , status:status}
//   }
// };
