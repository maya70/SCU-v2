$(function(){
	function createMenuList(mainMenu) {
            var menu = $("#hornavmenu");
            if(!mainMenu.sub)
				{menu.append('<li> <a href='+ mainMenu.link +'> ' +  mainMenu.name +  ' </a> </li>');}
			else{

           		 var html = '<li> <span> ' + mainMenu.name + ' </span> <ul align="right">';
           		 for(var i=0; i < mainMenu.sub.length; i++)
           		 {
              	  	if(mainMenu.sub[i].sub){
              	  		html += '<li> <span> '+ mainMenu.sub[i].name + ' </span> <ul align="right">';
              	    	 for(var k=0; k < mainMenu.sub[i].sub.length; k++)
              	     	 {
              	     		html += '<li> <a href= ' + mainMenu.sub[i].sub[k].link + '> ' + mainMenu.sub[i].sub[k].name + ' </a> </li>';
              	     	 }	
              	     	 html += '</ul> </li> ';
              	     }
              	     else{
              	     	html += '<li> <a href=' + mainMenu.sub[i].link + '> ' + mainMenu.sub[i].name+ '</a> </li>';	  
              	     }
            	 }
           		 html += '</ul> </li>';
           		 menu.append(html);
				}
            
        }
    var m1 = {name: 'Testing', link: 'contact.html'};
    createMenuList(m1);  
    var m2 = {name: 'Testing Nesting 1',
			  link: '',
			  sub: [{
			  		  name: 'n1',
			  		  link: '' ,
			  		  sub: [{
			  		  		name: 's1',
			  		  		link: "it_unit.html"
			  		  		}]
			  			},
			  		   {
			  		  name: 'n2',
			  		  link: 'it unit.html' 
			  			},
			  		  {
			  		  name: 'n3',
			  		  link: 'it unit.html' 
			  			},
			  		  {
			  		  name: 'n4',
			  		  link: 'it unit.html' 
			  		   }
			  		]
			 };
    createMenuList(m2);    

              
});