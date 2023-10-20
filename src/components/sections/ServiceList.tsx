import Item from "@components/partials/services/Item";
import { textWhatsAppEncode, arrayShuffle } from "@utils/functions";

/*
export const images = arrayShuffle(
  []
    .concat(
      ...Object.entries(services).map((val) =>
        services[val[0]].map((item) => item.thumbnail),
      ),
    )
    .filter((v) => !!v),
);
*/
export default function ServiceList({ className = "", services = [] }) {
  const phoneNumber = "+62895380689955";
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
