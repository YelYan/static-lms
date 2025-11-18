import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowBigUp,
} from "lucide-react";

const Footer = () => {
  const handleGoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer
      id="FOOTER"
      className=" bg-foreground text-white h-full py-28 font-telegraf-bold"
    >
      <div className="container relative">
        {/* ... (Your content remains the same) ... */}
        <div className="flex items-center justify-between">
          <h1 className="text-3xl md:text-7xl text-white">CONNECT WITH ME</h1>
        </div>
        <hr className="h-[1px] w-full bg-white my-4" />
        <div className="grid gap-12 mt-20">
          <div className="flex flex-col gap-1">
            <h2 className="text-2xl">Jimmy Cook</h2>
            <h2 className="text-xl">MENG.Structural Engineering</h2>
            <h2 className="text-xl">AI & ML Specialist</h2>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl">CONNECT WITH ME</h2>
            <div className="flex gap-4 items-center">
              <Instagram size={"30px"} className="cursor-pointer" />
              <Twitter size={"30px"} className="cursor-pointer" />
              <Facebook size={"30px"} className="cursor-pointer" />
              <Linkedin size={"30px"} className="cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-5 right-7">
          <div
            onClick={handleGoToTop}
            className="w-10 h-10 bg-white rounded-sm grid place-content-center cursor-pointer animate-bounce md:hidden"
          >
            <ArrowBigUp size={"30px"} className="text-black" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
