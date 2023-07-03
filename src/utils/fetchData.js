//this utility function will be reusing across our codebase
//this iswhere we are gonna make connection with rapid api
//this is an abstraction of a function that is actually going to fetch the data
// FETCH(url, options) :this is built-in fetch api that fetch url and provide additional options
//CONST DATA: if we use fetch and not axios then we need to extract the data by const data=await response.json 

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY, 
      
    }
  };

//abstraction of a function that is actually going to fetch the data

// FETCH :this is built-in fetch api that fetch url and provide additional options
//CONST DATA: if we use fetch and not axios then we need to extract the data by const data 
export const fetchData = async (url, options) => {
    const response =await fetch(url, options);
    const data =await response.json();
    return data;
};

//this fetchData.js is where we make the connection with rapid api

      // rapid api key is hidden inside .env file ie environment variable which is visible to developer only to secure from any unauthorized users
        //after copying the rapidapi key to .env file we need for it to be populated so we stop the terminal by ctrl+c and then again npm start it. then we put process.env....
      