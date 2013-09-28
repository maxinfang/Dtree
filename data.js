function addDroplist(options){
  if (typeof option == 'undefined'){
     newselect= document.createElement('select');
      $(newselect).addClass("droplist");
      var select= $(newselect).uniqueId(); 
        for(o=0;o<op.length;o++){
        $(newselect).append('<option >'+op[o]+'</option>');
        } 
       
      return $(newselect);
  
  }
  else{ 
    alert(options)
  }

};

function addlabel(lable){
  
var newlabel= document.createElement('LABEL');
 newlabel.setAttribute("for",lable);
    newlabel.innerHTML = lable;
 
return newlabel;
};

function addtext(lable,value){ 
var text= document.createElement('input');
$(text).uniqueId();  
text.type="text";
text.name=lable; 
if(typeof(value) != "undefined")
{
  
  text.value=value;
}
 
return text;
};

 