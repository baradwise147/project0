const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function updateCounts() {
  itemCountSpan.textContent = list.children.length
  uncheckedCountSpan.textContent = list.querySelectorAll(
    'input[type="checkbox"]:not(:checked)'
  ).length
}

function newTodo() {
  const input = prompt('Введіть нове завдання:')
  if (input === null || input.trim() === '') return

  const text = input.trim()
  const item = document.createElement('li')
  item.className = classNames.TODO_ITEM

  const label = document.createElement('label')
  const checkbox = document.createElement('input')
  checkbox.type = 'checkbox'
  checkbox.className = classNames.TODO_CHECKBOX

  const description = document.createElement('span')
  description.className = classNames.TODO_TEXT
  description.textContent = text

  const deleteButton = document.createElement('button')
  deleteButton.type = 'button'
  deleteButton.className = classNames.TODO_DELETE
  deleteButton.textContent = 'Видалити'
  deleteButton.setAttribute('aria-label', 'Видалити завдання: ' + text)

  checkbox.addEventListener('change', updateCounts)
  deleteButton.addEventListener('click', () => {
    item.remove()
    updateCounts()
  })

  label.append(checkbox, description)
  item.append(label, deleteButton)
  list.append(item)
  updateCounts()
}

updateCounts()
