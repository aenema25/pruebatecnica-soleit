const logInCall = (user, password) =>
    fetch(`${process.env.REACT_APP_API_URL}/login`,
        {
            method: 'POST',
            body: JSON.stringify({
                user: user,
                password: password
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())

export default logInCall
