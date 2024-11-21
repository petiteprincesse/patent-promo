import Image from "next/image";
import Logo from "@/assets/logo.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:h-full before:blur before::w-full before:bg-[linear-gradient(to_right,#F87FF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={Logo} alt="МИК" height={40} className="relative" />
        </div>
        <p className="mt-6">&copy; 2024 MIC, Inc. All right reserved.</p>
      </div>
    </footer>
  );
};
