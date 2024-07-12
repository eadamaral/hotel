// const menuicon = document.getElementById('menuicon');
// const menumobile = document.getElementById('menumobile');

// menuicon.addEventListener('click', function() {
//   if (menumobile.style.display === 'none') {
//     menumobile.style.display = 'block';
//   } else {
//     menumobile.style.display = 'none';
//   }
// });

const menuicon = document.getElementById('menuicon');
const menumobile = document.getElementById('menumobile');

menuicon.addEventListener('click', function() {
  if (menumobile.style.display === 'block') {
    menumobile.style.display = 'none';
  } else {
    menumobile.style.display = 'none';
  }
});
