import { FunctionComponent } from 'react'; // importing FunctionComponent


interface Props {
    _key: String,
    _type: String,
    heading: String,
    tagline: String
}


function Cta({ heading, tagline }: Props) {
    return (
        <div>
            {heading}
            {tagline}
        </div>
    )
}


export default Cta