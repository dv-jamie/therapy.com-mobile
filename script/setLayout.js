const header = document.querySelector('#header');
const gnb = document.querySelector('#gnb');
const snb = document.querySelector('#snb');
const footer = document.querySelector('#footer');

const pathname = window.location.pathname

fetch('./component/header.html')
    .then(res => res.text())
    .then(data => header.innerHTML = data);

fetch('./component/gnb.html')
    .then(res => res.text())
    .then(data => gnb.innerHTML = data);

fetch('./component/footer.html')
    .then(res => res.text())
    .then(data => footer.innerHTML = data);

if(pathname === '/personal.html') {
    fetch('./component/personal/snb.html')
        .then(res => res.text())
        .then(data => snb.innerHTML = data);
} else if(pathname === '/business.html') {
    fetch('./component/business/snb.html')
        .then(res => res.text())
        .then(data => snb.innerHTML = data);
}