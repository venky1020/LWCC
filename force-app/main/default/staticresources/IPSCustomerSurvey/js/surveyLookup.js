function searchResultsActionJS(){
        searchStr = document.getElementById('searchId').value;
        var elmntArray = [];
        elmtArray = document.getElementsByName("radioBtn");
        var searchType;
        if(elmtArray[0].checked){
            if(elmtArray[0].value=='Name'){
                searchType = 'Name';
            } 
        } else{
            searchType = 'All';
        }
        var res = searchStr;
        res = res.replace(/\*/g, "");
        if(res.length <= 1 && searchStr.length > 0){
        	document.getElementById('msgContainer').style.display = 'block';
        	document.getElementById('tableContainer').style.display = 'none';
        } else{
        	searchResultsAction(searchStr,searchType);
        }
    }
    function fillIn(name, id) {
      if(id){
          var winMain = window.opener;
          if (null == winMain){
             winMain = window.parent.opener;
          }
          var ele=winMain.document.getElementsByClassName('customerContact');
          var ele2=winMain.document.getElementById(ele[0].id+'_lkid');
          ele[0].value=name;
          ele2.value=id;
          self.close();
      }
    }
    function updateMsg(){
		document.getElementById('msgContainer').style.display = 'none';
        document.getElementById('tableContainer').style.display = 'block';
    	if(searchStr.length != 0){
    		document.getElementsByClassName('tableHeader')[0].innerHTML = 'Search Results';
    	} else{
    		document.getElementsByClassName('tableHeader')[0].innerHTML = 'Recently Viewed Contacts';
    	}
    }