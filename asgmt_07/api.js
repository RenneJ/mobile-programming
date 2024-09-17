export default function apiCall(endpoint){
  return(
  fetch(`${process.env.EXPO_PUBLIC_API_URL}${endpoint}`,{
      headers: {
        'apikey': `${process.env.EXPO_PUBLIC_API_KEY}`
      }
  })
  .then(response => {
    if (!response.ok)
      throw new Error("Something went wrong:" + response.statusText);
    return response.json();
  })
  )
}
