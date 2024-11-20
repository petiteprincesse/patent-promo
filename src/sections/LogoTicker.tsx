import LeadersLogo from "@/assets/LeadersLogo.png";
import MayorsProjectLogo from "@/assets/MayorsProjectLogo.png";
import InnovationDepartmentLogo from "@/assets/InnovationDepartmentLogo.png";
import InnovationAgencyLogo from "@/assets/InnovationAgencyLogo.png";
import ClusterLogo from '@/assets/ClusterLogo.png'
import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-16 flex-none">
            <Image
              src={LeadersLogo}
              alt="Leaders logo"
              className="logo-ticker-image min-h-10"
            />
            <Image
              src={MayorsProjectLogo}
              alt="Mayors project logo"
              className="logo-ticker-image min-h-10"
            />
            <Image
              src={InnovationDepartmentLogo}
              alt="Innovation department logo"
              className="logo-ticker-image min-h-10"
            />
            <Image
              src={InnovationAgencyLogo}
              alt="Innovation agency logo"
              className="logo-ticker-image min-h-10"
            />
            <Image
              src={ClusterLogo}
              alt="Cluster logo"
              className="logo-ticker-image min-h-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
