function showSidebar() {
    console.log("Show sidebar function called");
    document.querySelector('.sidebar').style.display="flex";
}

function hideSidebar() {
    console.log("Hide sidebar function called");
    document.querySelector('.sidebar').style.display="none";
}
        document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#bars').addEventListener('click', showSidebar);
    document.querySelector('.sidebar .fa-close').addEventListener('click', hideSidebar);
});