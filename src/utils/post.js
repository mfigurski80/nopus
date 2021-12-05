export const post = ( url, data ) => new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.addEventListener('load', () => {
        if (req.status === 200) {
            resolve(req.response);
        } else {
            reject(Error(req.statusText));
        }
    });
    req.open('POST', url, true);
    req.setRequestHeader('Content-Type', 'application/json');
    req.send(JSON.stringify(data));
});