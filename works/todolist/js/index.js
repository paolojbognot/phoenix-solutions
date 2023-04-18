(function() {
  
  
  var doc           = document,
      notification  = doc.getElementById("notice").classList,
      addButton     = doc.getElementById("add"),
      listWrapper   = doc.getElementById("list"),
      allItems      = doc.getElementsByTagName("li"),
      allDelButtons	= listWrapper.getElementsByTagName("button"),
      addTask       = function() {
        
        var taskItem	= doc.createElement("li"),
            userInput	= doc.getElementById("task-input").value;
        
        if (!userInput.length) {
          
          alert("You need to enter a goal first.");
          
        } else {
          
          taskItem.innerHTML = userInput + " <button class=\"delete\">Delete</button>";
          
          listWrapper.appendChild( taskItem );
          
          doc.getElementById("task-input").value = "";
          
          loadRemoveOptions();
          
          
          if (allItems.length) {
            notification.add("hidden");
          }
          
        }
        
      },
      loadRemoveOptions	= function() {
        
        for (var i = 0, l = allItems.length; i < l; i++) {
          //console.log(allDelButtons[i].length);
          //console.log(typeof allDelButtons[i]);
          allDelButtons[i].addEventListener("click", removeTask, false);
        }
        
      },
      removeTask = function() {
        
        var taskToDelete = this.parentNode,
            confirmRemoval = confirm("This action is irreversible. Are you sure you want to delete this goal?");
        
        /* codepen kills alerts so replaced with a simplified version
				if (confirmRemoval) {
					
					taskToDelete.outerHTML = "";
					
					if (!allItems.length) {
						notification.remove("hidden");
					}
     
				}
    */
      taskToDelete.outerHTML = "";
      
      if (!allItems.length) {
        notification.remove("hidden");
      }
      
      
    };
  
  
  loadRemoveOptions();
  
  addButton.addEventListener("click", addTask, false);	
  
}());