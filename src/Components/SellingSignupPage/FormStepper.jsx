import React from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';

import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Verification from './Verification';
import PickUp from './PickUp';
import BusinessDetail from './BusinessDetail';

const steps = ['Mobile,Email & Face Verification', 'Profession & Pick-up', 'Business Details'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <Verification />;
        case 1:
            return <PickUp />;
        case 2:
            return <BusinessDetail />;
        default:
            throw new Error('Unknown step');
    }
}
const FormStepper = () => {

    const [activeStep, setActiveStep] = React.useState(0);


    const handleNext = () => {
        setActiveStep(activeStep + 1);

    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };
    return (
        <div>
 
                    
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <React.Fragment>
                      
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {getStepContent(activeStep)}
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                {activeStep !== 0 && (
                                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                        Back
                                    </Button>
                                )}

                                <Button
                                    variant="contained"
                                    onClick={handleNext}
                                    sx={{ mt: 3, ml: 1 }}
                                >
                                    {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                </Button>
                            </Box>
                        </React.Fragment>
                    )}
     

        </div>
    )
}

export default FormStepper