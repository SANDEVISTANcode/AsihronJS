function info(){
    let container = document.querySelector(".container")
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(element => element.json())
        .then(info => {
            info.forEach(post => {
                let cart = document.createElement("div");
                cart.classList.add(".cart");
                let title = document.createElement("h2");
                let text = document.createElement("p");
                let img = document.createElement("img");
                img.scr = "https://cliff-rawson.pixels.com/images/blogimages/artist-559969-6285-102418.jpg";
                container.append(cart)
                cart.append(title)
                cart.append(text)
                title.textContent = post.title
                text.textContent = post.body
            });
        })
}

info()