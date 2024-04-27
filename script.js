document.addEventListener("DOMContentLoaded", function () {
    var div1 = document.getElementById('div1');
    var div2 = document.getElementById('div2');

    div2.classList.add('hidden');

    setTimeout(function () {
        div1.classList.remove('visible');
        div1.classList.add('hidden');
        div2.classList.remove('hidden');
        div2.classList.add('visible');
    }, 10000);

    setInterval(function () {
        if (div1.classList.contains('visible')) {
            div1.classList.remove('visible');
            div1.classList.add('hidden');
            div2.classList.remove('hidden');
            div2.classList.add('visible');
        } else {
            div2.classList.remove('visible');
            div2.classList.add('hidden');
            div1.classList.remove('hidden');
            div1.classList.add('visible');
        }
    }, 13000);
});
