import Item from "@components/partials/services/Item";
import { textWhatsAppEncode } from "@utils/functions";

const services = {
  "web development": [
    {
      title: "slicing design from figma",
      description: "mengubah desain Anda di figma menjadi kenyataan",
      thumbnail:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    },
    {
      title: "build rest full API",
      description: "bangun rest api Anda dengan cepat dan efisien",
      thumbnail:
        "https://staticassets.dreamfactory.com/blogs/restapi2.png?t=1527092313664",
    },
    {
      title: "seo optimization",
      description: "jadikan website anda nomor satu di semua mesin pencari",
    },
    {
      title: "add feature on website",
      description:
        "tambahkan fitur yang diperlukan agar situs web Anda aman dan stabil",
      thumbnail:
        "https://media.istockphoto.com/id/1358013032/id/foto/konsep-pengembangan-web.jpg?s=612x612&w=0&k=20&c=Bf1e38ySsu3YkmDL74yI7hWziLvgcvfm1mHT14e5QDo=",
    },
    {
      title: "crawling website",
      description:
        "mengambil semua informasi pada sebuah website yang dibutuhkan dan menyimpannya",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3J-cqAcLthCczovHHQan67KaxxzE5XO27NA&usqp=CAU",
    },
  ],

  others: [
    {
      title: "jockey assignments",
      description:
        "Anda bisa santai saja dan serahkan tugas sekolah/kuliah Anda kepada saya!",
    },
    {
      title: "fix bug",
      description: "menemukan dan memecahkan masalah dalam program Anda",
      thumbnail:
        "https://media.istockphoto.com/id/504819900/id/foto/pengembangan-perangkat-lunak-dan-konsep-debugging-bug-ditemukan-dalam-kode-biner.jpg?s=612x612&w=0&k=20&c=9Jh41JcZ_8UgwY1R3fqUSWBVQFrk-wwxE_b1LJus1C0=",
    },
  ],
  products: [
    {
      title: "school website",
      description: "situs web sekolah dengan fitur lengkap",
      thumbnail:
        "https://raw.githubusercontent.com/fiandev/school-landing-page/master/.assets/preview.jpg",
    },
  ],
};

export const images = []
  .concat(
    ...Object.entries(services).map((val) =>
      services[val[0]].map((item) => item.thumbnail),
    ),
  )
  .filter((v) => !!v);
export default function ServiceList({ className = "" }) {
  const phoneNumber = "+6281336270845";
  let WhatsApp_URL = `https://wa.me/${phoneNumber}`;
  let now = new Date().toLocaleString();

  return (
    <section
      className={`flex-shrink-0 flex flex-col items-start px-4 gap-2 ${className}`}
    >
      {Object.keys(services).map((label) => {
        return (
          <>
            <h1 className="text-sm lg:text-lg text-main uppercase font-bold">
              {" "}
              {label}{" "}
            </h1>
            <div className="p-2 w-full no-scrollbar overflow-scroll">
              <div className="flex gap-3 md:gap-4 w-max md:grid md:grid-cols-3 lg:grid-cols-4">
                {services[label].map((service) => {
                  return (
                    <Item
                      title={service.title}
                      description={service.description}
                      className="w-48 h-64"
                      alt={`${service.title} photo's `}
                      link={textWhatsAppEncode(
                        `${WhatsApp_URL}?text=service: ${service.title}|order date: ${now}|customer name: <fill your name>|description: <describe your wish>`,
                      )}
                      thumbnail={
                        service.thumbnail ||
                        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=755&q=80"
                      }
                    />
                  );
                })}
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
}
