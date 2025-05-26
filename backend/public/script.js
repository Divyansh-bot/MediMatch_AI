async function recommendBrand() {
  const input = document.getElementById('brandInput').value;
  const res = await fetch('/api/recommend', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ input })
  });

  const data = await res.json();
  const container = document.getElementById('brandResult');
  if (data.message) {
    container.innerHTML = `<div class="alert alert-warning">${data.message}</div>`;
  } else {
    container.innerHTML = data.map(d => `
      <div class="alert alert-info">
        <strong>Brand:</strong> ${d.brand} <br>
        <strong>Generic:</strong> ${d.generic} <br>
        <strong>Price:</strong> ${d.price} <br>
        <strong>Uses:</strong> ${d.uses}
      </div>
    `).join('');
  }
}

async function predictMedicine() {
  const symptoms = document.getElementById('symptomInput').value;
  const res = await fetch('http://localhost:8080/predict', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ symptoms })
  });

  const data = await res.json();
  document.getElementById('symptomResult').innerHTML = `
    <div class="alert alert-success"><strong>Suggested Medicine:</strong> ${data.medicine}</div>
  `;
}
