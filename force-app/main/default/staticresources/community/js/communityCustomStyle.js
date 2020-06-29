/*
Change History
****************************************************************************************************************************************************
JIRA		ModifiedBy		Date			Requested By		Description																	Tag
****************************************************************************************************************************************************
SS-7926		balajip			22-02-2017		Pattabhi Raman		Added woopra event tracking for Case Creation steps							T01
****************************************************************************************************************************************************
*/
$(document).ready(function() {

          var isBrowserIE = $.isBrowserIE

           /** Main tabs styling start **/
           
           //Apply the background of the tabs
           $("#AppBodyHeader").addClass('grey-header');
           
           //Apply the containers for the tab
           $("#tabContainer").attr('class','communities tab-box') 
           
           //Apply the tabs style to the ul
           $("#tabBar").attr('class','tabs');
           
           //loop through each li
           $("#tabBar").children().each(function() {
           
              //get the anchor tag and set its class to tab
               $(this).children().each(function(){
                   $(this).attr('class','tab');
                   
                   //if the tab is currently selected set the appropriate style based on the title string value.
                   var titleString = $(this).attr('title');
                   if(titleString != undefined && titleString.toLowerCase().indexOf("selected") >= 0) {
                       $(this).addClass('selected');
                   }
                   if(titleString != undefined && titleString.toLowerCase().indexOf("home") >= 0) {
                       $(this).wrapInner('<span><i class="fa fa-home">&nbsp;&nbsp;</i></span>').css({'font-size':'14px'}) 
                       $(this).click(function() { trackViaWoopra('Accessed E Support Home') });
                   } else if (titleString != undefined && titleString.toLowerCase().indexOf("project") >= 0){
                      $(this).wrapInner('<span><i class="fa fa-briefcase">&nbsp;&nbsp;</i></span>').css({'font-size':'14px'}) 
                      $(this).click(function() { trackViaWoopra('Accessed E Support Projects') });
                   }else if (titleString != undefined && titleString.toLowerCase() ==="cases tab"){
                      $(this).wrapInner('<span><i class="fa fa-barcode">&nbsp;&nbsp;</i></span>').css({'font-size':'14px'}) 
                      $(this).click(function() { trackViaWoopra('Accessed E Support Cases') });
                   }else if (titleString != undefined && titleString.toLowerCase().indexOf("tech configurations") >= 0){
                      $(this).wrapInner('<span><i class="fa fa-list-ol">&nbsp;&nbsp;</i></span>').css({'font-size':'14px'}) 
                      $(this).click(function() { trackViaWoopra('Accessed E Support Tech configurations') });
                   }else if (titleString != undefined && titleString.toLowerCase().indexOf("contacts") >= 0){
                      $(this).wrapInner('<span><i class="fa fa-users">&nbsp;&nbsp;</i></span>').css({'font-size':'14px'}) 
                      $(this).click(function() { trackViaWoopra('Accessed E Support Contacts') });
                   }else if (titleString != undefined && titleString.toLowerCase().indexOf("dashboards") >= 0){
                      $(this).wrapInner('<span><i class="fa fa-tachometer">&nbsp;&nbsp;</i></span>').css({'font-size':'14px'}) 
                      $(this).click(function() { trackViaWoopra('Accessed E Support Dashboards') });
                   }else if (titleString != undefined && titleString.toLowerCase().indexOf("search") >= 0){
                      $(this).wrapInner('<span><i class="fa fa-search">&nbsp;&nbsp;</i></span>').css({'font-size':'14px'}) 
                      $(this).click(function() { trackViaWoopra('Accessed E Support Search') });
                   }else {
                      //The content of the anchor needs to in a span so that the tabs are aligned properly
                      $(this).wrapInner('<span></span>')
                   }

                   
               });
               
           }); 
           
           //Remove the unwanted the span so that there is no gap between selected and the following tabs
           $("span.tab").remove(); 
           
           /** Main tabs styling end**/
           
           /**Start side bar styling **/
           $("#sidebarDiv").css({'background-color':'white'});
           $("div.linksModule.sidebarModule").css({'background-color':'white'});
           //$("div.aside-box aside-box-white div").attr('class','aside-box-white');
           
           $("div.sidebarModuleBody").addClass('items').css({'background':'white'});
           $("div.items ul").addClass('normal-link-listing');
           
           $("div.sidebarModule.htmlAreaComponentModule").each(function(idx){
               if(idx == 0) {
                   $(this).addClass('aside-box');
               }else {
                   $(this).attr('class','aside-box aside-box-white'); 
               }               
           });

           /**
              Styling left nav quick links
           **/
           var quickLinkCss = {'color':'white','font-size' : '10px'};

           $('a').each(function(){
              if($(this).text() == 'Create Case') {                 
                 $(this).addClass('blue-btn').css(quickLinkCss);
                 $(this).html('<span><i class="fa fa-barcode"></i> Create Case</span></br>'); 
                 $(this).click(function() { trackViaWoopra('Clicked on Create Case Quick Link') });  
                 $(this).parent().after('<br/>')              
              }else if($(this).text() == 'CSM') {                
                 $(this).addClass('blue-btn').css(quickLinkCss);
                 $(this).html('<span><i class="fa fa-credit-card"></i> &nbsp;CSM </span> </br>'); 
                 $(this).click(function() { trackViaWoopra('Clicked on CSM Quick Link') }); 
                 $(this).parent().after('<br/>')                 
              }else if($(this).text() == 'Ask An Expert') {                
                 $(this).addClass('blue-btn').css(quickLinkCss);
                 $(this).html('<span><i class="fa fa-anchor"></i> &nbsp;Ask An Expert</span> </br>'); 
                 $(this).click(function() { trackViaWoopra('Clicked on Ask An Expert Link') }); 
                 $(this).parent().after('<br/>')                 
              }else if($(this).text() == 'Add Tech Profile') {
                 $(this).addClass('blue-btn').css(quickLinkCss);          
                 $(this).html('<span> <i class="fa fa-list-ol"></i> Add Tech Profile </span> </br>');
                 $(this).click(function() { trackViaWoopra('Clicked on Add Tech Profile Quick Link') });
                 $(this).parent().after('<br/>')                  
              }else if($(this).text() == 'Change Request') {
                $(this).addClass('blue-btn').css(quickLinkCss);                
                 $(this).html('<span><i class="fa fa-code"></i> Change Request</span> </br>');
                 $(this).click(function() { trackViaWoopra('Clicked on Change Request Quick Link') });
                 $(this).after('<br/>') 
              }else if($(this).text() == 'Download Screen Recorder') {
                $(this).addClass('blue-btn').css(quickLinkCss);                
                 $(this).html('<span><i class="fa fa-download"></i> Download Screen Recorder</span> </br>');
                 $(this).click(function() { trackViaWoopra('Clicked on Download Screen Recorder Quick Link') });
                 $(this).after('<br/>') 
              }else if($(this).text() == 'Request VAS') {
                $(this).addClass('blue-btn').css(quickLinkCss);                
                 $(this).html('<span><i class="fa fa-code"></i> Request VAS</span> </br>');
                 $(this).click(function() { trackViaWoopra('Clicked on Request VAS Quick Link') });
                 $(this).after('<br/>') 
              }else if($(this).text() == 'Export to Excel') {
                $(this).click(function(){ trackViaWoopra('Clicked on Export to Excel') });
              }
           });  
		   
		   //----------------------------------------------------------------------------------------------------<T01>
		   //add the tracking only for Technical case by checking if the Previous button is present. The Previous button is present only for Technical case.
		   if ($("a[class='buttonPrevious']").first().is(":visible")){		   
			   //add woopra tracking for the Next/Previous/Finish buttons on the Technical Case creation page
			   $( "a[class='buttonPrevious'],a[class='buttonNext'],a[class^='buttonFinish']" ).bind( "click", function() {
				   var step = 'step1';
				   if ($("a[class='selected']").length>0){
						step = $("a[class='selected']").first().attr('id');
				   }
				   var subject = $( "div[data-case-field='Subject']" ).find('textarea').first().val();
				   //var description = $( "div[data-case-field='Description']" ).find('textarea').first().val();
				   var techProfileId = $("input[name='techprofile']:checked").val();

				   console.log('step='+step+', subject='+subject+', techProfileId='+techProfileId);

				   trackViaWoopra('Case Creation - ' + step + ' , Clicked on ' + $(this).text(),{'subject':subject, 'techProfileId':techProfileId}); 			   
			   });
			   
			   //add woopra tracking for the Steps on the Technical Case creation page
			   $( "a[id='step1'],a[id='step2'],a[id='step3']" ).bind( "click", function() {
				   var subject = $( "div[data-case-field='Subject']" ).find('textarea').first().val();
				   //var description = $( "div[data-case-field='Description']" ).find('textarea').first().val();
				   var techProfileId = $("input[name='techprofile']:checked").val();

				   console.log('subject='+subject+', techProfileId='+techProfileId);

				   trackViaWoopra('Case Creation - Clicked on ' + $(this).attr('id'),{'subject':subject, 'techProfileId':techProfileId}); 
			   });

			   //add woopra tracking for the technical profile radio
			   $( "input[name='techprofile']" ).bind( "click", function() {
				   var subject = $( "div[data-case-field='Subject']" ).find('textarea').first().val();
				   //var description = $( "div[data-case-field='Description']" ).find('textarea').first().val();
				   var techProfileId = $("input[name='techprofile']:checked").val();

				   console.log('subject='+subject+', techProfileId='+techProfileId);

				   trackViaWoopra('Case Creation - clicked on the tech. profile ' + $(this).val(),{'subject':subject, 'techProfileId':techProfileId}); 
			   });
		   }
		   //----------------------------------------------------------------------------------------------------</T01>
           
           /**
              Styling case detail buttons
            **/
          var buttonDisabledCss = {'width': '100%','text-align':'left','background':'none','font-size':'11px','color':'black'};  
          $(":submit").each(function() {
              if($(this).attr('value') == 'Add Update') {
                 $(this).addClass('caseDetailbutton').css(quickLinkCss).removeClass('btn');                
                 if(this.disabled) $(this).removeClass('btnDisabled').css(buttonDisabledCss);                 
              }else if($(this).attr('value') == 'Add Attachment') {
                $(this).removeClass('btn').addClass('caseDetailbutton').css(quickLinkCss).removeClass('btn');               
                 if(this.disabled) $(this).removeClass('btnDisabled').css(buttonDisabledCss);                 
              }else if($(this).attr('value') == 'Upload to TSFTP') {
                 $(this).removeClass('btn').addClass('caseDetailbutton').css(quickLinkCss).removeClass('btn');                
                 if(this.disabled) $(this).removeClass('btnDisabled').css(buttonDisabledCss);                                            
              }else if($(this).attr('value') == 'Escalate Case') {
                 $(this).removeClass('btn').addClass('caseDetailbutton').css(quickLinkCss).removeClass('btn');                  
                 if(this.disabled) $(this).addClass('disabled').css(buttonDisabledCss);                 
              }else if($(this).attr('value') == 'Reopen Case') {
                 $(this).removeClass('btn').addClass('caseDetailbutton').css(quickLinkCss).removeClass('btn');                  
                 if(this.disabled) $(this).removeClass('btnDisabled').css(buttonDisabledCss);                 
              }else if($(this).attr('value') == 'Close Request') {
                 $(this).removeClass('btn').addClass('caseDetailbutton').css(quickLinkCss).removeClass('btn');                 
                 if(this.disabled) $(this).removeClass('btnDisabled').css(buttonDisabledCss);                 
              }else if($(this).attr('value') == 'Call Me') {
                 $(this).removeClass('btn').addClass('caseDetailbutton').css(quickLinkCss).removeClass('btn');                 
                 if(this.disabled) $(this).removeClass('btnDisabled').css(buttonDisabledCss);                 
              }else if($(this).attr('value') == 'Add Project Milestones') {
                 $(this).click(function() { trackViaWoopra('Clicked on Add Project Milestones') });
              }  
           });
            
            /** Code to handle woopra tracking for all the case detail buttons **/
           $(".caseDetailbutton").each(function() {
              var title = $(this).val();              
              $(this).click(function() { 
                var caseNumber = $('tr').find("th:contains('Case Number')").filter(":first").parent().find('td span').text();
                trackViaWoopra('Clicked on ' + title,{'casenumber':caseNumber}); 
              });
           });
                   
           $("html").attr('class','vf-border-box vf-strict');   


           $("[id$=everythingOwnedByProject]").each(function() {
               $(this).dataTable({
                   "bFilter": false,
                   "bProcessing":false,
                   "iDisplayLength":5,
                   "bLengthChange":false,
                   "sDom": '<"top"ip>rt<"clear">',
                   "sPaginationType": "full_numbers"
                });

               $(this).removeClass('dataTable');
           });

            $("[id$=changeRequestTable]").each(function() {
               $(this).dataTable({
                   "bFilter": false,
                   "bProcessing":false,
                   "iDisplayLength":5,
                   "bLengthChange":false,
                   "sDom": '<"top"ip>rt<"clear">',
                   "sPaginationType": "full_numbers"
                });

               $(this).removeClass('dataTable');
           });


            //Style the project select box
           $("[id$=ctprojectSelection]").select2({
               width : '35%',
               placeHolder : 'Please type to filter projects'
           });

          
          $('body').css({'font-size':'12px','font-family':'Arial,Helvetica,sans-serif'});

           /**Always keep the left sidebar open **/

           $('#sidebarCell').removeClass('sidebarCollapsed');
           $('#handlebarContainer').css("display","none");

           /**Track case type selection with woopra **/

           $('div #technical,#admin,#shipping').each(function() {              
               $(this).click(function() { trackViaWoopra('Clicked on Case Type:' + $(this).attr('id').toString()) });
           });
            
           /**
            function to incorporate woopra tracking
           **/        
           function trackViaWoopra(ev,properties) {                         
              properties = typeof properties !== 'undefined' ?  properties : {};
              if(typeof woopra !== 'undefined') {
				 //----------------------------------------------------------------------------------------------------<T01>
				 //log the values to the console
				 console.log('woopra... ev='+ev+', url='+window.location.href+', properties='+JSON.stringify(properties));
				 //----------------------------------------------------------------------------------------------------</T01>
                 properties['action'] = ev;
                 properties['url'] = window.location.href;
                 woopra.track("esupport",properties);
              }
                  
           }
});