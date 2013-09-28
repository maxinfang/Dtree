function redraw(history){
  
    myNodes=deserialise(history);
    
    for(n=0; n<myNodes.length;n++){ 
         var node= myNodes[n];
      
         drawnode(node);
       } 
    sentToparentPage()
      }

 