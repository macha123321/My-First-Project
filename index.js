document.getElementById('btn').addEventListener("click", () => {
    const name=document.getElementById('fname');
    const firstName=name.value;
    const lname=document.getElementById('lname');
    const lastName=lname.value;
    const sex=document.getElementById('gender');
    if(sex.value.toLowerCase()=='male'){
        gender="Mr"
    } else if (sex.value.toLowerCase()=='female'){
        gender="Ms"
    } else {
        gender = ""
    }
    
    const yro=document.getElementById('age');
    const age=yro.value;
    const occupation=document.getElementById('job');
    const job=occupation.value;

    console.log(`Hello ${gender} ${firstName} ${lastName} you are ${age} years old and your occupation is ${job}`)
})