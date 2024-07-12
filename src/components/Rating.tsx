"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Roboto } from 'next/font/google';
import star from "../../public/star-icon.png"

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

type Rating = {
  id: number;
  note: number;
  avis: string;
};

const Rating: React.FC = () => {
  const [ratingArray, setRatingArray] = useState<Rating[]>([
    { id: 1, note: 1, avis: '“The work was wonderful! Thank you, Renan!”' },
    { id: 2, note: 2, avis: '“Wonderful! Thank you, Renan!”' },
    { id: 3, note: 3, avis: '“The work was wonderful! ”' },
    { id: 4, note: 4, avis: '“Thank you, Renan!”' },
  ]);

  const [currentRatingIndex, setCurrentRatingIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentRatingIndex((prevIndex) => (prevIndex + 1) % ratingArray.length);
    }, 5000);
  
    return () => clearTimeout(timer);
  }, [ratingArray.length, currentRatingIndex]);
  

  const currentRating: Rating = ratingArray[currentRatingIndex];

  const renderStars = (note: number) => {
    const starCount = note;

    const stars = Array.from({ length: starCount }, (_, index) => (
      <Image key={index} src={star} alt="star" width={20} height={20} />
    ));

    return stars;
  };

  return (
    <div className="flex justify-center items-center shadowNeumorphism rounded-[50px] bg-[#e0e0e0]-500 flex-col px-[3vw] py-[5vh] w-full min-h-[150px]">
      <div className="flex flex-col items-center">
        
        <div className="flex mb-5">
          {renderStars(currentRating.note)}
        </div>
        <p className="text-center text-lg text-plus">{currentRating.avis}</p>
      </div>
    </div>
  );
}

export default Rating;