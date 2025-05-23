const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white text-center py-6">
      <p className="text-sm">&copy; {year} Sridhar J. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
