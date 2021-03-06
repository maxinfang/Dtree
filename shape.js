

function addShape(type,dragzone){
  if (type=="T") {addTriangle(dragzone);}
   if (type=="C") {addCircle(dragzone);}
  if (type=="S") {addRect(dragzone);}
  if (type=="H") {addHexagon(dragzone);}
  if (type=="D") {addDiamond(dragzone);}
}

function addDiamond(dragzone) {
    var paper = new Raphael(
      $(dragzone).get(0), 100, 100); 
  
    var diamond= paper.path( "M0 50L 50 100L100 50L50 0Z")
           .attr({
            fill : "#fa0000",
            stroke : "black",
            strokeWidth : 0,
            r : 5
      }); 
     var sourcePoint= {
        anchor:"Right", 
         connectorStyle: {
            lineWidth: 2,
            strokeStyle: '#666'
        }, 
        connector: ["Straight"],
        maxConnections: -1,
        connectorOverlays: [["Arrow",
        { width: 15,
         length: 15}
        ]], 
        isSource:true,
        isTarget:false, 
        };
         
        var targetPoint= {
        anchor: "Left",
        isSource:false,
        isTarget:true, 
    };
    var currentId = $(dragzone).attr('id'); 
    e1= jsPlumb.addEndpoint(currentId, sourcePoint);
    e2= jsPlumb.addEndpoint(currentId, targetPoint);  
  
};




function addRect(dragzone) { 
   var paper = new Raphael(
        $(dragzone).get(0), 100,100); 
         var rect =paper.rect(0, 0, 100, 100)
           .attr({
            fill : "#fa0000",
        }); 
    var sourcePoint= {
        anchor:"Right", 
         connectorStyle: {
            lineWidth: 2,
            strokeStyle: '#666'
        }, 
        connector: ["Straight"],
        maxConnections: -1,
        connectorOverlays: [["Arrow",
        { width: 15,
         length: 15}
        ]], 
        isSource:true,
        isTarget:false, 
        };
         
        var targetPoint= {
        anchor: "Left",
        isSource:false,
        isTarget:true, 
    };  
    var currentId = $(dragzone).attr('id'); 
    e1= jsPlumb.addEndpoint(currentId, sourcePoint);
    e2= jsPlumb.addEndpoint(currentId, targetPoint);   
  }


function addTriangle(dragzone) {
    var paper = new Raphael(
      $(dragzone).get(0), 100, 80);  
    var triangle =paper.path( "M0 80L 100 80L50 0Z")
           .attr({
            fill : "#fa0000",
            stroke : "black",
            strokeWidth : 0,
            r : 5
      }); 
     var sourcePoint= {
        anchor:"BottomRight", 
         connectorStyle: {
            lineWidth: 2,
            strokeStyle: '#666'
        }, 
        connector: ["Straight"],
        maxConnections: -1,
        connectorOverlays: [["Arrow",
        { width: 15,
         length: 15}
        ]], 
        isSource:true,
        isTarget:false, 
        };
         
        var targetPoint= {
        anchor: "BottomLeft",
        isSource:false,
        isTarget:true, 
    };
    var currentId = $(dragzone).attr('id'); 
    e1= jsPlumb.addEndpoint(currentId, sourcePoint);
    e2= jsPlumb.addEndpoint(currentId, targetPoint);  
  
};

  function addCircle(dragzone) {
    var paper = new Raphael(
    $(dragzone).get(0), 100, 100);   
    var circle =paper.circle(50, 50)
           .attr({
            fill : "#fa0000", 
            r : 50
        }); 
    var sourcePoint= {
        anchor:"Right", 
         connectorStyle: {
            lineWidth: 2,
            strokeStyle: '#666'
        }, 
        connector: ["Straight"],
        maxConnections: -1,
        connectorOverlays: [["Arrow",
        { width: 15,
         length: 15}
        ]], 
        isSource:true,
        isTarget:false, 
        };
         
        var targetPoint= {
        anchor: "Left",
        isSource:false,
        isTarget:true, 
    };  
    var currentId = $(dragzone).attr('id'); 
    e1= jsPlumb.addEndpoint(currentId, sourcePoint);
    e2= jsPlumb.addEndpoint(currentId, targetPoint); 
        
  }

  function addHexagon(dragzone) {
    var paper = new Raphael(
    $(dragzone).get(0), 100, 100);  
    
    var hpath= hexagon(50,50,50);
    function hexagon(x,y,r) {
  var x1 = x;
  var y1 = y-r;
  var x2 = x+(Math.cos(Math.PI/6)*r);
  var y2 = y-(Math.sin(Math.PI/6)*r);
  var x3 = x+(Math.cos(Math.PI/6)*r);
  var y3 = y+(Math.sin(Math.PI/6)*r);
  var x4 = x;
  var y4 = y+r;
  var x5 = x-(Math.cos(Math.PI/6)*r);
  var y5 = y+(Math.sin(Math.PI/6)*r);
  var x6 = x-(Math.cos(Math.PI/6)*r);
  var y6 = y-(Math.sin(Math.PI/6)*r);
  
  var path = "M"+x1+" "+y1+" L"+x2+" "+y2+" L"+x3+" "+y3+" L"+x4+" "+y4+" L"+x5+" "+y5+" L"+x6+" "+y6+"z";
  return path;
}
     var hexagon=paper.path(hpath)
           .attr({
            fill : "#fa0000",
            stroke : "black",
            strokeWidth : 0,
             
      });
    var sourcePoint= {
        anchor:"Right", 
         connectorStyle: {
            lineWidth: 2,
            strokeStyle: '#666'
        }, 
        connector: ["Straight"],
        maxConnections: -1,
        connectorOverlays: [["Arrow",
        { width: 15,
         length: 15}
        ]], 
        isSource:true,
        isTarget:false, 
        };
         
        var targetPoint= {
        anchor: "Left",
        isSource:false,
        isTarget:true, 
    };  
    var currentId = $(dragzone).attr('id'); 
    e1= jsPlumb.addEndpoint(currentId, sourcePoint);
    e2= jsPlumb.addEndpoint(currentId, targetPoint); 
        
  }
  