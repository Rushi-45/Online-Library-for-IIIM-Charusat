var options = {
  valueNames: [ 'name' , 'author'],
  item: '<li><h3 class="name"></h3><p class="born"></p></li>'
};

var values = [
  {
    name: 'Shaukeens',
    author: 'Harish Patel'   
  },
  {
    name: 'Fera feri'
    author: 'Arvind Vakhariya'
    
  },
  {
    name: 'chor bani thanghat kare'
    author: 'Minesh Mehta'
  }
];

var userList = new List('users', options, values);

userList.add({
  name: 'Kitli gang',
  author: Bakul Buch
});

function search_function() { 
  let input = document.getElementById('searchbar').value 
  input=input.toLowerCase(); 
  let x = document.getElementsByClassName('animals'); 
    
  for (i = 0; i < x.length; i++) {  
      if (!x[i].innerHTML.toLowerCase().includes(input)) { 
          x[i].style.display="none"; 
      } 
      else { 
          x[i].style.display="list-item";                  
      } 
  } 
} 