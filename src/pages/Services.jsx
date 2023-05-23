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
            className="w-48 h-48 outline bg-blue-600"
            thumbnail="https://images.unsplash.com/photo-1506097425191-7ad538b29cef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2xpY2luZyUyMGRlc2lnbnxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=1920&q=1280"
          />
        </div>
      </section>
    </div>
  );
}
