function ImageCard({ children, imgSrc, ...props }) {
  return (
    <div
      {...props}
      className="flex items-center gap-5 p-2  bg-[#d7c2a0] rounded-2xl drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] hover:!scale-[1.03] hover:!shadow-xl duration-300 cursor-default "
    >
      {/* Immagine con padding interno al contenitore */}
      <div className="max-w-xs rounded-2xl overflow-hidden">
        <img
          src={imgSrc}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Testo a destra dell'immagine */}
      <div className="text-[#3b2e2e] text-left max-w-md select-none">
        {children}
      </div>
    </div>
  );
}


export default ImageCard;