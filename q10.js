function fetchData(url, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, delay);
    });
}

async function fetchSync() {
    try {
        const data1 = await fetchData('API1', 10000);
        console.log(data1);
        const data2 = await fetchData('API2', 5000);
        console.log(data2);
        const data3 = await fetchData('API3', 7000);
        console.log(data3);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


fetchSync();
