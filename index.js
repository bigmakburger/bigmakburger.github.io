const btnLike1 = document.getElementById("btnLike1");
const btnDislike1 = document.getElementById("btnDislike1");
const countLike1 = document.getElementById("countLike1");
const countDislike1 = document.getElementById("countDislike1");

const btnLike2 = document.getElementById("btnLike2");
const btnDislike2 = document.getElementById("btnDislike2");
const countLike2 = document.getElementById("countLike2");
const countDislike2 = document.getElementById("countDislike2");

function clickLike1(){
  let totalLikes = parseInt(countLike1.textContent) + 1;
  countLike1.textContent = totalLikes.toString();
}
btnLike1.addEventListener("click", clickLike1);

function clickDislike1(){
  let totalDislikes = parseInt(countDislike1.textContent) + 1;
  countDislike1.textContent = totalDislikes.toString();
}
btnDislike1.addEventListener("click", clickDislike1);

function clickLike2(){
  let totalLikes = parseInt(countLike2.textContent) + 1;
  countLike2.textContent = totalLikes.toString();
}
btnLike2.addEventListener("click", clickLike2);

function clickDislike2(){
  let totalDislikes = parseInt(countDislike2.textContent) + 1;
  countDislike2.textContent = totalDislikes.toString();
}
btnDislike2.addEventListener("click", clickDislike2);

const comment = document.getElementById("comment");
const submit = document.getElementById("submit");
const commentbox = document.getElementById("commentbox");

function submitComment(){
    commentbox.textContent += comment.value.toString() + "\n";
    comment.value = "";
}
submit.addEventListener("click", submitComment);
