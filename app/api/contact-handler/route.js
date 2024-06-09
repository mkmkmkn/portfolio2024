import { NextResponse } from "next/server"
import nodeMailer from "nodemailer"


export async function POST(request) {
    const reqBody = await request.json()

    const username = reqBody.name
    const email = reqBody.email
    const message = reqBody.message

    try{
        const transporter = nodeMailer.createTransport({
            host: "smtp.gmail.com",                  // メールサーバー。ここではHotmail/Outlookを使った例
            port: 587,
            secure: false,
            auth: {
                user: process.env.MAIL_ADDRESS,            // メールアドレス
                pass: process.env.MAIL_PASSWORD             // パスワード
            }
        })
    
        const mailOptions = {
            from: `${username}'<${email}>`,
            to: "mkgoma3@gmail.com",
            subject: "Portfolio2024のコンタクトページからメッセージがありました",
            text: `名前: ${username} \n\n メールアドレス: ${email} \n\n 内容: ${message}`
        }
    
        const info = await transporter.sendMail(mailOptions)
        return NextResponse.json({message: "成功しました"})
    }catch(err){
        return NextResponse.json({message: "失敗しました"})
    }
}