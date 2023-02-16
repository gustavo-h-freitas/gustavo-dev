function hasTagElement(tagId, type) {
  const tags = [...document.body.children, ...document.head.children]
  return tags.some(tag => tag.tagName.toLowerCase() === type && tag.dataset?.tagId === tagId)
}

export {
  hasTagElement
}