import Image from "next/image";
import meImage from '../../public/me.png'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
  })



export default function Me() {




    return (


        <div className="flex justify-center items-center rounded-[50px] bg-[#022B35] flex-col  px-[3vw] py-[5vh] w-full relative">

            
            <div className="flex bg-[#DDDDD0] absolute rounded-t-[50px]  h-[10%] w-full top-0">
                <div className="rounded-full bg-[#FF3131] h-[15px] w-[15px] top-4 left-[4%] absolute"></div>
                <div className="rounded-full bg-[#FFDE59] h-[15px] w-[15px] top-4 left-[6.5%] absolute"></div>
                <div className="rounded-full bg-[#3AC84D] h-[15px] w-[15px] top-4 left-[9%] absolute"></div>
            </div>

            <div className="arrow text-[green] absolute bottom-5 left-10">
                renan@yhuel ~ %
                <input type="text" className="border-none bg-[#022B35] specialinput"/>
            </div>

        </div>


    )
}