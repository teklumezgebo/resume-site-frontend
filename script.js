// Swap in your real API Gateway URL once it's deployed
const VISITOR_API_URL = 'https://YOUR-API-ID.execute-api.YOUR-REGION.amazonaws.com/visitors';

fetch(VISITOR_API_URL)
  .then(res => res.json())
  .then(data => {
    document.getElementById('visitor-count').textContent = data.count;
  })
  .catch(() => {
    document.getElementById('visitor-count').textContent = 'n/a';
  });
