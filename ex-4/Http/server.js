require('https')
    .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
        let data = '';
        resp.on('data', (chunk) => {data += chunk})
        resp.on('end', () => {console.log(JSON.parse(data).title)})
    })
    .on("error", (err) => {console.log("Error: " + err.message)})