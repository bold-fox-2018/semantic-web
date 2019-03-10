window.onload = function (){
  const nav = document.getElementsByTagName('nav')[0].children
  for (let i = 0; i < nav.length; i++) {
    if(nav[i].dataset.type) {
      nav[i].onclick = function () {
        getContent(nav[i].dataset.type)
        selected(nav[i])
      }
    }
  }
};

function getContent (page) {
  document.getElementById('content').innerHTML = content[page];
}

function selected(self) {
  const nav = document.getElementsByTagName('nav')[0].children
  for (let i = 0; i < nav.length; i++) {
    nav[i].classList.remove('selected')
  }
  self.classList.add('selected')
}
