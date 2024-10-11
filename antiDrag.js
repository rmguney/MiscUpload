window.addEventListener('dragstart', function (e) {
    if (e.target.tagName.toLowerCase() === 'img') {
        e.preventDefault();
    }
});