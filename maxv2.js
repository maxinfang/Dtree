 var myNodes=new Array();
 

 var op= new Array();
       
      op[0] = "rootNode";
      op[1] = "something1";
      op[2] = "something2";
   

$(document).ready(function()  {
    
    //initialize jsPlumb
    
  
    /*initialize endpoint Class*/
      jsPlumb.Defaults.Container = $("#canvasdiv"); 
      jsPlumb.DefaultDragOptions = {  cursor:"pointer",
                                      zIndex: 2000 };
      jsPlumb.endpointClass = "endpointClass";
      jsPlumb.connectorClass =  "connectorClass";   
  
    /*initialize bind function*/
   ///click
      
   ///connection 
     
     
  
  
     
   //check wehter we need reload or not
     // var history=window.parent.check(); 
  history="";
      if(history == ""){ 
      }
      else{
       redraw(history); 
       addConnections(myNodes);
      }
  
  
  jsPlumb.bind("connection", function(info, originalEvent) {
       var conn = info.connection;
        var parentId=$('#'+conn.sourceId).parent().attr('id');
        var childId=$('#'+conn.targetId).parent().attr('id');
        var node = findnode(childId);
        node.parentID=parentId;
        updateNode(node,"parentID");
      
      
        $("#"+childId).children().each(function(no,el){
        if($(el).hasClass("droplist")){
        $(el).show();
        } 
        });
    
    
       document.getElementById(" ").style.zIndex="1";
    
        });
   //initialzie button action to different buttons;
  
    $("#a").click(function(){ 
         var node= new Node();
         node.id =generateID(myNodes);
         node.type="T";
         node= drawnode(node); 
         addNewNode(node);
  });
    $("#c").click(function(){ 
         var node= new Node();
         node.id =generateID(myNodes);
         node.type="C";
         node= drawnode(node);
         addNewNode(node);
  });
  
   $("#r").click(function(){ 
         var node= new Node();
         node.id =generateID(myNodes);
         node.type="S";
         node= drawnode(node);
         addNewNode(node);
  });
  
  $("#h").click(function(){ 
         var node= new Node();
         node.id =generateID(myNodes);
         node.type="H";
         node= drawnode(node);
         addNewNode(node);
  });
   $("#d").click(function(){ 
         var node= new Node();
         node.id =generateID(myNodes);
         node.type="D";
         node= drawnode(node);
         addNewNode(node);
  });
   
   $("#clear").click(function(){
           if (confirm('Are you sure you want to delete all nodes?')) {
              $("#canvasdiv").empty();
             emptymyNodes();
            } 
         
       })
  
  
  
})