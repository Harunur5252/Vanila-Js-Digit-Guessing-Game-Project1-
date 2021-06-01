
(function(){
 const input       = document.querySelector('.input')
 const playGuBtn   = document.querySelector('.playGuBtn')
 const paraAdd     = document.querySelector('.paraAdd')
 const addLink     = document.querySelector('.addLink')
 const sorryImg    = document.querySelector('.sorryImg')
 const happyImg    = document.querySelector('.happyImg')
 const headingOne  = document.querySelector('.headingOne')
 const rightAns    = document.querySelector('.rightAns')
 const wrongAns    = document.querySelector('.wrongAns')
 const rigAnsPer   = document.querySelector('.rigAnsPer')
 const wrgAnsPer   = document.querySelector('.wrgAnsPer')


 let maxValue=0
 let wrongValue=0
 let rightValue=0
 let wrongAnsPerValue=0
 let rightAnsPerValue=0
 let genRandomValue  = Math.ceil(Math.random()*9)

 function removeItem(){
    paraAdd.remove()
    input.remove()
    playGuBtn.remove()
    sorryImg.remove()
    happyImg.remove()
    wrongAns.remove()
    rightAns.remove()
    wrgAnsPer.remove()
    rigAnsPer.remove()
 }

 function isGameOver(){
    alert('game over')
    input.value = ''
    wrongValue=0;
    rightValue=0;
    wrongAnsPerValue=0
    rightAnsPerValue=0
    headingOne.style.display=''
    const link = document.createElement('a')
    link.setAttribute('class','btn btn-primary')
    link.setAttribute('href','/Vanila-Js-Digit-Guessing-Game-Project1-/')
    link.textContent='Play Again'
    addLink.append(link)
 }

 function addSorryImage(){
    const img = document.createElement('img');
    img.setAttribute('src','./sadImg.gif')
    img.setAttribute('height','140px')
    img.setAttribute('width','250px')
    sorryImg.append(img)
 }

 function addHappyImage(){
   const img = document.createElement('img');
   img.setAttribute('src','./happyImg.gif')
   img.setAttribute('height','140px')
   img.setAttribute('width','250px')
   happyImg.append(img)
}

 function isWrongDigit(){
    wrongValue++
    const para = document.createElement('p')
    para.className='box'
    para.textContent=`Sorry,It was ${genRandomValue}`
    para.style.color='red'
    paraAdd.append(para)
    input.value = ''
    genRandomValue=Math.ceil(Math.random()*9)
    wrongAns.textContent=`Wrong Digit : ${wrongValue}`
    wrongAnsPerValue+=20
    wrgAnsPer.textContent=`wrong answer : ${wrongAnsPerValue}%`
 }

 function isRightDigit(){
    rightValue++
    const para = document.createElement('p')
    para.className='box2'
    para.textContent=`Wow Great`
    para.style.color='green'
    paraAdd.append(para)
    input.value = ''
    sorryImg.remove()
    genRandomValue=Math.ceil(Math.random()*9)
    rightAns.textContent=`Right Digit : ${rightValue}`
    rightAnsPerValue+=20
    rigAnsPer.textContent=`right answer : ${rightAnsPerValue}%`
 }

 playGuBtn.addEventListener('click',()=>{
   const conVToNumber = Number(input.value)
   if(input.value === '' || input.value>9){
       alert('Give a digit 0-9');
       input.value = ''   
   }
  else if(conVToNumber!==genRandomValue){
    maxValue++
    
    if(maxValue===6){
      isGameOver()
      removeItem()
    }
    if(maxValue===3){
      addSorryImage()
    }
    
    isWrongDigit()

 }else if(conVToNumber===genRandomValue){
   if(maxValue===6){
      isGameOver()
      removeItem()
    }
    if(maxValue===1){
      addHappyImage()
    }
    isRightDigit()
 } 

})

})()
