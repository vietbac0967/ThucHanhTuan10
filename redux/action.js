export const getUsers = () => async () => {
  try {
    const response = await fetch(
      "https://653f4b7b9e8bd3be29e02fc1.mockapi.io/users"
    );
    if (response.ok) {
      const data = await response.json();
      dispatch({ type: "SET_USERS", payload: data });
    } else {
      console.error("Error fetching data from the API");
    }
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
};
