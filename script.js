document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('change-text');
    const title = document.getElementById('main-title');
    const description = document.getElementById('description');

    button.addEventListener('click', function() {
        title.textContent = 'Text Changed!';
        description.textContent = 'The text has been successfully changed using JavaScript.';
    });
});