export const getAuth = async (data: any) => {
  try {
    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data.payload),
    });

    const auth = await response.json();

    if (response.status !== 200) return { status: response.status, error: auth.error}

    return auth;
  } catch (error) {
    return error;
  }
};

export const getUsers = async () => {
  try {
    const response = await fetch("https://reqres.in/api/users");
    const fullData = await response.json();
    const users = fullData.data;
    return users;
  } catch (error) {
    return error;
  }
};
