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
    var m1 = {name: 'اتصل بنا', link: 'contact.html'};
    createMenuList(m1);  
	
	var m2 = {name: 'الخريجين', link: 'graduation.html'};
    //createMenuList(m2);  
	
    var m3= {name: 'الوحدات',
			  link: '',
			  sub: [{
			  		  name: 'وحدة تكنولوجيا المعلومات',
			  		  link: 'it_unit.html' 
			  			},
			  		   {
			  		  name: 'وحدة ضمان الجودة والاعتماد',
			  		  link: 'quality_unit.html' 
			  			},
			  		  {
			  		  name: 'وحدة الدعم الطلابى',
			  		  link: 'support_unit.html' 
			  			},
			  		  {
			  		  name: 'وحدة التدريب',
			  		  link: 'training_unit.html' 
			  		   },
					   {
			  		  name: 'مركز المعلومات العلمية والتكنولوجية',
			  		  link: 'faccenter.html' 
			  		   }
					   
			  		]
			 };
    createMenuList(m3);    
	
	 var m4 = {name: 'القطاعات',
			  link: '',
			  sub: [{
			  		  name: 'قطاع تنمية البيئة وخدمة المجتمع',
			  		  link: 'env_sector.html' ,
			  		  
			  			},
			  		   {
			  		  name: 'قطاع الدراسات العليا والبحوث',
			  		  link: 'grad_sector.html' 
			  			},
			  		  {
			  		  name: 'قطاع شئون التعليم و الطلاب',
			  		  link: 'student_sector.html' 
			  			},
			  		  {
			  		  name: 'قطاع رعاية الشباب ',
			  		  link: 'youth_sector.html' 
			  		   }
					   
			  		]
			 };
    createMenuList(m4);    
	 var m5 = {name: 'هيئة التدريس',
			  link: '',
			  sub: [{
			  		  name: 'أعضاء هيئة التدريس',
			  		  link: '' ,
			  		  sub: [{
			  		  		name: 'قسم علوم الحاسب',
			  		  		link: "staff_cs.html"
			  		  		}
							,
							{
			  		  		name: 'قسم نظم المعلومات',
			  		  		link: "staff_is.html"
			  		  		}
							,
							{
			  		  		name: 'قسم العلوم الاساسيه ',
			  		  		link: "staff_bs.html"
			  		  		}
											
													
							]
			  			},
						{
			  		  name: 'الابحاث العلمية الخاصة بأعضاء هيئة التدريس',
			  		  link: '' ,
			  		  sub: [{
			  		  		name: 'قسم علوم الحاسب',
			  		  		link: "it_unit.html"
			  		  		}
							,
							{
			  		  		name: 'قسم نظم المعلومات',
			  		  		link: "it_unit.html"
			  		  		}
							,
							{
			  		  		name: 'قسم العلوم الاساسيه ',
			  		  		link: "it_unit.html"
			  		  		}
											
													
							]
			  			}
			  		]
			 };
    createMenuList(m5);    
	 var m6 = {name: 'الحياة الاكاديمية',
			  link: '',
			 sub: [{
			  		  name: 'النظام الدراسى',
			  		  link: '' ,
			  		  sub: [{
			  		  		name: 'الجداول الدراسية',
			  		  		link: "schedules.html"
			  		  		}
							,
							{
			  		  		name: 'المكتبة',
			  		  		link: "library.html"
			  		  		}
							,
							{
			  		  		name: 'توصيف المقررات ',
			  		  		link: "syllabi.html"
			  		  		},
							
							{
			  		  		name: 'مشاريع التخرج',
			  		  		link: "projects.html"
			  		  		}
							
							,
							{
			  		  		name: 'توصيف البرامج الدراسية ',
			  		  		link: "programs.html"
			  		  		}
							,
							{
			  		  		name: 'نظام الامتحانات',
			  		  		link: "exams.html"
			  		  		}
							,
							{
			  		  		name: 'اللوائح الدراسية ',
			  		  		link: "policies.html"
			  		  		}]
			  			},
						{
			  		  name: 'الخدمات الطلابية',
			  		  link: '' ,
			  		  sub: [{
			  		  		name: 'تفعيل حساب الانترنت',
			  		  		link: "student_accounts.html"
			  		  		}
							,
							{
			  		  		name: 'المكتبات ',
			  		  		link: "library.html"
			  		  		}
							,
							{
			  		  		name: 'وحدة الدعم الأكاديمى',
			  		  		link: "support_unit.html"
			  		  		}]
			  		  	},
						{
			  		  name: 'الدراسات العليا',
			  		  link: '' ,
			  		  sub: [{
			  		  		name: 'البرامج واللائحة الدراسية',
			  		  		link: "graduate.html"
			  		  		}
							,
							{
			  		  		name: 'قواعد وشروط التسجيل ',
			  		  		link: "conditions.html"
			  		  		}
							,
							{
			  		  		name: 'الجداول',
			  		  		link: "grad_schedules.html"
			  		  		}
								
											
													
							]
			  			}
			  		]
			 };
    createMenuList(m6);    
	 var m7= {name: 'عن الكلية',
			  link: '',
			 sub: [{
			  		  name: 'نبذة عن الكلية',
			  		  link: '' ,
			  		  sub: [{
			  		  		name: 'تاريخ الكلية',
			  		  		link: "fac_history.html"
			  		  		}
							,
							{
			  		  		name: 'رؤية ورساله الكليه ',
			  		  		link: "facvision.html"
			  		  		}
							,
							{
			  		  		name: 'اقسام الكلية ',
			  		  		link: "facdepts.html"
			  		  		},
							
							{
			  		  		name: 'انجازات الكلية',
			  		  		link: "fac_achieve.html"
			  		  		}
							
							,
							{
			  		  		name: 'الخطه الاستراتيجيه للكلية',
			  		  		link: "fac_plan.html"
			  		  		}
							,
							{
			  		  		name: 'الدراسه الذاتيه',
			  		  		link: "self_study.html"
			  		  		}
							,
							{
			  		  		name: 'منشأت الكلية',
			  		  		link: "buildings.html"
			  		  		}
											
													
							]
			  			},
						{
			  		  name: 'ادارة الكلية',
			  		  link: '' ,
			  		  sub: [{
			  		  		name: 'العميد',
			  		  		link: "dean.html"
			  		  		},
			  		  		{
			  		  		name: 'وكلاء الكلية',
			  		  		link: "vps.html"
			  		  		}
							,
							{
			  		  		name: 'أمانة الكلية ',
			  		  		link: "amanah.html"
			  		  		}
							,
							{
			  		  		name: 'الهيكل التنظيمى للكلية',
			  		  		link: "fac_structure.html"
			  		  		}
							
						
			  		 ]
					 }
					 ]
			 };
    createMenuList(m7);  

    var m8 = {name: 'الرئيسية', link: 'index.html'};
    createMenuList(m8);  
	

              
});