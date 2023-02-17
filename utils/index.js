function hasTagElement(tagId, type) {
  const tags = [...document.body.children, ...document.head.children]
  return tags.some(tag => tag.tagName.toLowerCase() === type && tag.dataset?.tagId === tagId)
}

function populateScriptObject(tag, src) {
  tag.src = src
  tag.async = false

  return tag
}

function includeMetaTag(src, tagId, tagType = 'script') {
  return new Promise((resolve, reject) => {
    if (hasTagElement(tagId, tagType)) {
      return resolve(src)
    }

    let tag = document.createElement(tagType)
    tag.dataset.tagId = tagId
    tag = populateScriptObject(tag, src)

    tag.onload = () => resolve(src)
    // eslint-disable-next-line prefer-promise-reject-errors
    tag.onerror = () => reject(`Failed to load ${tagType}: ${src}`)
    document.head.appendChild(tag)
  })
}

export {
  hasTagElement,
  includeMetaTag
}