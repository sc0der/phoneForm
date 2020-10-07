let contact = document.getElementById("contacts");
let camera = document.getElementById("camera");
let gallery = document.getElementById("gallery");
let main_screen = document.querySelector(".main_screen");
let light = document.querySelector(".light");
let chrome_ap = document.querySelectorAll(".chrome_ap");
let bottom_el_circle = document.querySelectorAll("#bottom_el_circle");
let c_able = document.querySelector("#c_able");
let c_m_keyboard = document.querySelector(".c_m_keyboard");
let btn_call = document.querySelector(".btn_call");
let contacts_modal = document.querySelector(".contacts_modal");
let chromes = document.querySelector("#chromes");
let chrome_modal = document.querySelector(".chrome_modal");
let phone_input = document.querySelector(".phone_input");
let key = document.querySelectorAll(".key_c");

let numbers = [];


let number_from;
for (let f = 0; f < key.length; f++) {
    key[f].addEventListener("click", () => {
        numbers.push(key[f].textContent);
        phone_input.value = numbers;
    })

}

c_able.addEventListener("click", () => {
    c_m_keyboard.classList.add("shows");
    btn_call.style.display = "flex";
})
phone_input.addEventListener("click", () => {
    c_m_keyboard.classList.toggle("shows");
    btn_call.style.display = "none";

})


btn_call.addEventListener("click", () => {
    c_m_keyboard.classList.remove("shows");
    btn_call.style.display = "none";
})

gallery.addEventListener("click", function() {
    alert("gallery");
})

function switch_light_on() {
    light.style.opacity = "1";
}

function switch_light_off() {
    light.style.opacity = "0";
}


setInterval(switch_light_off, 5000);

setInterval(switch_light_on, 10000);

contact.addEventListener("click", () => {
    main_screen.classList.toggle("active");
    contacts_modal.classList.add("active");
    for (let i = 0; i < chrome_ap.length; i++) {
        chrome_ap[i].classList.add("active");
    }
})

chromes.addEventListener("click", () => {
    chrome_modal.classList.add("active");
    // for (let i = 0; i < chrome_ap.length; i++) {
    //     chrome_ap[i].classList.add("active");
    // }
})

for (let j = 0; j < bottom_el_circle.length; j++) {
    bottom_el_circle[j].addEventListener("click", () => {
        main_screen.classList.remove("active");
        for (let i = 0; i < chrome_ap.length; i++) {
            chrome_ap[i].classList.remove("active");
            contacts_modal.classList.remove("active");
            chrome_modal.classList.remove("active");

        }
    })

}

camera.addEventListener("click", function() {
    alert("Камера не работает");
})