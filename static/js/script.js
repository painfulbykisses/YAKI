
function showCategory(category) {
    document.querySelectorAll('.menu-category').forEach(function(section) {
        section.style.display = 'none';
    });
    document.getElementById(category).style.display = 'flex';

    document.querySelectorAll('.tab').forEach(function(tab) {
        tab.classList.remove('active');
    });
    document.querySelector(`button[onclick="showCategory('${category}')"]`).classList.add('active');
}
