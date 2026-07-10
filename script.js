const VISITOR_API_URL = 'https://t9czi3e9s2.execute-api.us-east-1.amazonaws.com/resume/visitors';

fetch(VISITOR_API_URL)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    document.getElementById('visitor-count').textContent = data.body;
  })
  .catch((error) => {
    document.getElementById('visitor-count').textContent = 'n/a';
    console.log(error)
  });