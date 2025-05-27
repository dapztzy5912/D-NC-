document.getElementById('promptForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const prompt = document.getElementById('prompt').value;
  const size = document.getElementById('size').value;
  const resultDiv = document.getElementById('result');

  resultDiv.innerHTML = '<p>Loading image...</p>';

  try {
    const response = await fetch('/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt, size })
    });

    const data = await response.json();

    if (data.url) {
      resultDiv.innerHTML = `<img src="${data.url}" alt="Generated Image" />`;
    } else {
      resultDiv.innerHTML = '<p>Error generating image.</p>';
    }
  } catch (error) {
    console.error(error);
    resultDiv.innerHTML = '<p>Something went wrong!</p>';
  }
});