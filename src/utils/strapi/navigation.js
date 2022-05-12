
/**
 * @param {Object[]} items original items
 * @returns filtered items
 * @description filter items recursively that are not attached to a menu or
 */
export const cleanNavigationItems = items => {
  const newItems = [];
  items.forEach(item => {
    if (!_isValidItem(item)) return;
    if(item.items) {
      newItems.push({
        ...item,
        items: cleanNavigationItems(item.items)
      });
      return;
    }
    newItems.push(item);
  });
  return newItems;
};

const _isValidItem = item => {
  if (!item.menuAttached) return false;
  if (item.type === "WRAPPER" && item.items.length === 0) return false;
  return true;
};
