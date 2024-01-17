document.getElementById('calc').addEventListener('click', myFunc);

function myFunc() {
    const a = document.getElementById("panjang").value;
    const luas = a * a;
    const keliling = 4 * a
    document.getElementById('luas').innerText = luas;
    document.getElementById('keliling').innerText = keliling;
}