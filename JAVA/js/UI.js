function showList () {
    document.querySelectorAll(".list-group")[0].classList.toggle('show');
};

document.querySelector(".navbar-toggler").addEventListener('click', showList);

function showModal () {
    document.querySelector(".black-bg-start").classList.toggle('black-bg-end');
}

function hideModal () {
    document.querySelector(".black-bg-start").classList.toggle('black-bg-end');
}

document.querySelector("#test-btn").addEventListener('click', showModal);

document.querySelector("#close").addEventListener('click', showModal);