
// data
const data = {
   maxValue:0,
   wrongValue:0,
   rightValue:0,
   wrongAnsPerValue:0,
   rightAnsPerValue:0,
   happyImgValue : 0,
   nine:9,
   getZeroValue(){
      this.wrongValue=0;
      this.rightValue=0;
      this.wrongAnsPerValue=0
      this.rightAnsPerValue=0
   }
}

const UI = {
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
   },
   showErrMsg(){
      const {
        errorMsgElm
      }=this.selectors()
      errorMsgElm.style.display=''
      errorMsgElm.style.color='red'
      setTimeout(()=>{
        errorMsgElm.style.display='none'
      },2000) 
   },
   createPlayAgBtnNReload(){
      const {
        addLinkElm
      }=this.selectors()
      const link = document.createElement('a')
      link.setAttribute('class','btn btn-primary')
      link.textContent='Play Again'
      addLinkElm.append(link)
      link.addEventListener('click',e=>{
        location.reload()
      })
   },
   isGameOver(){
      const {
        headingOneElm,addLinkElm
      }=this.selectors()
      alert('Game Over')
      data.getZeroValue()
      headingOneElm.style.display='block'
      this.createPlayAgBtnNReload()
   },
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
    }=this.selectors()
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
   },
   addSorryImage(){
      const {
        sorryImgElm,
      }=this.selectors()
      const img = document.createElement('img');
      img.setAttribute('src','./sadImg.gif')
      img.setAttribute('height','140px')
      img.setAttribute('width','250px')
      if(sorryImgElm){
        sorryImgElm.append(img)
      }
   },
   addHappyImage(){
      const {
        happyImgElm,
      }=this.selectors()
      const img = document.createElement('img');
      img.setAttribute('src','./happyImg.gif')
      img.setAttribute('height','140px')
      img.setAttribute('width','250px')
      happyImgElm.append(img)
   },
  
   addBoxInParaIfWrDigit(){
      const {
        paraAddElm
      }=this.selectors()
      const para = document.createElement('p')
      para.className='box'
      para.textContent=`Sorry,It was ${data.genRandomValue}`
      para.style.color='red'
      if(paraAddElm){
        paraAddElm.append(para)
      }
   },
   addBoxInParaIfRgDigit(){
      const {
        paraAddElm
      }=this.selectors()
      const para = document.createElement('p')
      para.className='box2'
      para.textContent=`Wow Great!!`
      para.style.color='green'
      paraAddElm.append(para)
   },
   emptyInputElm(){
      const {
        inputElm
      }=this.selectors()
      if(inputElm){
         inputElm.value = ''
      }
   },
   isWrongDigit(){ 
      const {
        wrongAnsElm,
        wrgAnsPerElm,
      }=this.selectors()
      data.wrongValue++
      this.addBoxInParaIfWrDigit()
      this.emptyInputElm()
      data.genRandomValue=Math.ceil(Math.random()*9)
      if(wrongAnsElm){
        wrongAnsElm.textContent=`Wrong Digit : ${data.wrongValue}`
      }
      data.wrongAnsPerValue+=20
      if(wrgAnsPerElm){
        wrgAnsPerElm.textContent=`wrong answer : ${data.wrongAnsPerValue}%`
      }
   },
   isRightDigit(){
      const {
        sorryImgElm,
        rightAnsElm,
        rigAnsPerElm
      }=this.selectors()
      data.rightValue++
      this.addBoxInParaIfRgDigit()
      this.emptyInputElm()
      if(sorryImgElm){
        sorryImgElm.remove()
      }
      data.genRandomValue=Math.ceil(Math.random()*9)
      rightAnsElm.textContent=`Right Digit : ${data.rightValue}`
      data.rightAnsPerValue+=20
      rigAnsPerElm.textContent=`right answer : ${data.rightAnsPerValue}%`
   },
   init(){
     const {
      inputElm,
      playGuBtnElm,
     }=this.selectors()
    playGuBtnElm.addEventListener('click',()=>{
      const conVToNumber = Number(inputElm.value)
      if(inputElm.value === '' || inputElm.value>data.nine){
          this.showErrMsg()  
          this.emptyInputElm()   
      }
     else if(conVToNumber!==data.genRandomValue){
       data.maxValue++
       if(data.maxValue===6){
         this.isGameOver()
         this.removeItem()
       }
       if(data.maxValue===3){
         this.addSorryImage()
       }
       
       this.isWrongDigit()
   
    }else if(conVToNumber===data.genRandomValue){
      data.happyImgValue++
      if(data.maxValue===6){
         this.isGameOver()
         this.removeItem()
       }
       if(data.happyImgValue===1){
         this.addHappyImage()
       }
       this.isRightDigit()
    } 
   
   })
   }
}
data.genRandomValue=Math.ceil(Math.random()*9)
UI.init()