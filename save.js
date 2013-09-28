$(document).ready(function()  {$('body').mouseup(function(){  
       
       // console.log( $( "#canvasdiv" ).children() );  
       $( "#canvasdiv" ).children().each(function(n,i) {
           //console.log(i); build a tree
         if($(i).hasClass('container')){ 
           var containerid=$(i).attr('id');
           if( $(i).hasClass('triangle')){
              console.log("this is triangle");
             // console.log( $(i).get(0).style.top);
              var top= $(i).get(0).style.top;
              var left= $(i).get(0).style.left;
          
             $(i).children().each(function(no,el){
                 // console.log(el);
               if($(el).hasClass("_jsPlumb_endpoint_anchor_")){
                  
                 //  console.log("get"+node.gettop());
                 //console.log(el.id);
                 var endPoints =jsPlumb.getEndpoints(el.id) ;
                 
                 for(var i=0; i<endPoints.length;i++) 
                 {// console.log(endPoints[i]);
                var thisEndPoint=endPoints[i];
                   
                if( thisEndPoint.isTarget==true){
                  if( thisEndPoint.connections == ''){ 
                    // has been connected.
                  }
                  
                   if( thisEndPoint.connections != ''){ 
                     // has been connected
                      var c= thisEndPoint.connections[0];
                     // console.log("$$$$$$"+c.sourceId );
                  console.log($("#"+c.sourceId).parent().attr('id'));
                     
                  }  
                };
                if( thisEndPoint.isSource==true){
                  if( thisEndPoint.connections ==''){ 
                     
                  }
                };
             
               }
                 
                   
               };
             }) ;
             
             
             /* var endPoints =jsPlumb.getEndpoints(currentId) ;
              
              for(var i=0; i<endPoints.length;i++) 
              {   //  console.log(endPoints[i]);
                var thisEndPoint=endPoints[i];
                if( thisEndPoint.isTarget==true){
                  if( thisEndPoint.connections == ''){ 
                  $('#1').hide();
                  }
                };
             
               }
             
             */
             
             
             
             
           }
           //console.log( $(i).get(0).children)
         } 
         
});
       
    })
})