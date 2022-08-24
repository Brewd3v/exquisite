import TriangleHeading from "../TriangleHeading"
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


function Cards({ cards, heading, smallHeading }: Cards) {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });

    return (
        <div className="px-6 relative mb-[20%]" ref={ref}>
            <div className="relative bg-primary-light pt-32 pb-60 rounded-xl max-w-5xl mx-auto">

                <TriangleHeading text={smallHeading} className="justify-center" />

                <h2 className="text-center text-[48px] leading-[105px] font-bold text-secondary">{heading} <span className="bg-primary-medium leading-none inline-block">Platform</span></h2>

                <div className="absolute left-0 top-0 -translate-x-[80%] translate-y-1/2 -z-10">

                    <AnimatePresence>
                        {inView && (
                            <motion.div
                                initial={{ x: 15, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    rotate: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 1
                                    }
                                }}>
                                <img src="./shapes/dots.svg" alt="dots" />
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
                <div className="absolute right-0 top-2/3 translate-x-[50%] -translate-y-[50%]">
                    <AnimatePresence>
                        {inView && (<motion.div
                            initial={{ x: 15, rotate: 10, opacity: 0 }}
                            animate={{
                                x: 0,
                                rotate: 0,
                                opacity: 1,
                                transition: {
                                    duration: 1.2
                                }
                            }}>
                            <img src="./shapes/rect.svg" alt="rect" />
                        </motion.div>)}
                    </AnimatePresence>
                </div>
            </div>
            <div className="md:absolute -bottom-[65%] left-1/2 -translate-x-1/2 max-w-6xl w-full">
                <div className="grid px-6 sm:px-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 items-center">
                    {cards && cards.map((card, index) => (
                        <Card {...card} key={card._key} className={`${index % 2 === 0 ? '-translate-y-1/2' : '-translate-y-1/3'} `} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards


const Card = ({ className = '', title, text, icons }: Card) => {
    return (
        <div className={`hover:scale-105 duration-300 bg-white rounded-xl px-8 py-10 shadow-theme ${className}`}>

            <img src={`./icons/${icons}.svg`} alt={icons} width="69" height="84" />

            <h3 className="text-[24px] leading-[105px] font-bold">{title}</h3>
            <p className="text-[16px] font-jost leading-[28px] text-primary-gray">{text}</p>
        </div>
    )
}


interface Card {
    icons: string,
    title: string,
    text: string,
    _key: string,
    className: string
}

interface Cards {
    smallHeading: string,
    heading: string,
    cards: Array<Card>
}