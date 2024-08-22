// write refetch wrapper for the refetch function.

// retryFetch should try call url retryFetch times
// if it fails it should return last exception
// each call should last longer than timeout

//fetch('http://localhost:8743').then(res => res.json()).catch(err => console.log(err))

async function retryFetch(url, { retryFetch, timeout }) {

    function timoutFetch(url, timeout) {
        return Promise.race([
            fetch(url).then(res => {
                if (!res.ok) {
                    throw new Error(`Network response was not ok: ${res.statusText}`);
                }
                return res.json()
            }),
            new Promise((_, reject) => { setTimeout(() => reject(new Error('fetch timout')), timeout) })
        ])
    }

    let lastError = null;

    for(let i = 0; i < retryFetch; i++){
        try {
            return await timoutFetch(url, timeout)
        } catch(err) {
            console.log(err.message)
            lastError = err;
        }
    }

    return lastError;

}

retryFetch('http://localhost:3000', { retryFetch: 5, timeout: 2000 }).then(res => { console.log('we ended up with:', res.message || res); });

