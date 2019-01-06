void function() {

var myData = []

document.getElementById('form').onsubmit = function onSubmit(event) {
  event.preventDefault()
  var form = event.target
  var input = form.elements.output
  if (!input.value) return
  myData.unshift(input.value)
  input.value = null
  redraw()
}

// Reset view state.
redraw()

function redraw() {
  var container = document.getElementById('listContainer')

  container.innerHTML = null

  // for (let i = 0; i < myData.length; i++) {
  //   let item = myData[i]
  //   let listItem = document.createElement('li')
  //   let btn = document.createElement('button')
  //   btn.className = 'check'
  //   let txtI = document.createTextNode('\u00D7')
  //   listItem.textContent = item.value
  //   container.appendChild(listItem)
  //   listItem.appendChild(btn)
  //   btn.appendChild(txtI)
  //   btn.onclick = function removeAtIndex() {removeItem(item)}
  // }

  // console.info(`hello world!`) -----
  //                                   |
  //                                   |
  //  ---------------------------------
  // |
  // |
  //  --> ;[10].forEach(function(element) {
  //   console.info(`element:`, element)
  // })

  // console.info(`hello world!`)[10].forEach(...)
  // console.info(`hello world!`)[i]

  for (var i = 0; i < myData.length; i++) iter(i)
  function iter(i) {
    var item = myData[i]
    var listItem = document.createElement('li')
    var btn = document.createElement('button')
    btn.className = 'check'
    var txtI = document.createTextNode('×')
    listItem.textContent = item
    container.appendChild(listItem)
    listItem.appendChild(btn)
    btn.appendChild(txtI)
    btn.onclick = function removeAtIndex() {removeItem(item)}
  }
}

function removeItem(item) {
  var index = myData.indexOf(item)
  if (index !== -1) {
    myData.splice(index, 1)
    redraw()
  }
}

}()
