let userName = document.getElementById('userName')
let userEmail = document.getElementById('userEmail')
let userPassword = document.getElementById('userPassword')
let signupBtn = document.getElementById('signupBtn')

if (signupBtn) {
    signupBtn.addEventListener('click', async () => {

        const { data, authError } = await client.auth.signUp({
            email: userEmail.value,
            password: userPassword.value,
        })

        if (authError) {
            console.log('Auth error', authError.message);
        }else{
            alert('user auth')
            console.log(data);
        }

        const { error } = await client
        .from('Quiz-Pulse')
        .insert({
            userName : userName.value,
            userEmail : userEmail.value,
            userPassword : userPassword.value,
        })

        if (error) {
            console.log('error', error.message);
        }else{
            alert('user save in table')
            window.location.replace('./index.html')
        }
    })
}