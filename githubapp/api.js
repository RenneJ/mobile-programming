export default function fetchRepos(keyWord){
  return(
  fetch(`${process.env.EXPO_PUBLIC_API_URL}${keyWord}`)
    .then(response => {
      if (!response.ok)
        throw new Error("Something went wrong:" + response.statusText);

      return response.json();
    })
  )
}
