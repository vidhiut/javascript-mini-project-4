const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
    let now = new Date().getTime();
    if (now - prev > delay) {
        prev = now;
        return func(...args);
        }
    };
};     

document.querySelector("#centerdiv").addEventListener(
    "mousemove",
    throttleFunction((details) => {
        //this is where you write the code you want to perform after some time and not rapidly
    var div=document.createElement('div');
    div.classList.add('imagediv');
    div.style.left=details.clientX+'px';
    div.style.top=details.clientY+'px';
    
    var img=document.createElement("img");
    img.setAttribute("src","marek-piwnicki-RxjyKAvUzgI-unsplash.jpg");
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.to(img,{
        y:'0',
        ease: Power1,
        duration:.6
    }); 

    gsap.to(img,{
        y:'100%',
        delay:.6,
        ease: Power2
    });

    setTimeout(function(){
        div.remove();
    },2000)

    },500)
);

