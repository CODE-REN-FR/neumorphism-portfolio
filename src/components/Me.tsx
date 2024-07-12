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


        <div className="flex justify-center items-center shadowNeumorphism rounded-[50px] bg-[#e0e0e0]-500 flex-col  px-[3vw] py-[5vh] ">
            <Image
                src={meImage}
                alt="Renan YHUEL Logo"
                width={200}
                height={200}
                className="rounded-full mb-10 shadowNeumorphism"
            />
            <h1 className={roboto.className + " text-3xl pb-10"}>Renan YHUEL</h1>
            <p className="text-justify text-[15px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque molestias deleniti, nulla aperiam adipisci voluptas ex commodi dolor odio architecto quos repellat facere, debitis quisquam? Quis, libero suscipit? Enim, cum?</p>
        </div>


    )
}