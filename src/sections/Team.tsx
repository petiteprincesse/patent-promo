'use client';
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import Image from "next/image";
import React from "react";
const teamMembers = [
  {
    text: "Data Science & Backend",
    imageSrc: avatar1.src,
    name: "Дмитрий Шевченко",
    username: "tg:@nemir4uk",
  },
  {
    text: "Backend",
    imageSrc: avatar2.src,
    name: "Дмитрий Муратов",
    username: "tg:@djangopython11",
  },
  {
    text: "Frontend",
    imageSrc: avatar3.src,
    name: "Игорь Монзин",
    username: "tg:@igor_mnz",
  },
  {
    text: "Frontend",
    imageSrc: avatar4.src,
    name: "Ольга Силичева",
    username: "tg:@silichium",
  },
  {
    text: "Project Manager",
    imageSrc: avatar5.src,
    name: "Юлия Родикова",
    username: "tg:@carafe",
  },
];

const TestimonialsColumn = (props: {
  className?: string;
  teamMembers: typeof teamMembers;
  duration?: number;
}) => (
  <div className={props.className}>
    <div className="flex flex-wrap justify-center gap-6 pb-6">
      {props.teamMembers.map(({ text, imageSrc, name, username }) => (
        <div className="card">
          <div className="flex items-center gap-2">
            <Image
              src={imageSrc}
              alt={name}
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-col">
              <div className="">{name}</div>
              <a href={`https://t.me/${username.slice(4)}`} target="_blank" className="">
                {username}
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-5 tag">{text}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Team = () => {
  return (
    <section className="bg-white" id="command">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title mt-5 pt-10">Наша команда</h2>
          <p className="section-description mt-5">
            Над созданием алгоритма и приложения работали
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 max-h-[738px] overflow-hidden">
          <TestimonialsColumn teamMembers={teamMembers} />
        </div>
      </div>
    </section>
  );
};
