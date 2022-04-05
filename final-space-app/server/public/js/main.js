const locationForm = document.querySelector('form');
const search = document.querySelector('input');
const msg = document.querySelector('#msg');
const card = document.querySelector('#card');

locationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const locationId = search.value;
    msg.textContent = 'Loading...';
    fetch(`https://finalspaceapi.com/api/v0/location/${locationId}`).then(response => {
        
    })
})