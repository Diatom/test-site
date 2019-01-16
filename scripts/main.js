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

redraw()

function redraw() {
  var container = document.getElementById('listContainer')

  container.innerHTML = null

  for (var i = 0; i < myData.length; i++) addItem(i)
  function addItem(i) {
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
