documen.getElementById('contactFrom').addEventListener('submit', async function (e) {
    e.preventDefalut();

    const from = e.target;
    const data = new URLSearchParams(new FormData(from));

    const response = await fetch('/contact', {
        method: 'POST',
        body: data,
        headers: {'Content-Type': 'application/x-www-from-urlencoded'}
    });

    const text = await response.text();
    document.getElementById('responseMsg').textContent = text;
    from.reset();
    })
