let userEmail = document.getElementById('userEmail')
let userPassword = document.getElementById('userPassword')
let loginBtn = document.getElementById('loginBtn')

if (loginBtn) {
    loginBtn.addEventListener('click', async () => {
        const { data, error } = await client.auth.signInWithPassword({
            email: userEmail.value,
            password: userPassword.value,
        })
        if (error) {
            console.log('login error', error.message);
        }else{
            console.log(data);
            localStorage.setItem('loginStatus', true)
            window.location.replace('./dashboard.html')
        }
    })
}

window.onload = async () => {
    let status = localStorage.getItem('loginStatus')
    if (status == 'true') {
        window.location.replace('dashboard.html')
    }
}