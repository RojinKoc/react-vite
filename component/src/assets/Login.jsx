import React from 'react'

export const users = [
    {
        username: "ali",
        password: "1"
    },
    {
        username: "veli",
        password: "2"
    }
]

function Login() {
    return (
        <>
            <div>
                <p>Kullanıcı Adınız</p>
                <input type="text" />

                <p>Şifreniz</p>
                <input type="text" />

                <br />

                <button> Giriş Yap </button>
            </div>
        </>
    )
}

export default Login