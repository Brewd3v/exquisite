function TriangleHeading({ text }: TriangleHeading) {
    return (
        <div className="flex justify-center gap-1">
            <p className="text-center text-[14px] text-primary font-bold">
                {text}
            </p>
            <img src="./shapes/triangles.svg" alt="heading-triangles" />
        </div>
    )
}

export default TriangleHeading

type TriangleHeading = {
    text: string;
}