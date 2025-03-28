
import { Printer } from "lucide-react";

const PrintButton = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button 
      onClick={handlePrint}
      className="button-secondary flex items-center no-print fixed bottom-6 right-6 shadow-md"
    >
      <Printer size={18} className="mr-2" />
      Print Recipe
    </button>
  );
};

export default PrintButton;
