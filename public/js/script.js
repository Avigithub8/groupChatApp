const getDataBtn = document.getElementById('getDataBtn');
const result = document.getElementById('result');

getDataBtn.addEventListener('click', () => {
  const url = 'http://localhost:5000/api/data';

  fetch(url, {
    method: 'GET',
    
  })
    .then(response => response.json())
    .then(data => {
      result.textContent = data.message;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      result.textContent = 'An error occurred while fetching data.';
    });
});
