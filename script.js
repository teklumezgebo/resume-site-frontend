const VISITOR_API_URL = 'https://${{ secrets.AWS_API_ID }}.execute-api.us-east-1.amazonaws.com/resume/visitors';

fetch(VISITOR_API_URL)
  .then(res => res.json())
  .then(data => {
    document.getElementById('visitor-count').textContent = data.count;
  })
  .catch(() => {
    document.getElementById('visitor-count').textContent = 'n/a';
  });