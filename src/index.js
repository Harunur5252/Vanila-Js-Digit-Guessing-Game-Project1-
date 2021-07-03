import UI from "./modules/ui"
import Data from "./modules/data"
import './images/happyImg.gif'
import './images/sadImg.gif' 

 const data = new Data()
 data.genRandomValue=Math.ceil(Math.random()*9)
 UI.init()
 
 
 
