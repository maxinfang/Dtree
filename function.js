var MEMBER_SEPARATOR='b';
var NODE_SEPARATOR='a';
  
function Node(id,type,parent,top,left,selectvalue,emv,prob){      this.id = "";
       this.type="";
       this.parentID =""; 
       this.top ="";
       this.left=""; 
       this.value="";
       this.emv="";
       this.prob="" 
     }  
 
function deserialise(string){
       var array= new Array();
       var stringnode=  string.split('a');
       //console.log(stringnode.length);
       for(i=0;i<stringnode.length-1;i++){
       var nodeAttribute=stringnode[i].split('b');
       //console.log(nodeAttribute[1]);
       var node = new Node();
       node.type= nodeAttribute[0]
       node.id=nodeAttribute[1];
       node.value=nodeAttribute[2];
       node.left =nodeAttribute[3]; 
       node.top =nodeAttribute[4]; 
       node.emv=nodeAttribute[5];
       node.prob=nodeAttribute[6]; 
       node.parentID=nodeAttribute[7]; 
       array.push(node);
          
       }  
     return array; 
}


function serialise(myNodes){
      var answervalue =""; 
      for(l=0;l<myNodes.length;l++){
      var thisnode=myNodes[l]; 
      answervalue+=thisnode.type;
      answervalue+=MEMBER_SEPARATOR;
      answervalue+=thisnode.id;
      answervalue+=MEMBER_SEPARATOR;
      answervalue+=thisnode.value;
      answervalue+=MEMBER_SEPARATOR;
      answervalue+=thisnode.left;
      answervalue+=MEMBER_SEPARATOR;
      answervalue+=thisnode.top;
      answervalue+=MEMBER_SEPARATOR;
      answervalue+=thisnode.emv;
      answervalue+=MEMBER_SEPARATOR;
      answervalue+=thisnode.prob;
      answervalue+=MEMBER_SEPARATOR;
      answervalue+=thisnode.parentID;
      answervalue+=MEMBER_SEPARATOR;
      answervalue+=NODE_SEPARATOR;
    } 
      return answervalue;
};

function generateID(myNodes){
      
  if (typeof(myNodes) == "undefined" ) {return 1;}
      
      var myNodesArray=myNodes;
      var max=0;  
      
      for(n=0; n<myNodesArray.length;n++){ 
         var node= myNodes[n]; 
          node.id >max;
          max=node.id 
       } 
      
      return max+1;
      
      };

  function findnode(id){ 
       for(n=0; n<myNodes.length;n++){
         if (myNodes[n].id == id){ 
         return myNodes[n];
         }
       }
       }

 function addNewNode(node){

     myNodes.push(node);
     sentToparentPage()
   }
function  emptymyNodes(){

     myNodes=[];
    sentToparentPage()
   }


 function updateNode(node,property){
      
      var myNodesArray=myNodes;
      
      for(n=0; n<myNodesArray.length;n++){ 
         var n= myNodes[n]; 
        if(  n.id== node.id){
          if(property=="top") {n.top=node.top;}
          if(property=="left"){n.left=node.left;}
          if(property=="parentID"){n.parentID=node.parentID;}
          if(property=="emv"){n.emv=node.emv;}
          if(property=="prob"){n.prob=node.prob;}
          if(property=="value"){n.prob=node.value;}
        }
       } 
        sentToparentPage()
      };


function  giveWarning(){
      var numberOfnoParent=0;
  for(n=0; n<myNodes.length;n++){
        var node= myNodes[n];
        var parentid = node.parentID;
        if(parentid=="") numberOfnoParent++;
       }  
         if (numberOfnoParent>1) {
           $("p").text("Warning: Not all nodes are connected!")
         }  
            else{$("p").text("")
       }; 
}

function sentToparentPage()
{
  giveWarning();
  var answervalue = serialise(myNodes); 
    
 // window.parent.save(answervalue);
  $('#answer').val(answervalue); 
  console.log(myNodes);
}

function deleteNode(node)
{
       var deletedNodeid=node.id;
       var index = myNodes.indexOf(deletedNodeid); 
       myNodes.splice(index,1);
       
       for(n=0; n<myNodes.length;n++){
        var node= myNodes[n];
        var parentid =deletedNodeid;
         if(node.parentID=parentid){node.parentID="";
                                   
                                   $("#"+node.id).children().each(function(no,el){
        if($(el).hasClass("droplist")){
        $(el).hide();
        } 
        });}
       }  
}


 