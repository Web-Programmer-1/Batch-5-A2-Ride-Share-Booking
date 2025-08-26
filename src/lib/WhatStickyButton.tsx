const WhatsAppStickyButton = () => {
  return (
    <a
      href="https://wa.me/8801625648073"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-transform transform hover:scale-110"
    >
      <img
        src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
        alt="WhatsApp"
        className="w-7 h-7"
      />
    </a>
  );
};

export default WhatsAppStickyButton;
