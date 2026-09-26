async function getGithubUser() {
  try {
    const response = await fetch("https://api.github.com/users/github");

    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`);
    }

    const data = await response.json();

    console.log("Object from Github: ", data);
    console.log("Name: ", data.name, "id: ", data.id);
  } catch (error) {
    console.log("Error on server:", error.message);
  }
}

getGithubUser();

async function getMultipleRates() {
  try {
    const [usdResponse, eurResponse] = await Promise.all([
      fetch("https://api.exchangerate/usd"),
      fetch("https://api.exchangerate/eur"),
    ]);

    const [usdData, eurData] = await Promise.all([
      usdResponse.json(),
      eurResponse.json(),
    ]);

    console.log("USD: ", usdData);
    console.log("EUR: ", eurData);
  } catch (error) {
    console.log("Error: ", error.message);
  }
}
