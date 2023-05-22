const logo = document.querySelector('#logo');

logo.classList.toggle('reverse-animation');

for(let i = 0; i < logo.length; i++) {
  console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

const hireMeBtn = document.getElementById('hireMe');
const emailDiv = document.querySelector('.email');

hireMeBtn.addEventListener('click', () => {
  emailDiv.classList.toggle('active');
});


var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor-2");

document.addEventListener("mousemove", function(e) {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  
  cursor2.style.left = e.clientX + "px";
  cursor2.style.top = e.clientY + "px";
});

alert("This page is not Ipad compatible")





