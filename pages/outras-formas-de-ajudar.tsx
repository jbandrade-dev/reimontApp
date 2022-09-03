import Link from "next/link";
import { Container } from "../components/Container";
import { NavLine } from "../components/NavLine";

export default function OutrasFormasDeAjudar() {
  return (
    <Container>
      <div className="wrapper px-6 mx-auto mt-8">
        <NavLine text="Como ajudar na campanha" href="/#comoAjudar"/>
        <div className="pc:grid tablet:flex mob:flex flex-col pc:grid-cols-3 gap-4">
          <div>
            <aside className="flex flex-col gap-2 text-lg rounded-lg p-5 bg-white shadow-md">
            <h3 className="font-bold text-2xl uppercase text-red-500">
              Outras formas de ajudar
            </h3>
              
              <p className="text-xl pb-6">
                Se você quer ajudar a nossa campanha de alguma maneira, mande
                uma mensagem para nós pelo WhatsApp:
              </p>
              
              <div className="flex flex-col gap-3 text-red-500">
                <Link href="https://wa.me/5521964980394?text=Quero%20ajudar%20na%20campanha%20do%20Reimont%201333.%20O%20que%20posso%20fazer?">
                  <a
                    target="_blank"
                    className="w-full flex h-11 items-center justify-center mx-auto text-sm gap-2 p-2 rounded-lg font-bold tracking-wider bg-red-500 text-gray-100 desktop:text-sm hover:bg-red-600 transition-colors"
                    type="submit"
                  >
                    MANDE UMA MENSAGEM
                  </a>
                </Link>
              </div>
            </aside>
          </div>
          <div className="col-span-2 h-[83vh] mb-16 bg-white rounded-lg shadow-lg"></div>
        </div>
      </div>
    </Container>
  );
}
