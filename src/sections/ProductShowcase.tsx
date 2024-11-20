import ProductImage from "@/assets/product-image.png";
import PyramidImage from "@/assets/pyramid.png"
import TubeImage from '@/assets/tube.png'
import Image from "next/image";
export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="tag">Патенты патенты патенты</div>
          </div>
          <h2 className="text-center text-3xl md:text-[34px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5">
            Очень много патентов и патентов
          </h2>
          <p className="text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt -5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
            vel doloribus repellat ad, nemo, incidunt quibusdam totam quos ex
            nisi porro suscipit earum. Officiis recusandae asperiores repellat
            dolorum. Amet, saepe?
          </p>
        </div>
        <div className="relative">
          <Image src={ProductImage} alt="Product image" className="mt-10" />
          <Image
            src={PyramidImage}
            alt="Pyramid image"
            height={262}
            width={262}
            className="hidden md:block absolute -right-36 -top-32"
          />
          <Image
            src={TubeImage}
            alt="Tube image"
            height={248}
            className="hidden md:block absolute bottom-24 -left-36"
          />
        </div>
      </div>
    </section>
  );
};
