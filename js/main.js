  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCVKAt2VkKUX3DuS7g__GKZ1vbKP4saN1o",
    authDomain: "contactform-66d64.firebaseapp.com",
    databaseURL: "https://contactform-66d64.firebaseio.com",
    projectId: "contactform-66d64",
    storageBucket: "contactform-66d64.appspot.com",
    messagingSenderId: "612157520856"
  };
  firebase.initializeApp(config);
  var messagesRef = firebase.database().ref("messages");

 //Listen for  form submit
document.getElementById("contactForm").addEventListener("submit",submitForm);

function submitForm(e){
  e.preventDefault();
  
  var name = getInputVal("name");
  var company = getInputVal("company");
  var email = getInputVal("email");
  var  phone= getInputVal("phone");
  var message = getInputVal("message");
  //save message
  saveMessage(name,company,email,phone,message);
  // show alert 
  document.querySelector(".alert").style.display ="block";
  //hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector(".alert").style.display ="none";
  },3000);
  //clear form
  document.getElementById("contactForm").reset();
 }

//function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(name,company,email,phone,message){
 var newMessagesRef = messagesRef.push();
 newMessagesRef.set({
     name: name,
     company :company,
     email : email,
     phone: phone,
     message : message

 });

}

    $(function(){
        w3.includeHTML();  
        //display responsive ul list
        responsiveList();
        // add class active for a element
        activeELement();
        workBelt();    
        workLoad();
        //animation efect when you scroll
        smoothScrool(800);
        //blacknav when you scroll
        $(window).on("scroll",function(){
        if($(window).scrollTop()){
            $("nav").addClass("black");
        }
        else {
        $("nav").removeClass("black");}});
       });

       
     function responsiveList(){
        $(".menu h4").click(function(){
            $("nav ul").toggleClass("active");
            $(".responsive-bar").toggleClass("colorfondo");  
          });
     }

     function activeELement(){
        $("nav ul li a").click(function(){
            var elementos = document.querySelectorAll(["nav ul li a"]);
            for(i=0; i < elementos.length ; i++){
                elementos[i].classList.remove("active");
            }
            
            var $this = $(this);
             $this.addClass("active");
        //pregunto si tiene la clase active (si la tiene esta en  vista movil)
        var hasAclass = $("nav ul").hasClass("active");
        if (hasAclass ){
            $("nav ul").toggleClass("active");
        }    
       
          });
     }

     function workBelt(){
       //section belt
       $(".work-container .work-unit").click(function(){
        $('.work-belt').css('left','-100%');
        $('.sub-contenedor').show();
    
        $('.sub-contenedor .prev').click(function(){
            $('.work-belt ').css('left','0%');
            $('.sub-contenedor').hide(800);
          });
    
    });}

     function workLoad(){
                //workBelt
                $.ajaxSetup({cache : true});
                $(".work-unit").click(function(){
                 var $this = $(this);
                 var newTitle = $this.find('strong').text();
               
                 $('.project-title').text(newTitle);
                 var newFolder= $this.data("folder");
                 var newHTML="html-files/work/"+newFolder+".html";   //esc6
                 console.log(newHTML);
                 $('.project-load').load(newHTML);
                }) 

     }

     function smoothScrool(duration){
      
        $('a[href^="#"]').on('click',function(event){
            
     // Make sure this.hash has a value before overriding default behavior
     if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, duration, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });}  
    
 


  
