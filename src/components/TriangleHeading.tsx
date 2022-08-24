import capitalizeString from "../utils/capitalizeString";

function TriangleHeading({ text, className = '' }: TriangleHeading) {
    return (
        <div className={`flex gap-1 ${className}`}>
            <p className="text-center text-[14px] text-primary font-bold">
                {capitalizeString(text)}
            </p>
            <img src="./shapes/triangles.svg" alt="heading-triangles" />
        </div>
    )
}

export default TriangleHeading

type TriangleHeading = {
    text: string;
    className?: string;
}