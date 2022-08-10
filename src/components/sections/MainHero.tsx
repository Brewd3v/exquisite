import { BigButton, PrimaryButton } from "../Buttons"
import Spacer from "../Spacer"

function MainHero() {
    return (
        <section className="bg-primary-light relative rounded-lg px-2 py-40 max-w-[1696px] mx-auto">
            <div className="max-w-6xl h-full mx-auto px-6">
                <div className="h-full flex justify-between items-center">
                    <div className="w-1/2">
                        <h1 className="text-[90px] leading-[105px] font-bold text-secondary">Manage everything in <span className="bg-primary-medium leading-none inline-block">one click</span></h1>
                        <Spacer className="h-[36px]"></Spacer>
                        <p className="leading-[36px] text-[24px]">No more switching between apps to get your daily industry news updates. Vincent eliminates</p>
                        <Spacer className="h-[36px]"></Spacer>
                        <BigButton title="Start Your Free Trial" url="/" />
                        <Spacer className="h-[13px]"></Spacer>
                        <p className="text-primary-gray">* Did you know about our <b>60 day money back guarentee?</b></p>
                    </div>
                </div>
                <div className="absolute right-14 top-1/2 -translate-y-1/2">
                    <img src="https://via.placeholder.com/743x612/" alt="placeholder" />
                </div>
            </div>
            <object className="absolute top-[31%] left-16" data="./shapes/shape-1.svg" type="image/svg+xml">
                <img src="./shapes/shape-1.svg" alt="shape-swirly" />
            </object>
            <object className="absolute top-12 right-[43%]" data="./shapes/shape-2.svg" type="image/svg+xml">
                <img src="./shapes/shape-2.svg" alt="shape-swirly" />
            </object>
        </section>
    )
}

export default MainHero