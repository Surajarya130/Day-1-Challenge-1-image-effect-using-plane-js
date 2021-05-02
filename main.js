var pannel = document.querySelectorAll(".pannel");


pannel.forEach((singlePanel) => {
    singlePanel.addEventListener("click", ()=>{
        removeActiveClasses(); 
        singlePanel.classList.add("active");
    });
});


function removeActiveClasses(){
    pannel.forEach(thePanel =>{
        thePanel.classList.remove("active");  
    })    
}