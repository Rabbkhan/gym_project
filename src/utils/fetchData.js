



    export   const ExerciseOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '984628608fmsh65f7bd4963cfdcbp1060ebjsn3204b90a69bd',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };




export const fetchData = async (url, options) =>{

    const response = await fetch (url, options);
    const data = await response.json();
    return data;
}