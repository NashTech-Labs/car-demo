import { Hero } from "./Components/Hero"
import { FeaturedProducts } from "./Components/FeaturedProducts"
import { Testimonials} from "./Components/Testimonials"
import { Faq } from "./Components/Faqs"


export const HomePage = () => {
    return (
      <main>
          <Hero />
          <FeaturedProducts/>
          <Testimonials />
          <Faq />
      </main>
    )
  }