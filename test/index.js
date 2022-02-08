const str = 'const str = "Vue.use()"; Vue.use()'
str.replace(/([\w|\$]+)\.([\w|\$]+)/g, (match, p1, p2) => '')
