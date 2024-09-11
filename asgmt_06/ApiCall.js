export default function fetchRecipes(searchText){
  return(
    fetch(`${process.env.EXPO_PUBLIC_API_URL}${searchText}`)
      .then(response => {
        if (!response.ok)
          throw new Error("Something went wrong:" + response.statusText);
        const resp = response.json();
        return resp;
      })
  );
};
