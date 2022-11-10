function changeParagraph(contents) {
    document.querySelector(".para").innerHTML = contents;
    document.querySelector('.alert-box').style.display = "block";
}

function closePara() {
    document.querySelector(".alert-box").style.display = "none";
}

document.querySelector(".button-close").addEventListener('click', closePara);