const toggleBtn = document.querySelector('#toggle_btn');
const toggleBtn2 = document.querySelector('#toggle_btn2');

toggleBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    toggleBtn2.style.display='block';
    toggleBtn.style.display='none';
    document.body.classList.add('text-color');

    //declare mode as a variable to parse into local-storage
    var mode;

    //declare if function to give the local-storage options
    if(document.body.classList.contains("dark-mode")){
        console.log("Dark mode");
        mode = "DARK";
    }else{
        console.log("Light mode");
        mode = "LIGHT";
    }

    //set items for the storage and convert mode to string variable like true or false.
    localStorage.setItem("saveMode", JSON.stringify(mode));
});

toggleBtn2.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    toggleBtn.style.display='block';
    toggleBtn2.style.display='none';
    document.body.classList.remove('text-color');

      //declare mode as a variable to parse into local-storage
      var mode;

      //declare if function to give the local-storage options
      if(document.body.classList.contains("dark-mode")){
          console.log("Dark mode");
          mode = "DARK";
      }else{
          console.log("Light mode");
          mode = "LIGHT";
      }
  
      //set items for the storage and convert mode to string variable like true or false.
      localStorage.setItem("saveMode", JSON.stringify(mode));
});

let GetMode = JSON.parse(localStorage.getItem("saveMode"));
console.log(GetMode);

if(GetMode === "DARK"){
    document.body.classList = "dark-mode";
    toggleBtn2.style.display='block';
    toggleBtn.style.display='none';
    document.body.classList.add('text-color');    
}


