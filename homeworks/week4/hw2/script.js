document.getElementById("submit").addEventListener('click', e => {

    e.preventDefault();
    result();

})


function result() {
    let test = document.getElementsByClassName("form__content")
    let email = document.getElementById("email")
    let nickname = document.getElementsByName("nickname")
    let occupation = document.getElementsByTagName('occupation')
    let coding_experience = document.getElementsByName('coding_experience')
    let reminder = document.getElementsByClassName("reminder")
    let answer = ''



    if (email.value === "") {
        test[0].style.backgroundColor = '#ffd6d6';
        reminder[0].style.color = '#db4437';
    } else if (nickname.value === "") {
        test[1].style.backgroundColor = '#ffd6d6';
        reminder[1].style.color = '#db4437';
    } else if (document.querySelector('input[name=class_type]:checked') === null) {
        test[2].style.backgroundColor = '#ffd6d6';
        reminder[2].style.color = '#db4437';
    } else if (occupation.value === "") {
        test[3].style.backgroundColor = '#ffd6d6';
        reminder[3].style.color = '#db4437';
    } else if (coding_experience.value === "") {
        test[4].style.backgroundColor = '#ffd6d6';
        reminder[4].style.color = '#db4437';
    } else {
        answer += "您填寫的內容如下" + "\r\n"
        answer += "電子郵件： "+ email.value + "\n"
        answer += "暱稱： "+ nickname.value + "\n"  
        answer += "報名類型： "+ document.querySelector('input[name=class_type]:checked').value + "\n"
        answer += "現在的職業： "+ occupation.value + "\n"
        answer += "是否有程式相關背景？： "+ coding_experience.value + "\n"
        answer += "其他： "+ document.querySelector('input[name=others').value + "\r\n"
        console.log(answer)
        alert("提交表單！");
    }
}