import Image from "next/image";
import { Roboto } from 'next/font/google'
import logoReact from '../../public/react.png'
import logoNext from '../../public/next.png'
import logoDjs from '../../public/djs.png'
import logoTail from '../../public/tail.png'


const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  })



export default function Me() {




    return (


        <div className="flex justify-center items-center shadowNeumorphism rounded-[50px] bg-[#e0e0e0]-500 flex-col  px-[3vw] py-[5vh] w-[20%] h-full mr-10">
            <Image width={60} height={60} src={logoReact} alt="React Logo" className="shadowNeumorphism rounded-full mb-7"/>
            <Image width={60} height={60} src={logoNext} alt="Next Logo" className="shadowNeumorphism rounded-full mb-7"/>
            <Image width={60} height={60} src={logoDjs} alt="Discord.js Logo" className="shadowNeumorphism rounded-full mb-7"/>
            <Image width={60} height={60} src={logoTail} alt="Tailwind Logo" className="shadowNeumorphism rounded-full"/>
        </div>


    )
}