const fetchPoints = () =>
    fetch(
        `${process.env.REACT_APP_API_URL}/points`,
        {
            method: 'GET'
        })
        .then(response => response.json())

const fetchWelcome = (key) =>
    fetch(
        `${process.env.REACT_APP_API_URL}/welcome/${key}`,
        {
            method: 'GET'
        })
        .then(response => response.json())

export { fetchPoints, fetchWelcome }