! function () {
  let code = `/* 
  *你好，我是亓凯
  *这是我的一份动态简历
  *用代码介绍自己很有意思！
  *为了不那么枯燥
  *先加一点css吧~
  */

  *{
    transition: all 1s;
  }
  html{
    background: #eee;
  }
  #cssCode{
    padding: 16px;
    border: 1px solid #aaa;
  }

  /* 让代码高亮*/
  .token.comment{
    color: slategray;
  }
  .token.selector{
    color: #690;
  }
  .token.property{
    color: #905;
  }
  .token.punctuation{
    color: #999;
  }

  /*加一些动态效果*/
  #cssCode{
    transform:rotate(360deg);
  }

  /*需要一张白纸*/
  #cssCode{
    position: fixed;
    left:0;
    width:50%;
  }
  /*下面就可以在白纸上写东西了*/
  `

  let md = `
    #标题1
    1.xxxxxx
    2.xxxxxx
    #标题2
    1.xxxxx
    2.xxxxx
  `

  let cssCode = document.querySelector('#cssCode')
  let styleTag = document.querySelector('#styleTag')

  function writeCode(code, fn) {
    let n = 0
    let timer = setInterval(() => {
      if (++n >= code.length) {
        window.clearInterval(timer)
        fn.call(undefined)
      } else {
        styleTag.innerHTML = code.slice(0, n)
        cssCode.innerHTML = Prism.highlight(code.slice(0, n), Prism.languages.css, 'css')
        cssCode.scrollTop = 10000
      }
    }, 0)
  }

  function creatPaper(fn) {
    let paper = document.createElement('pre')
    paper.id = 'paper'
    document.body.appendChild(paper)
    fn.call(undefined)
  }

  function writeMarkdown(md){
    let n = 0
    let timer = setInterval(() => {
      if (++n >= md.length) {
        window.clearInterval(timer)
      } else {
        paper.innerHTML =md.slice(0, n)
        paper.scrollTop = 10000
      }
    }, 0)
  }

  writeCode(code, () => {
    creatPaper(() => {
      writeMarkdown(md)
    })
  })

}()