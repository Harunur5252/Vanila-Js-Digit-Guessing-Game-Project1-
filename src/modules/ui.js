import Data from "./data"

const data = new Data()
class UI{
    constructor(){
  
    }
    selectors(){
        const inputElm       = document.querySelector('.input')
        const playGuBtnElm   = document.querySelector('.playGuBtn')
        const paraAddElm     = document.querySelector('.paraAdd')
        const addLinkElm     = document.querySelector('.addLink')
        const sorryImgElm    = document.querySelector('.sorryImg')
        const happyImgElm    = document.querySelector('.happyImg')
        const headingOneElm  = document.querySelector('.headingOne')
        const rightAnsElm    = document.querySelector('.rightAns')
        const wrongAnsElm    = document.querySelector('.wrongAns')
        const rigAnsPerElm   = document.querySelector('.rigAnsPer')
        const wrgAnsPerElm   = document.querySelector('.wrgAnsPer')
        const errorMsgElm    = document.querySelector('.errorMsg')
        return {
          inputElm,playGuBtnElm,paraAddElm,addLinkElm,sorryImgElm,happyImgElm,headingOneElm,rightAnsElm,wrongAnsElm,
          rigAnsPerElm,wrgAnsPerElm,errorMsgElm
        }
    }
    showErrMsg(){
        const {
          errorMsgElm
        }=ui.selectors()
        errorMsgElm.style.display=''
        errorMsgElm.style.color='red'
        setTimeout(()=>{
          errorMsgElm.style.display='none'
        },2000) 
    }
    createPlayAgBtnNReload(){
        const {
          addLinkElm
        }=ui.selectors()
        const link = document.createElement('a')
        link.setAttribute('class','btn btn-primary')
        link.textContent='Play Again'
        addLinkElm.append(link)
        link.addEventListener('click',e=>{
          location.reload()
        })
    }
    isGameOver(){
        const {
          headingOneElm,addLinkElm
        }=ui.selectors()
        alert('Game Over')
        data.getZeroValue()
        headingOneElm.style.display='block'
        ui.createPlayAgBtnNReload()
    }
    removeItem(){
      const {
        paraAddElm,
        inputElm,
        playGuBtnElm,
        sorryImgElm,
        happyImgElm,
        wrongAnsElm,
        rightAnsElm,
        wrgAnsPerElm,
        rigAnsPerElm
      }=ui.selectors()
        paraAddElm.remove()
        inputElm.remove()
        playGuBtnElm.remove()
        if(sorryImgElm){
          sorryImgElm.remove()
        }if(happyImgElm){
          happyImgElm.remove()
        }
        wrongAnsElm.remove()
        rightAnsElm.remove()
        wrgAnsPerElm.remove()
        rigAnsPerElm.remove()
    }
    addSorryImage(){
        const {
          sorryImgElm,
        }=ui.selectors()
        const img = document.createElement('img');
        img.setAttribute('src','./src/images/sadImg.gif')
        img.setAttribute('height','140px')
        img.setAttribute('width','250px')
        if(sorryImgElm){
          sorryImgElm.append(img)
        }
    }
    addHappyImage(){
        const {
          happyImgElm,
        }=ui.selectors()
        const img = document.createElement('img');
        img.setAttribute('src','./src/images/happyImg.gif')
        img.setAttribute('height','140px')
        img.setAttribute('width','250px')
        happyImgElm.append(img)
    }
    addBoxInParaIfWrDigit(){
        const {
          paraAddElm
        }=ui.selectors()
        const para = document.createElement('p')
        para.className='box'
        para.textContent=`Sorry,It was ${data.genRandomValue}`
        para.style.color='red'
        if(paraAddElm){
          paraAddElm.append(para)
        }
    }
    addBoxInParaIfRgDigit(){
        const {
          paraAddElm
        }=ui.selectors()
        const para = document.createElement('p')
        para.className='box2'
        para.textContent=`Wow Great!!`
        para.style.color='green'
        paraAddElm.append(para)
    }
    emptyInputElm(){
        const {
          inputElm
        }=ui.selectors()
        if(inputElm){
          inputElm.value = ''
        }
    }
    isWrongDigit(){ 
        const {
          wrongAnsElm,
          wrgAnsPerElm,
        }=ui.selectors()
        data.wrongValue++
        ui.addBoxInParaIfWrDigit()
        ui.emptyInputElm()
        data.genRandomValue=Math.ceil(Math.random()*9)
        if(wrongAnsElm){
          wrongAnsElm.textContent=`Wrong Digit : ${data.wrongValue}`
        }
        data.wrongAnsPerValue+=20
        if(wrgAnsPerElm){
          wrgAnsPerElm.textContent=`wrong answer : ${data.wrongAnsPerValue}%`
        }
    }
    isRightDigit(){
        const {
          sorryImgElm,
          rightAnsElm,
          rigAnsPerElm
        }=ui.selectors()
        data.rightValue++
        ui.addBoxInParaIfRgDigit()
        ui.emptyInputElm()
        if(sorryImgElm){
          sorryImgElm.remove()
        }
        data.genRandomValue=Math.ceil(Math.random()*9)
        rightAnsElm.textContent=`Right Digit : ${data.rightValue}`
        data.rightAnsPerValue+=20
        rigAnsPerElm.textContent=`right answer : ${data.rightAnsPerValue}%`
    }
    static init(){
      const {
      inputElm,
      playGuBtnElm,
      }=ui.selectors()
    playGuBtnElm.addEventListener('click',()=>{
      const conVToNumber = Number(inputElm.value)
      if(inputElm.value === '' || inputElm.value>data.nine){
          ui.showErrMsg()  
          ui.emptyInputElm()   
      }
      else if(conVToNumber!==data.genRandomValue){
        data.maxValue++
        if(data.maxValue===6){
          ui.isGameOver()
          ui.removeItem()
        }
        if(data.maxValue===3){
          ui.addSorryImage()
        }
        
        ui.isWrongDigit()
  
    }else if(conVToNumber===data.genRandomValue){
      data.happyImgValue++
      if(data.maxValue===6){
          ui.isGameOver()
          ui.removeItem()
        }
        if(data.happyImgValue===1){
          ui.addHappyImage()
        }
        ui.isRightDigit()
    } 
  
    })
    }
}
  
const ui = new UI()
export default UI