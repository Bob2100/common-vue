const obj = {
  id: '0',
  label: '-0-',
  child: [
    {
      id: '1',
      label: '-1-',
      child: [

      ]
    },
    {
      id: '2',
      label: '-2-',
      child: [

      ]
    },
  ]
}

function findMenuById(id, obj) {
  if (obj.id === id) {
    return obj;
  }
  const child = obj.child;
  if (!child || !Array.isArray(child)) {
    return null;
  }
  let result = null;
  child.forEach(obj => {
    result = findMenuById(id, obj);
  })
  return result;
}

console.log(findMenuById('2', obj))