import Facebook from "@/components/Facebook";
import Introduction from "@/components/Introduction";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <Facebook />
      <Introduction />
    </div>
  );
}
