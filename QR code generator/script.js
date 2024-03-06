const wrapper = document.querySelector(".wrapper"),
    qrInput = wrapper.querySelector(".form input"),
    generatebtn = wrapper.querySelector(".form button"),
    qrImage = wrapper.querySelector(".qr-code img");

generatebtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generatebtn.innerText = "Generating Qr code..";
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImage.addEventListener("load", () => {
        wrapper.classList.add("active");
        generatebtn.innerText = "Generate Qr code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    }
})