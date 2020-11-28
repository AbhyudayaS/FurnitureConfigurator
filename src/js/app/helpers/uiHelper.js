export default class UIHelper {

    static showBorderOnSelectionExtColor(index){
      const contactsSheetsDiv = document.getElementById('mySidepanel');
     
      if (contactsSheetsDiv.hasChildNodes()) {
        // Get all children of node
  
        const children = contactsSheetsDiv.childNodes;      
        // Loop through the children
        for (let c = 0; c < children.length; c += 1) {
          if (children[c].style) {
            children[c].style.border = '0px solid black';
          }
        }
        children[index].style.border = '0.1em solid black';
      }
    }
}