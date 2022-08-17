interface Props {
    stats: Array<Stat>,
    testimonials: {
        author: string,
        company: string,
        quote: string
    },
}

interface Stat {
    stat: string,
    statText: string
}

function StatsAndTestimonials({ stats, testimonials: { author, company, quote } }: Props) {

    return (
        <section className="max-w-[1200px] mx-auto py-10">
            <div className="flex justify-center items-center flex-wrap">
                <div className="flex divide-x">
                    <div className="text-center pr-10">
                        <span className="block text-[90px] leading-[105px] font-bold">{stats[0]?.stat}</span>
                        <span className="block font-jost text-[24px] leading-[36px] text-primary-gray">{stats[0]?.statText}</span>
                    </div>
                    <div className="text-center pl-10">
                        <span className="block text-[90px] leading-[105px] font-bold">{stats[1]?.stat}</span>
                        <span className="block font-jost text-[24px] leading-[36px] text-primary-gray">{stats[1]?.statText}</span>
                    </div>
                </div>

                <div className="max-w-xl py-12">
                    <p className="text-center font-jost text-[30px] leading-[36px]">{quote}</p>
                    <div className="flex items-center gap-3 justify-center mt-3">
                        <div className="h-[40px] w-[40px] bg-gray-900 rounded-full"></div>
                        <div className="font-jost">
                            <p className="text-[16px] leading-[36px] text-primary-gray">
                                <span>{author}</span>
                                <span>{" "}/{" "}</span>
                                <span className="text-primary">{company}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default StatsAndTestimonials