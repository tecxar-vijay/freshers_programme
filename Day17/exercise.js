
const student  = {
    firstname :"vijay",
    lastname : "prajapati"
}

const text = JSON.stringify(student)
localStorage.setItem("student" , text)
