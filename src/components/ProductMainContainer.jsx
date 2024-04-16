import ImageSlider from "./ImageSlider"

export default function ProductMainContainer() {
    return (
        <section>
            <div id="productImageContainer w-full">
                <ImageSlider />
            </div>
            <div id="productInfoContainer"></div>
        </section>
    )
}