import ImageSlider from "./ImageSlider"

export default function ProductMainContainer() {
    return (
        <section className="section flex flex-col mt-12 gap-12 md:flex-row">
            <div id="productImageContainer" className=" basis-1/2">
                <ImageSlider />

            </div>
            <div id="productInfoContainer " className="inline-block basis-1/2"> 
                <h1 className="text-2xl font-bold">Product Name</h1>
                <p className="text-lg">Product Description</p>
                <p className="text-lg">Product Price</p>
                <button className="bg-black text-white">Add to Cart</button>
            </div>
        </section>
    )
}