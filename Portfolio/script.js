const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

const resume = document.querySelector(".resume");

function openresume(){
    const fileUrl = 'files/2024 tcs resume.pdf'; 

  
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = '2024 tcs resume.pdf'; 
    document.body.appendChild(link);

    
    link.click();

    
    document.body.removeChild(link);
}
function openlinkedin(){
    window.open('https://www.linkedin.com/in/hari-haranj-8ab965251/','blank');
}
function open10th(){
    const fileUrl = 'files/10th Marksheet.jpeg'; 

  
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'SSLC Marksheet.jpeg'; 
    document.body.appendChild(link);

    
    link.click();

    
    document.body.removeChild(link);
}
function openhsc(){
    const fileUrl = 'files/12th Marksheet.jpeg'; 

  
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'HSC Marksheet.jpeg'; 
    document.body.appendChild(link);

    
    link.click();

    
    document.body.removeChild(link);
}
function openug(){
    const fileUrl = 'files/6th semester marksheet.pdf'; 

  
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'UG Marksheet.pdf'; 
    document.body.appendChild(link);

    
    link.click();

    
    document.body.removeChild(link);
}