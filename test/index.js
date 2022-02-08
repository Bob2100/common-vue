function JsString(str) {
  this.val = str
}
JsString.prototype.replaceString = function () {
  return new JsString(
    this.val.replace(
      /"[\d\D]+"/g,
      (match) => `<span class="string">${match}</span>`
    )
  )
}

const jsStr = new JsString('const str = "test"')
const res = jsStr.replaceString()
console.log(res.val)
