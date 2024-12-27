


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
const menu = document.getElementById('menu');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('nav .links a');

// Toggle the navigation menu visibility on clicking the menu icon
menu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Close the navigation menu when any link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active'); // Close the menu
    });
});