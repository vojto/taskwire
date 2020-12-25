export const previousItem = (items, item) => {
  const index = items.findIndex((value) => value === item);
  const isFirst = index === 0;
  
  return isFirst ? item : items[index - 1];	
}

export const nextItem = (items, item) => {
	const index = items.findIndex((value) => value === item);
	const isLast = index === items.length - 1;
  
  return isLast ? item : items[index + 1];
}