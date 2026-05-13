import { Header } from "@/components/Header";
import { Banner } from "@/components/Banner";
import { CardGrid } from "@/components/CardGrid";
import { SummaryBox } from "@/components/SummaryBox";
import { QuoteSection } from "@/components/QuoteSection";
import { AccreditationSection } from "@/components/AccreditationSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <CardGrid />
      <SummaryBox />
      <QuoteSection />
      <AccreditationSection />
      <Footer />
    </>
  );
}
