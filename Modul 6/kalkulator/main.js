function hitung(operator) {
    let angka1 = parseFloat(document.getElementById("angka1").value);
    let angka2 = parseFloat(document.getElementById("angka2").value);
    let hasil;

    if (isNaN(angka1) || isNaN(angka2)) {
        document.getElementById("hasil").innerText =
            "Masukkan dua angka!";
        return;
    }

    if (operator === '+') {
        hasil = angka1 + angka2;
    } else if (operator === '-') {
        hasil = angka1 - angka2;
    } else if (operator === '*') {
        hasil = angka1 * angka2;
    } else if (operator === '/') {
        if (angka2 === 0) {
            document.getElementById("hasil").innerText =
                "Tidak bisa dibagi 0!";
            return;
        }
        hasil = angka1 / angka2;
    }

    document.getElementById("hasil").innerText = hasil;
}
