var list = document.querySelector('.outputUl');
var addInput = document.querySelector('.outputInput');
var addBtn = document.querySelector('.outputButton');

list.innerHTML = '';

var myData = [];

addBtn.onclick = function () {
  if (addInput.value !== '') {
    myData.unshift(addInput.value);
    list.innerHTML = '';

    for (var i = 0; i < myData.length; i++) {
      itemT = myData[i];
      var listItem = document.createElement('li');
      var spanI = document.createElement('button');
      spanI.className = 'check';
      var txtI = document.createTextNode('\u00D7');
      listItem.textContent = itemT;
      list.appendChild(listItem);
      listItem.appendChild(spanI);
      spanI.appendChild(txtI);
      spanI.onclick = removeItem;
    }
  addInput.value = '';
  addInput.focus();
  }
};

function removeItem() {
  listItem = this.parentNode;
  ul = listItem.parentNode;
  ul.removeChild(listItem);
}
