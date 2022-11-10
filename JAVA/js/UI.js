function showList () {
    document.querySelector(".list-group").classList.toggle('show');
};

document.querySelector(".navbar-toggler").addEventListener('click', showList);