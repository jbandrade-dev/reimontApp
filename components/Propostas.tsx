import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import { Proposta } from "./Proposta";


interface PropostasProps {
  propostas: {
    id: number;
    title: string;
    img: string;
    href: string;
    alt: string;
    icon: string;
  }[];
}

export function Propostas({ propostas }: PropostasProps) {
  return (
    <section className="mt-16 " id="propostas">
      <div className="wrapper mob:px-4 pc:px-0 bg-red-500 mob:pb-0 pc:pb-6 rounded-md">
        <h2 className="sectionTitle text-white">O Brasil que queremos</h2>

        <div className="grid pc:grid-cols-5 px-4 gap-2 mob:hidden pc:grid">
          {propostas.map((proposta) => {
            return <Proposta key={proposta.id} proposta={proposta} />;
          })}
        </div>


          <div className="pc:hidden mob:flex">
            <Swiper
              slidesPerView={1}
              spaceBetween={16}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {propostas.map((proposta) => {
                return (
                  <SwiperSlide className="mb-11 " key={proposta.id}>
                    <Proposta proposta={proposta} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
    </section>
  );
}
