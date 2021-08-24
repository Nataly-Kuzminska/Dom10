'use strict';
const books = document.querySelector('.books'),
book = document.querySelectorAll('.book');
books.insertBefore(book[1], book[0]);
books.insertBefore(book[3], book[2]);
books.insertBefore(book[4], book[5]); 


const backGround = document.querySelectorAll('body')[0];
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';


const thirdBook = document.querySelectorAll('a')[4];
thirdBook.textContent = 'Книга 3. this и Прототипы Объектов';


const ulElems = document.querySelectorAll('ul');
const liElemsSix = ulElems[2].querySelectorAll('li');
const li = document.createElement('li');
li.innerHTML = 'Глава 8: За пределами ES6'; 
liElemsSix[8].append(li);


const adVertisement = document.querySelector('.adv');
adVertisement.remove();


const liElemTwo = ulElems[1].querySelectorAll('li');
liElemTwo[3].after(liElemTwo[6]);
liElemTwo[4].before(liElemTwo[8]);
liElemTwo[9].after(liElemTwo[2]);

 
const liElemFifth = ulElems[5].querySelectorAll('li');
liElemFifth[2].before(liElemFifth[9]);
liElemFifth[4].after(liElemFifth[2]);
liElemFifth[7].after(liElemFifth[5]);




/*console.log(books);
console.log(book);
console.log(backGround);
console.log(adVertisement);
console.log(ulElems); 
console.log(liElemsSix);
console.log(thirdBook);*/
console.log(liElemFifth[7]);