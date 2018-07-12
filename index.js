function getFirstSelector(selector) {
  return document.querySelector(selector)
}


function deepestChild() {
  var lis = document.getElementById('grand-node')
  var next = lis.children[0]
  while (next) {
    lis = next
    next = lis.children[0]
  }
  return lis
  }

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt([i]) + 1 + n).toString()
  }
}
