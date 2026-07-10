// Header bakground change on scroll //

window.addEventListener('scroll',function(){
    const header = document.getElementById('header');
    if (window.scrollY > 20) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
document.querySelector('.mobile-menu-btn').addEventListener
('click',function(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active'); 
})