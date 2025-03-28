
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

interface InstructionStepsProps {
  instructions: string[];
}

const InstructionSteps = ({ instructions }: InstructionStepsProps) => {
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [completedSteps, setCompletedSteps] = useState<{[key: number]: boolean}>({});
  
  const isStepByStep = currentStep !== null;
  
  const startStepByStep = () => {
    setCurrentStep(0);
    setCompletedSteps({});
  };
  
  const showAllSteps = () => {
    setCurrentStep(null);
  };
  
  const moveToNextStep = () => {
    if (currentStep !== null && currentStep < instructions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const moveToPreviousStep = () => {
    if (currentStep !== null && currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const toggleStepComplete = (index: number) => {
    setCompletedSteps(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-heading font-semibold text-recipe-secondary">Instructions</h2>
        
        <button 
          onClick={isStepByStep ? showAllSteps : startStepByStep}
          className="button-outline text-sm"
        >
          {isStepByStep ? "View All Steps" : "Start Step-by-Step Mode"}
        </button>
      </div>
      
      {isStepByStep ? (
        <div className="bg-muted rounded-lg p-6">
          <div className="mb-4 text-center text-recipe-dark/70">
            Step {currentStep + 1} of {instructions.length}
          </div>
          
          <div className="mb-6 min-h-[120px] flex items-center">
            <p className="text-lg text-recipe-dark">{instructions[currentStep]}</p>
          </div>
          
          <div className="flex justify-between items-center">
            <button 
              onClick={moveToPreviousStep}
              disabled={currentStep === 0}
              className={`button-outline ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <ArrowLeft size={16} className="mr-1" />
              Previous
            </button>
            
            <button 
              onClick={() => toggleStepComplete(currentStep)}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                completedSteps[currentStep] 
                  ? "bg-recipe-green text-white" 
                  : "border border-recipe-green text-recipe-green"
              }`}
            >
              {completedSteps[currentStep] ? (
                <>
                  <Check size={16} className="inline mr-1" />
                  Completed
                </>
              ) : (
                "Mark Complete"
              )}
            </button>
            
            <button 
              onClick={moveToNextStep}
              disabled={currentStep === instructions.length - 1}
              className={`button-outline ${currentStep === instructions.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Next
              <ArrowRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      ) : (
        <ol className="space-y-4 list-decimal list-inside text-recipe-dark ml-4">
          {instructions.map((instruction, index) => (
            <li key={index} className="pl-2">
              {instruction}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default InstructionSteps;
