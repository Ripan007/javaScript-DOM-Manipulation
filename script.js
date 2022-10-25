// selecting the node / elements in dom tree for manipulation //

// getElementById
// const title = document.getElementById('main-heading');
// console.log(title);

// getElementsByClassName
// const item = document.getElementsByClassName('list-items');
// console.log(item);

// getElementsByTagName
// const tag = document.getElementsByTagName('li');
// console.log(tag);

// querySelector
// select the first item which mention //
// const container = document.querySelector('div');
// console.log(container);

// querySelectorAll
// const whole = document.querySelectorAll('div');
// console.log(whole);

///////////////////////////////////////////////////////////////////

// change the styling of the elements //

// const heading = document.querySelector('#main-heading');
// heading.style.color = 'yellow';


// const list = document.querySelectorAll('list-items');
// list.style.color ="red";
// wont work
// for multiple elements we have to loop

// const list = document.querySelectorAll('.list-items');
// for (let i = 0; i < list.length; i++) {
//     list[i].style.color = 'blue';
// }

/////////////////////////////////////////////////////////////////////

// creating elements //
// const ul = document.querySelector('ul');
// const li = document.createElement('li');

//  Adding element  //
// ul.append(li);

// modifying the text //
// const firstItem = document.querySelector('.list-items');
// console.log(firstItem.innerHTML);
// console.log(firstItem.innerText);
// console.log(firstItem.textContent);

// li.innerText = 'monster';

// modifying attributes and classes
// const title = document.querySelector('#main-heading');
// title.style.color = 'yellow';
// li.setAttribute('id', 'main-heading');

// practice //

// const title = document.querySelector('#heading');
// title.style.color = "white";

// const ul = document.querySelector('ul');
// const li = document.createElement('li');
// ul.append(li);

// li.innerText = 'done';

// add css in external css //
// li.setAttribute('id', 'heading');
// li.removeAttribute('id');

//    getAttribute //
// const title = document.querySelector('#heading');
// console.log(title.getAttribute('id'));

// classList //
// li.innerText = 'kkkkkk';
// li.classList.add('list-items');
// li.classList.remove('list-items');

// console.log(li.classList.contains('list-items'));

// remove elements //

// li.remove();

// Navigate the DOM  //
// Traverse the DOM //

// parent Node Traversal //
// const ul = document.querySelector('ul');
// console.log(ul.parentNode.parentNode);
// console.log(ul.parentElement.parentElement);

// const html = document.querySelector('html');
// console.log(html.parentElement);
// console.log(html.parentNode);


// event Listeners //


// const button = document.querySelector('.btn-danger');
// function alertBtn() {
//     alert('hi eventListener')
// }

// button.addEventListener("click", alertBtn)


// mouseOver  //

// let content = document.querySelector('.container');

// function changeBg() {
//     content.style.backgroundColor = 'yellow';
// }

// content.addEventListener("mouseover", changeBg)