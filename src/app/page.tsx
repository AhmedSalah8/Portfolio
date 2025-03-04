import Hero from "./components/Hero";
import { FloatingNav } from "./components/ui/FloatingNav";
import { Grid } from "./components/Grid";
// import DisplayComponent from "./components/GithubData";
import RecentProjects from "./components/RecentProjects";
import { navItems } from "../../data";
import Experience from "./components/Experience";
import CertificatesGallery from "./components/CertificatesGallery";
// import EnhancedComponent from "./components/EnhancedComponent";

export default function Home() {
  return (
    <main className="relative  bg-[#040832] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 lg:px-5 ">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Experience />
        <CertificatesGallery />
      </div>
      {/* <DisplayComponent /> */}
      {/* <EnhancedComponent /> */}
    </main>
  );
}
