const body = document.querySelector("body"),
        sidebar = body.querySelector(".sidebar"),
        toggle = body.querySelector(".toggle"),
        searchBtn = body.querySelector(".searchbox");
        
        toggle.addEventListener("click", () =>{
            sidebar.classList.toggle("close")
        })