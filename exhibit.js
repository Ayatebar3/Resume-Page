

function readmore() {
    
    var containerDiv = document.getElementById("read_more_id");  
    containerDiv.classList.remove("ReadMore");
    containerDiv.classList.add("Read_more_hide"); 
    
	containerDiv = document.getElementById("web_content2");
    containerDiv.classList.remove("content_2");
    containerDiv.classList.add("content_2_shown");
    
    containerDiv = document.getElementById("skechImage_id");
    containerDiv.style.display = "block";
        	
}

function readless() {
    
	var containerDiv = document.getElementById("web_content2");
    containerDiv.classList.remove("content_2_shown");
    containerDiv.classList.add("content_2"); 
    
    containerDiv = document.getElementById("read_more_id");  
    containerDiv.classList.remove("Read_more_hide");
    containerDiv.classList.add("ReadMore"); 
}