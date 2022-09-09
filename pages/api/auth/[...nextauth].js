import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from "next-auth/providers/credentials";




export default NextAuth({
    
    session: {
        strategy: 'jwt'
    },


    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),

        CredentialsProvider({
            type: 'credentials',
            credentials: {},
            authorize(credentials,req){
                    const {email,password} = credentials;
                    console.log(email,password);
                    if(email !== 'jhon@gmail.com' || password !== '123456'){
                       throw new Error('invailed credentials')
                    }

                    return {id: '1234', name: 'jhondoe', email: 'jhon2gmail.com'}

            },



        })
    ],

    pages: {
        signIn :'../../../components/LoginPage.jsx'
    }



})