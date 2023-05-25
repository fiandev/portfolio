import Item from "../partials/services/Item";

export default function Services() {
  return (
    <div className={`pt-2 scroll-smooth relative pt-20`}>
      <section className="flex flex-col items-start px-4 gap-2">
        <h1> frontend service </h1>
        <div className="flex items-center shrink-0">
          <Item
            title="slicing design from figma"
            description="5$ / hours"
            className="w-48 h-48"
            thumbnail="https://source.unsplash.com/random/1280x1280/?design"
          />
        </div>
      </section>
    </div>
  );
}
