// Fetch data from REST Countries API
fetch("https://restcountries.com/v3.1/all")
  .then(response => response.json())
  .then(data => {
    // Filter countries from Asia continent
    const asiaCountries = data.filter(country => country.region === "Asia");

    // Filter countries with population less than 2 lakhs
    const smallPopulationCountries = data.filter(country => country.population < 200000);

    // Print details of each country
    asiaCountries.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital}, Flag: ${country.flags[0]}`);
    });

    // Calculate total population of countries
    const totalPopulation = data.reduce((total, country) => total + country.population, 0);
    console.log(`Total Population: ${totalPopulation}`);

    // Find country that uses US dollars as currency
    const usDollarCountry = data.find(country => country.currencies.USD !== undefined);
    if (usDollarCountry) {
      console.log(`Country using US Dollars: ${usDollarCountry.name.common}`);
    } else {
      console.log("No country uses US Dollars as currency.");
    }
  })
  .catch(error => console.error("Error fetching data:", error));
