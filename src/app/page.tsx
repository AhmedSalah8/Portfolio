// import Hero from "./components/Hero";
// import { FloatingNav } from "./components/ui/FloatingNav";
// import Grid from "./components/Grid";
// import RecentProjects from "./components/RecentProjects";
// import { navItems } from "../../data";
import Experience from "./components/Experience";
// import CertificatesGallery from "./components/CertificatesGallery";
// import Skills from "./components/Skills";
export default function Home() {
  return (
    <main className="relative m-1 bg-[#040832] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 lg:px-5 ">
      <div className="max-w-7xl w-full">
        {/* <FloatingNav navItems={navItems} /> */}
        {/* <Hero /> */}
        {/* <Grid /> */}
        {/* <Skills /> */}
        {/* <RecentProjects /> */}
        <Experience />
        {/* <CertificatesGallery /> */}
      </div>
    </main>
  );
}
