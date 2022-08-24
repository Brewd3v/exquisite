import React from 'react'
import TriangleHeading from '../TriangleHeading';
import Image from 'next/image'


// interface Props {
//     heading: string;
//     title: string;
//     text: string;
//     items: [
//         {
//             icon: string;
//             item: string;
//         }
//     ]
// }

function LeftRight() {
    const items = [
        { icon: "management", item: "Management Tools" },
        { icon: "data", item: "Customer Data" },
        { icon: "app-stack", item: "App Integrations" }
    ]


    return (
        <div className="flex max-w-5xl mx-auto mb-[50vh]">
            <div className="flex-1">
                <TriangleHeading text="Collaboartion" />
                <h2 className="text-[48px] font-bold mb-4">Create your<br /> highly-engaged, high performance</h2>
                <p className='font-jost text-[24px] leading-[36px] text-primary-gray'>No more switching between apps to get your daily industry news updates. Vincent eliminates</p>
                <ul className='space-y-[24px] mt-[48px]'>
                    {
                        items && items.map(item => (
                            <li className="flex gap-4 items-center" key={item.item}>
                                <Image
                                    src={`/icons/${item.icon}.svg`}
                                    alt={`${item.item}`}
                                    width={46}
                                    height={55}
                                />
                                <span className='text-[24px] font-bold leading-[30px]'>{item.item}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="flex-1"></div>
        </div>
    )
}

export default LeftRight