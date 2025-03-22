function myalert(msg){
    if(confirm("are you sure?")){
        alert(msg);
    }
    else{alert("err");}
}

const jobs ={
    "HTML":[
         "[Jan 2024 - June 2024]",
         "Spearheaded software development projects focusing on machine learning applications, employing Python and Django to enhance functionality across five different platforms while ensuring optimal user experience through seamless HTML, CSS, and JavaScript integration.Collaborated with team members on various projects, demonstrating consistent dedication and contributing to successful outcomes"
],
"Javascript":[
    "[June 2023 - July 2023]",
    "Streamlined data analytics processes, including data collection and cleaning, improving workflow efficiency by 30% using Python and R.Designed a deep learning model, Predicting Sea Ice Extent using Deep Learning, employing TensorFlow, NumPy, Pandas, and Matplotlib."
]
,
"C-language":[
    "[August 2023]",
    "Completed a 4-weeks virtual internship in Python Programming."
]

}
var toggle=false;
function updateWork(id){
    document.getElementById("role").innerHTML=jobs[id][0];
    document.getElementById("desc").innerHTML=jobs[id][1];
}

function showMenu(){
    if(!toggle)
    {document.getElementById("navlinks").style.transform="none";}
    else{document.getElementById("navlinks").style.transform="translate(-150%)";}
    toggle=!toggle;
}
function scrollLeft() {
    const wrapper = document.querySelector('.activities-wrapper');
    wrapper.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    const wrapper = document.querySelector('.activities-wrapper');
    wrapper.scrollBy({ left: 300, behavior: 'smooth' });
}