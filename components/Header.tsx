import Image from "next/image";

export function Header() {
  return (
    <div className="relative bg-[url(/background-site.png)] bg-cover bg-no-repeat">
      <div className="flex justify-center">
        <div className="mob:hidden tablet:flex pc:flex wrapper tablet:px-6 pt-8">
          <div className="relative w-full">
            <Image
              src="/hero-pc.png"
              alt=""
              width={1440}
              height={450}
              layout="responsive"
              priority
            />
          </div>
        </div>

        <div className="mob:flex tablet:hidden pc:hidden relative wrapper">
          <div className="relative w-full pt-6">
            <Image
              src="/hero-mobile.png"
              alt=""
              width={640}
              height={780}
              layout="responsive"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
