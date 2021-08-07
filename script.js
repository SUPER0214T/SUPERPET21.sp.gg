const searchPeople = document.querySelector('.searchPeople');
const searchBox = document.querySelector('.search')

searchPeople.addEventListener('focus', function(e) {
  const bottomBox = document.createElement('div')
  bottomBox.classList.add('peek')
  searchBox.append(bottomBox)
});

searchPeople.addEventListener('blur', function(e) {
  e.target.nextElementSibling.remove()
});
