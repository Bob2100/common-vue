import prettier from 'prettier/standalone'
import babel from 'prettier/parser-babel'

export function JsString(str) {
  this.val = str
}
JsString.prototype.toString = function () {
  return this.val
}
JsString.prototype.format = function () {
  return new JsString(
    prettier.format(this.val, {
      parser: 'babel',
      plugins: [babel],
    })
  )
}
JsString.prototype.replaceString = function () {
  return new JsString(
    this.val.replace(
      /"[\d\D]+"/g,
      (match) => `<span class="string">${match}</span>`
    )
  )
}
JsString.prototype.replaceMethodInvoke = function () {
  return new JsString(
    this.val.replace(
      /(\w+)\.(\w+)/g,
      (match, p1, p2) =>
        `<span class="object">${p1}</span>.<span class="function">${p2}</span>`
    )
  )
}
JsString.prototype.replaceKeywords = function () {
  const keywords = ['import', 'from']
  keywords.forEach((item) => {
    this.val = this.val.replace(
      new RegExp(`${item} `, 'g'),
      `<span class="keyword">${item} </span>`
    )
  })
  return new JsString(this.val)
}
