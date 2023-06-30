function menuToggle() {
    var nav = document.getElementById("nav")
    var toggle = document.getElementById("toggle")
    nav.classList.toggle("active")
    toggle.classList.toggle("active")
}



// ena



let langs = document.querySelector(".langs"),
     link = document.querySelectorAll("a"),
     title = document.querySelector(".title"),
     descr = document.querySelector(".description");

link.forEach(el=>{
     el.addEventListener("click", ()=>{
          langs.querySelector(".active").classList.remove("active");
          el.classList.add("active");

          let attr = el.getAttribute("language")

          title.textContent = data[attr].title
          descr.textContent = data[attr].description
     })
})

let data = {
     georgian: {
          title: "გამარჯობა",
          description: "მოგესალმებით შერეული საბრძოლოს ხელოვნების ქართულენოვან საიტზე."
     },
     english: {
          title: "Hello World",
          description: "Welcome to the not first but def. not last Georgian website about Mixed Martial Arts."
     }
}
