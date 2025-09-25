import { Faq1 } from "@/components/ui/faq";

const FAQ = () => {
  return (
    <section id="FAQ" className="bg-foreground">
      <div className="w-full container">
        <div className="flex items-center justify-between font-telegraf-bold">
          <h1 className="text-3xl md:text-7xl text-white">FAQ</h1>
        </div>
        {/* underline */}
        <hr className="h-[1px] w-full bg-white my-4" />

        <div className="text-white mt-8">
          <Faq1 />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
