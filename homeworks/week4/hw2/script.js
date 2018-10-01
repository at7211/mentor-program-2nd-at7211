document.getElementById("submit").addEventListener('click', e => {
    result();
    e.preventDefault();


})


function result() {
    let test = document.getElementsByClassName("form__content")
    let email = document.getElementById("email")
    let nickname = document.getElementsByName("nickname")
    let occupation = document.getElementsByTagName('occupation')
    let input = document.getElementsByName("submit")
    let type1 = document.getElementById('type1');
    let type2 = document.getElementById('type2');
    let coding_experience = document.getElementsByName('coding_experience')
    let reminder = document.getElementsByClassName("reminder")


    if (email.value === "" || nickname.value === "" ||
        occupation.value === "" || coding_experience.value === "") {
        for (let i = 0; i < test.length; i++) {
            test[i].style.backgroundColor = '#ffd6d6';
            reminder[i].style.color = '#db4437';
            
        }
        
    } else if (!type1.checked && !type2.checked) {
        test[i].style.backgroundColor = '#ffd6d6';
        reminder[i].style.color = '#db4437';
        
    } else {
        console.log(email.value);
        console.log(nickname.value);
        console.log(occupation.value);
        console.log(coding_experience.value);
        alert("提交表單！")
        
    }
}