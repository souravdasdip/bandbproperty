import FeaturedProperties from "@/features/Home/components/FeaturedProperties";
import HeroBanner from "@/features/Home/components/HeroBanner";
import MeetTheTeam from "@/features/Home/components/MeetTheTeam";
import Partners from "@/features/Home/components/Partners";
import Testimonials from "@/features/Home/components/Testimonials";
import DefaultLayout from "@/features/Layout/DefaultLayout";
import { prisma } from "@/lib/connect";
export default async function Home() {
  const featuredProperties = await prisma.property.findMany();

  return (
    <DefaultLayout>
      <HeroBanner />
      <FeaturedProperties featuredProperties={featuredProperties} />
      <MeetTheTeam />
      <Partners />
      <Testimonials />
    </DefaultLayout>
  );
}
