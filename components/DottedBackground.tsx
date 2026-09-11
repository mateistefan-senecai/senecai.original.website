const dottedStyle: React.CSSProperties = {
    backgroundImage: 'radial-gradient(circle, #D4AF37 1.5px, transparent 1.5px)',
    backgroundSize: '30px 30px',
    backgroundPosition: '0 0',
    WebkitMaskImage:
        'radial-gradient(ellipse 70% 70% at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
    maskImage:
        'radial-gradient(ellipse 70% 70% at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)',
};

const DottedBackground = () => {
    return (
        <div
            aria-hidden="true"
            className="absolute inset-0 overflow-hidden pointer-events-none"
            style={dottedStyle}
        />
    );
};

export default DottedBackground;
