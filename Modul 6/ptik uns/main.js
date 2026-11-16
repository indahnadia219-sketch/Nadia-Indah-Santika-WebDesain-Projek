
function highlightParagraph() {
    const paragraf = document.querySelectorAll("p");

    paragraf.forEach(function(p) {
        if (p.querySelector(".highlight")) {
            p.innerHTML = p.textContent;
        } else {
            p.innerHTML = p.textContent.replace(
                /Faculty of Teacher Training and Education|Sebelas Maret University|Educational Personnel Education Institution \(LPTK\)|superior, strong and intelligent educational staff|Informatics and Computer Technology Education \(PTIK\)|Engineering and Vocational Education \(PTK\)|prioritized to teach in vocational\/vocational programs|Building Engineering Education|Mechanical Engineering Education|resource sharing with the mathematics study program/gi,
                '<span class="highlight">$&</span>'
            );
        }
    });
}


