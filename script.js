document.getElementById('imageForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const prompt = document.getElementById('prompt').value;
    
    // Enviar la solicitud al backend Flask
    const response = await fetch('https://jairo5000.pythonanywhere.com/api/generate_image', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt: prompt })
    });
    
    const result = await response.json();
    
    // Mostrar la imagen o un mensaje de error
    const imageContainer = document.getElementById('imageContainer');
    if (result.image_url) {
        imageContainer.innerHTML = `<img src="${result.image_url}" alt="Imagen Generada">`;
    } else {
        imageContainer.innerHTML = `<p>Error: ${result.error}</p>`;
    }
});