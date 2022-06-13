let signin=document.getElementById("signin-btn");
signin.addEventListener("click",function()
{
    let name=document.getElementById("name-input").value;
    let email=document.getElementById("email-input").value;
    let password=document.getElementById("password-input").value;
    

    if(name=='' || email=='' ||password=='') 
    {
        return alert("Fill all fields to Signup")
    }
    else
    {
        let data = sessionStorage.getItem("data");
                if (data == null)
                {
                    dataObj = [];
                }
                else 
                {
                    dataObj = JSON.parse(data);
                }
                let myObj = 
                {
                    name: name,
                    email:email,
                    password:password
                }
                dataObj.push(myObj);
                sessionStorage.setItem("data", JSON.stringify(dataObj));
    }
    location.replace('login.html');
});


function loginclk()
{
    let lgn_email=document.getElementById("lgn-email-input").value;
    let lgn_password=document.getElementById("lgn-password-input").value;


    if(lgn_email=='' || lgn_password=='') 
    {
        return alert("Fill all fields to Login");
    }
    else
    {
        let data = sessionStorage.getItem("data");
                if (data == null)
                {
                    dataObj = [];
                    return alert("User details mismatch!!!")
                }
                else 
                {
                    dataObj = JSON.parse(data);
                    let istrue=false
                    for(let i=0;i<dataObj.length;i++)
                    {
                        if(lgn_email==dataObj[i]['email'] & lgn_password==dataObj[i]['password'])
                        {
                            location.replace('welcome.html');   
                            istrue=true
                        }
                    }
                    if(!istrue)
                    {
                        alert('Please enter login details correctly')
                    }
                    
                }
            }
};
