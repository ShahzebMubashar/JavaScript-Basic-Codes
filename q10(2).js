function fetchData(url, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, delay);
    });
}

async function fetchAsync() {
    try {
        const [data1, data2, data3] = await Promise.all([
            fetchData('API1', 10000),
            fetchData('API2', 5000),
            fetchData('API3', 7000)
        ]);

        console.log(data1);
        console.log(data2);
        console.log(data3);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the asynchronous function
fetchAsync();
