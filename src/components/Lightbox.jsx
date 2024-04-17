export default function Lightbox() {
  return (
    <div className="lightbox">
      <img src={image} alt="Product Image (Zoomed)" />
      <button onClick={onClose}>Close</button>
    </div>
  );
}
