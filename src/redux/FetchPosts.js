const api = 'fb1ead6c4d4ca798ad497b4e31e7160d';

const fetchAllPosts = async () => {
  const response = await fetch(`https://pro.openweathermap.org/data/2.5/forecast/climate?q=${fetchCity}&appid=${api}`);
    return await response.json();
};