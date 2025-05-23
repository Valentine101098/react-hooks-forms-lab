import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onAddItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  function handleFilteredItem(event) {
    setSearchText(event.target.value)
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  const itemsToDisplay = items.filter((item) => {
  const categoryMatch = selectedCategory === "All" || item.category === selectedCategory;
  const nameMatch = item.name.toLowerCase().includes(searchText.toLowerCase());
  return categoryMatch && nameMatch;
});


  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onAddItem}/>
      <Filter
      onCategoryChange={handleCategoryChange}
      onSearchChange={handleFilteredItem}
      search={searchText}
      selectedCategory={selectedCategory}
       />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
