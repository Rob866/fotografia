var config={apiKey:"AIzaSyCVKAt2VkKUX3DuS7g__GKZ1vbKP4saN1o",authDomain:"contactform-66d64.firebaseapp.com",databaseURL:"https://contactform-66d64.firebaseio.com",projectId:"contactform-66d64",storageBucket:"contactform-66d64.appspot.com",messagingSenderId:"612157520856"};firebase.initializeApp(config);var messagesRef=firebase.database().ref("messages");function submitForm(e){e.preventDefault(),saveMessage(getInputVal("name"),getInputVal("company"),getInputVal("email"),getInputVal("phone"),getInputVal("message")),document.querySelector(".alert").style.display="block",setTimeout(function(){document.querySelector(".alert").style.display="none"},3e3),document.getElementById("contactForm").reset()}function getInputVal(e){return document.getElementById(e).value}function saveMessage(e,t,o,n,a){messagesRef.push().set({name:e,company:t,email:o,phone:n,message:a})}function responsiveList(){$(".menu h4").click(function(){$("nav ul").toggleClass("active"),$(".responsive-bar").toggleClass("colorfondo")})}function activeELement(){$("nav ul li a").click(function(){var e=document.querySelectorAll(["nav ul li a"]);for(i=0;i<e.length;i++)e[i].classList.remove("active");$(this).addClass("active"),$("nav ul").hasClass("active")&&$("nav ul").toggleClass("active")})}function workBelt(){$(".work-container .work-unit").click(function(){$(".work-belt").css("left","-100%"),$(".sub-contenedor").show(),$(".sub-contenedor .prev").click(function(){$(".work-belt ").css("left","0%"),$(".sub-contenedor").hide(800)})})}function workLoad(){$.ajaxSetup({cache:!0}),$(".work-unit").click(function(){var e=$(this),t=e.find("strong").text();$(".project-title").text(t);var o="../html-files/work/"+e.data("folder")+".html";console.log(o),$(".project-load").load(o)})}function smoothScrool(e){$('a[href^="#"]').on("click",function(t){if(""!==this.hash){t.preventDefault();var o=this.hash;$("html, body").animate({scrollTop:$(o).offset().top},e,function(){window.location.hash=o})}})}document.getElementById("contactForm").addEventListener("submit",submitForm),$(function(){w3.includeHTML(),responsiveList(),activeELement(),workBelt(),workLoad(),smoothScrool(800),$(window).on("scroll",function(){$(window).scrollTop()?$("nav").addClass("black"):$("nav").removeClass("black")})});