function chat(){

let input =
document.getElementById("userInput").value.toLowerCase();

let response="";

if(input.includes("skills")){
response="My skills include networking, HTML, cybersecurity, and databases.";
}

else if(input.includes("projects")){
response="Check the projects section to see my work.";
}

else if(input.includes("contact")){
response="You can contact me using the contact form.";
}

else{
response="Explore my portfolio for more information.";
}

document.getElementById("reply").innerText=response;

}