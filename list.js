var drinks = [
  {
    caption: 'Coffee',
    children: [
      { caption: 'Late'},
      { caption: 'Americano' },
      { caption: 'Espresso' }
    ]
  },
  {
    caption: 'Tea',
    children: [
      { caption: 'Green' },
      { caption: 'Black' }
    ]
  },
  { caption: 'Milk' },
  { caption: 'Water' }
];

function createList(data) {
  var ul = document.createElement('ul');
  document.body.appendChild(ul);
  data.forEach(function(item) {
    var li = document.createElement('li');
    ul.appendChild(li);
    var liData = document.createTextNode(item['caption']);
    li.appendChild(liData);
    if (item.children) {
      createList(item.children);
    }
  });
}

var list = createList(drinks);
//document.body.appendChild(list);
