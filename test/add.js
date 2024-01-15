// Перевірка чи існують збережені дані в localStorage
const storedCategories = JSON.parse(localStorage.getItem('categories')) || [];

// Визначення початкових значень списків
let categories = storedCategories;


// Оновлення списків на сторінці
function updateUI() {
    // Оновлення категорій
    const categoryTableBody = document.getElementById('categoryBody');
    categoryTableBody.innerHTML = '';
    categories.forEach(category => {
        const row = categoryTableBody.insertRow();
        row.innerHTML = `<td>${category.id}</td><td>${category.name}</td><td>${category.description}</td><td><button onclick="editCategory(${category.id})"><i class="fa-regular fa-pen-to-square"></i></button><span> </span><button onclick="deleteCategory(${category.id})"><i class="fa-solid fa-x"></i></button></td>`;
    });

  
}

// Додавання категорії
function addCategory() {
    const categoryName = document.getElementById('categoryName').value;
    const categoryDescription = document.getElementById('categoryDescription').value;
    if (categoryName) {
        const newCategory = { id: categories.length + 1, name: categoryName, description: categoryDescription };
        categories.push(newCategory);
        localStorage.setItem('categories', JSON.stringify(categories));
        console.log('Added category:', newCategory); // Debugging
        

    // Перенаправлення на головну сторінку
    window.location.href = 'index.html';
    }
}

// Edit category
function editCategory(id) {
    const editedCategory = categories.find(category => category.id === id);
    if (editedCategory) {
        const newName = prompt('Введіть іншу назву:', editedCategory.name);
        const newDescription = prompt('Введіть інший опис:', editedCategory.description);
        if (newName !== null && newDescription !== null) {
            editedCategory.name = newName;
            editedCategory.description = newDescription;
            localStorage.setItem('categories', JSON.stringify(categories));
            updateUI();
        }
    }
}

// Delete category
function deleteCategory(id) {
const confirmed = confirm('Ви впевнені що хочете видалити цю категорію?');
if (confirmed) {
    const indexToDelete = categories.findIndex(category => category.id === id);
    categories.splice(indexToDelete, 1);

    // Оновити ідентифікатори категорій після видалення
    for (let i = indexToDelete; i < categories.length; i++) {
        categories[i].id = i + 1;
    }

    localStorage.setItem('categories', JSON.stringify(categories));
    updateUI();
}
}
function cancelAdd() {
    // Перенаправлення на головну сторінку
    window.location.href = 'index.html';
}

// 

// Виклик функції оновлення при завантаженні сторінки
updateUI();