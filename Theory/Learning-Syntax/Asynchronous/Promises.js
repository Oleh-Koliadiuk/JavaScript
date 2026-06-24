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
