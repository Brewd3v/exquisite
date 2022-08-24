import { BigButton, PrimaryButton } from "../Buttons"
import Spacer from "../Spacer"

function Hero() {
    return (
        <div className="max-w-[1696px] mx-auto overflow-x-hidden">
            <section className="bg-primary-light relative rounded-lg px-2 py-40  mx-10">
                <div className="max-w-6xl h-full mx-auto px-6">
                    <div className="h-full flex justify-between items-center space-x-12">
                        <div className="lg:w-[50%] w-full">
                            <h1 className="text-[90px] leading-[105px] font-bold text-secondary">Manage everything in <span className="bg-primary-medium leading-none inline-block">one click</span></h1>
                            <Spacer className="h-[36px]"></Spacer>
                            <p className="leading-[36px] text-[24px] pr-10">No more switching between apps to get your daily industry news updates. Vincent eliminates</p>
                            <Spacer className="h-[36px]"></Spacer>
                            <BigButton title="Start Your Free Trial" url="/" />
                            <Spacer className="h-[13px]"></Spacer>
                            <p className="text-primary-gray">* Did you know about our <b>60 day money back guarentee?</b></p>
                        </div>
                    </div>
                </div>
                <object className="max-w-[50%] items-center absolute right-1/2 translate-x-1/2 lg:right-0 lg:-translate-x-[10%] lg:bottom-1/2 lg:translate-y-1/2" data="hero-image.svg" type="image/svg+xml">
                    <img className="" src="hero-image.svg" alt="placeholder" />
                </object>
                <object className="hidden xl:block absolute top-[31%] left-16" data="./shapes/shape-1.svg" type="image/svg+xml">
                    <img src="./shapes/shape-1.svg" alt="shape-swirly" />
                </object>
                <object className="absolute top-12 right-[43%]" data="./shapes/shape-2.svg" type="image/svg+xml">
                    <img src="./shapes/shape-2.svg" alt="shape-swirly" />
                </object>
            </section>
        </div>
    )
}

export default Hero