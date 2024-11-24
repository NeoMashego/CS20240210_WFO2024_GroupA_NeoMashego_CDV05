// Function to open the resume PDF
function openResume() {
    const resumeUrl = './other/Neo_Mashego_CV.pdf';
    window.open(resumeUrl, '_blank');
}

const cvButton = document.getElementById("CV");
cvButton.addEventListener('click', openResume)