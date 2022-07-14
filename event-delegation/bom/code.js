const grandParentNode = document.getElementById('grand_parent');
const parentNode = document.getElementById('parent');
const childNode = document.getElementById('child');

// Capture
grandParentNode.addEventListener('click', () => {
    console.log('grandParentNode');
}, true);

// Bubble
parentNode.addEventListener('click', () => {
    console.log('parent');
}, false);

// Capture
childNode.addEventListener('click', () => {
    console.log('child');
}, true);
