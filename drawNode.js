function drawnode(node){
     
      
  
       
 
      newdiv= document.createElement('div'); 
      $(newdiv).attr('id',node.id);
      var containerId = $(newdiv).attr('id');
      $(newdiv).addClass("container");
      $(newdiv).addClass(node.type);
      
     //postion
      if(node.top==""){ 
       }
       else{
      $(newdiv).css({ top: node.top, left: node.left });
      } 
  
  
      $("#canvasdiv").append(newdiv);
      dragzone= document.createElement('div');
      $(dragzone).uniqueId();
      var currentId=$(dragzone).attr("id");
      $(newdiv).append(dragzone); 
      addShape(node.type,dragzone); 
  
      var dropL=addDroplist();
     if (node.parentID!=""){           $(newdiv).append(dropL.show());  }
  else{ $(newdiv).append(dropL.hide()); 
  } 
  
      datadiv= document.createElement('div');
      $(datadiv).addClass("datatable");
      $(newdiv).append(datadiv);
  
      $(datadiv).append(addlabel("EMV"));
      var emv;
  if(node.emv==""){
     emv=addtext("EMV");}
     else{
        
     emv= addtext("EMV",node.emv)}
     $(datadiv).append(emv);
      
      var prob;
      if(node.prob ==""){
      prob=addtext("EMV");
      }else{
      prob=addtext("EMV",node.prob);
        
  
  }
      $(datadiv).append(addlabel("Prob"));
      $(datadiv).append(prob);
       
      $(prob).change(function() {
           node.prob= $(prob).val();
           updateNode(node,"prob");
         
});   
     $(emv).change(function() {
           node.emv= $(emv).val();
           updateNode(node,"emv");
         
});  
   
  
  
      $(newdiv).dblclick(function() {
      if (confirm('Are you sure you want to delete the node?')) {   
        jsPlumb.detachAllConnections(currentId )
        jsPlumb.removeAllEndpoints(currentId);
        deleteNode(node);
        $(this).empty();  
      }  
      });
  
      jsPlumb.draggable(containerId);
      $("#"+containerId).draggable(    
          {   stop: function(event, ui ){ 
              position = ui.position; 
             value="top:"+position.top+"left"+position.left;
             node.top=position.top;
             node.left=position.left; 
             updateNode(node,"top");
             updateNode(node,"left");
              
            }
          }
       );   
      //connection
     
      var top= $('#'+containerId).position().top;
      var left=$('#'+containerId).position().left;
  
      node.top=top;
      node.left=left;
  
  
    return node;
   
}