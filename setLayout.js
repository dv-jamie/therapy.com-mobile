const header = document.querySelector('#header');
const gnb = document.querySelector('#gnb');
const snb = document.querySelector('#snb');
const footer = document.querySelector('#footer');

const pathname = window.location.pathname

fetch('/component/header.html')
    .then(res => res.text())
    .then(data => header.innerHTML = data);

fetch('/component/gnb.html')
    .then(res => res.text())
    .then(data => gnb.innerHTML = data);

fetch('/component/footer.html')
    .then(res => res.text())
    .then(data => footer.innerHTML = data);

if(pathname.includes('/page/personal')) {
    fetch('/component/snb-personal.html')
        .then(res => res.text())
        .then(data => snb.innerHTML = data);
} else if(pathname.includes('/page/business')) {
    fetch('/component/snb-business.html')
        .then(res => res.text())
        .then(data => snb.innerHTML = data);
}