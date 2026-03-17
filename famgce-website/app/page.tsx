import HeroSlider from '@/components/HeroSlider'
import StatsBar from '@/components/StatsBar'
import AboutSnippet from '@/components/AboutSnippet'
import ServicesGrid from '@/components/ServicesGrid'
import WhyChooseUs from '@/components/WhyChooseUs'
import CallbackForm from '@/components/CallbackForm'
import ClientLogos from '@/components/ClientLogos'

export default function Home() {
  return (
    <>
      <HeroSlider />
      <StatsBar />
      <AboutSnippet />
      <ServicesGrid />
      <WhyChooseUs />
      <CallbackForm />
      <ClientLogos />
    </>
  )
}
