const categoryDropDown = document.getElementById("category-dropdown");
const viewCategory = document.getElementById("view-category-button");
const addBookMark = document.getElementById("add-bookmark-button");
const name = document.getElementById("name");
const closeFormBtn = document.getElementById("close-form-button");
const addBookmarkFormBtn = document.getElementById("add-bookmark-button-form");
const deleteBookMarkBtn = document.getElementById("delete-bookmark-button");
const closeListBtn = document.getElementById("close-list-button");
const formSection = document.getElementById("form-section");
const mainSection = document.getElementById("main-section");
const bookMarkListSection = document.getElementById("bookmark-list-section");
const categoryList = document.getElementById("category-list");
const categoryName = document.querySelectorAll(".category-name");
const url = document.getElementById("url");

// Helper function to safely fetch and validate bookmarks array from localStorage
function getBookmarks() {
  const bookmarks = localStorage.getItem("bookmarks");
  if (bookmarks) {
    try {
      const parsed = JSON.parse(bookmarks);
      
      // Check if it's an array AND every item inside is a valid object containing necessary keys
      if (Array.isArray(parsed) && parsed.every(item => typeof item === 'object' && item !== null && 'name' in item && 'category' in item && 'url' in item)) {
        return parsed;
      }
    } catch (error) {
      // Return an empty array if JSON.parse crashes
    }
  }
  return [];
}

// Layout visibility toggle handlers
const displayOrCloseForm = () => {
  mainSection.classList.toggle("hidden");
  formSection.classList.toggle("hidden");
};

const displayOrHideCategory = () => {
  mainSection.classList.toggle("hidden");
  bookMarkListSection.classList.toggle("hidden");
};

// Reusable render function initialized early to prevent reference errors during execution
const renderCategoryList = () => {
  const bookMarks = getBookmarks();
  const bookmarks = bookMarks.filter(bookmark => bookmark.category === categoryDropDown.value);
  categoryList.innerHTML = "";

  if (bookmarks.length === 0) {
    categoryList.innerHTML = `<p>No Bookmarks Found</p>`;
  } else {
    bookmarks.forEach((bookmark) => {
      categoryList.innerHTML += `<input type="radio" id="${bookmark.name}" value="${bookmark.name}" name="options"><label for="${bookmark.name}"><a href="${bookmark.url}" target="_blank">${bookmark.name}</a></label>`;
    });
  }
};

// Event Listeners
addBookMark.addEventListener("click", () => {
  categoryName.forEach((cName) => {
    cName.innerText = categoryDropDown.value;
  });
  displayOrCloseForm();
});

closeFormBtn.addEventListener("click", () => {
  displayOrCloseForm();
});

addBookmarkFormBtn.addEventListener("click", () => {
  const bookMarks = getBookmarks();
  const obj = {
    name: name.value,
    category: categoryDropDown.value,
    url: url.value,
  };
  bookMarks.push(obj);
  localStorage.setItem("bookmarks", JSON.stringify(bookMarks));
  
  // Wiping out form fields
  name.value = "";
  url.value = "";
  displayOrCloseForm();
});

viewCategory.addEventListener("click", () => {
  categoryName.forEach((cName) => {
    cName.innerText = categoryDropDown.value;
  });
  renderCategoryList();
  displayOrHideCategory();
});

closeListBtn.addEventListener("click", displayOrHideCategory);

deleteBookMarkBtn.addEventListener("click", () => {
  const selectedRadio = document.querySelector('input[name="options"]:checked');
  
  if (selectedRadio) {
    const bookmarkNameToDelete = selectedRadio.value;
    const currentCategory = categoryDropDown.value;
    let bookMarks = getBookmarks();
    
    // CRUCIAL TEST 23 FIX: Find the index of the SPECIFIC item matching BOTH name and category
    const indexToDelete = bookMarks.findIndex(
      bookmark => bookmark.name === bookmarkNameToDelete && bookmark.category === currentCategory
    );
    
    if (indexToDelete !== -1) {
      // Remove only that specific item from the main database list
      bookMarks.splice(indexToDelete, 1);
      
      // Save updated data array to localStorage
      localStorage.setItem("bookmarks", JSON.stringify(bookMarks));
    }
    
    // Refresh the HTML content in-place without triggering extra page flips
    renderCategoryList();
  } else {
    alert("Please select a bookmark to delete.");
  }
});
