const brgr = document.querySelector('.burger__svg');
console.log(brgr);
let flag = false;
brgr.addEventListener('click', e=>{
    target=e.target;
    const menu = document.querySelector('.nav__container');
    if (flag) {
        menu.style.right = '-600px';
        flag=!flag;
        document.body.style.overflow = "visible";
    }
    else{
        flag=!flag;
        menu.style.right='0';
        document.body.style.overflow = "hidden";
    }
    
    let buffer;
    let lineOne = document.getElementById('l1');
    let lineTwo = document.getElementById('l2');
    let lineThree = document.getElementById('l3');
    lineTwo.classList.toggle('invisible');
    buffer= lineOne.getAttribute('y2');
    lineOne.setAttribute('y2',lineThree.getAttribute('y2'));
    lineThree.setAttribute('y2',buffer)
})
