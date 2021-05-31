let listItems = document.querySelectorAll('li');
listItems.forEach(item => {
    console.log(item);
    item.addEventListener('click', (e) => {
        listItems.forEach(item => item.classList.remove('active'));
        e.classList.add('active');
    });
}) 