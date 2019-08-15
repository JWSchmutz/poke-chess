const onDragOverSpace = event => {
  event.preventDefault();
  event.target.style.borderColor = "yellow";
};

export default onDragOverSpace;
