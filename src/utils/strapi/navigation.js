
/**
 * @param {Object[]} items original items
 * @returns filtered items
 * @description filter items recursively that are not attached to a menu or
 */
export const cleanNavigationItems = items => {
  const filteredItems = [];
  items.forEach(menu => {
    if (!_isValidItem(menu)) return;
    if(menu.items) {
      filteredItems.push({
        ...menu,
        items: cleanNavigationItems(menu.items)
      });
      return;
    }
    filteredItems.push(menu);
  });
  return filteredItems;
};

const _isValidItem = item => {
  if (!item.menuAttached) return false;
  if (item.type === "WRAPPER" && item.items.length === 0) return false;
  return true;
};
