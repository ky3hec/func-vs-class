export default function Images({ images }) {
  if (Array.isArray(images) && images.length > 0) {
    return (
      <div className="image-list">
        {images.map((image) => (
          <img
            src={image.images.fixed_height.url}
            alt={image.title}
            key={image.id}
          />
        ))}
      </div>
    );
  } else {
    return <div className="empty">Nothing to view</div>;
  }
}
