import { shoe8 } from "../assets/images"
import { Button } from "../components"

const SuperQuality = () => {
  return (
    <section className="flex justify-center items-center max-lg:flex-col gap-10 w-full max-container" id="about-us">
      
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          we provide you 
          <span className="text-coral-red"> super quality </span>
          shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
        <p className="mt-6 lg:max-w-lg info-text">Our dedication to detail and excellence emsires ypur satisfaction</p>

        <div className="mt-11">
          <Button label='View details'/>
        </div>

      </div>

      <div className="flex-1 flex justify-center items-center">
        <img src={shoe8} alt="product detail" width={570} height={522}  className="object-contain"/>
      </div>

    </section>
  )
}

export default SuperQuality