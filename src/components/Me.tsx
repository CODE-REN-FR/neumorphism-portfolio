import Image from "next/image";
import meImage from '../../public/me.png'
import { Bungee } from 'next/font/google'

const bungee = Bungee({
    weight: "400",
    style: "normal",
    subsets: ["latin", "latin-ext", "vietnamese"], 
    display: 'swap',
});





export default function Me() {




    return (


        <div className="flex justify-center items-center shadowNeumorphism rounded-[50px] bg-[#e0e0e0]-500 flex-col  px-[3vw] py-[5vh] ">
            <Image
                src={meImage}
                alt="Renan YHUEL Logo"
                width={200}
                height={200}
                className="rounded-full mb-10 shadowNeumorphism"
            />
            <h1 className={bungee.className + " text-3xl pb-10 "}>Renan YHUEL</h1>
            <p className="text-justify text-[15px]">Hey, I&apos;m Renan, but you can call me REN. I&apos;m a young enthusiast of programming, computers, and electronics. I&apos;m a bit of a perfectionist and quite persistent, so I always give my all to see my projects through. Check out my portfolio—I hope you&apos;ll like what you see!</p>

        </div>


    )
}