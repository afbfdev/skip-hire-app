import React from 'react';
import styles from './StepIndicator.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt, 
  faTrashAlt,    
  faTruck,      
  faScroll,      
  faCalendarAlt,
  faCreditCard 
} from '@fortawesome/free-solid-svg-icons';



const StepIndicator = ({ currentStep}) => {
  const steps = [
    { label: 'Postcode', icon: faMapMarkerAlt },
    { label: 'Waste Type', icon: faTrashAlt },
    { label: 'Select Skip', icon: faTruck },
    { label: 'Permit Check', icon: faScroll },
    { label: 'Choose Date', icon: faCalendarAlt },
    { label: 'Payment', icon: faCreditCard },
  ];

  

  return (
    <div className={styles.stepIndicatorContainer}>
      {steps.map((step, index) => (
        <div key={step.label} className={styles.stepItem}>
          <div
            className={`${styles.stepCircle}
              ${index === currentStep ? styles.stepCircleActive : ''}
              ${index < currentStep ? styles.stepCircleCompleted : ''}`}
          >
            <FontAwesomeIcon
              icon={step.icon}
              className={styles.stepIcon}
              style={{
                color: index < currentStep || index === currentStep ? '#FFF' : '#777', // White for completed and active, gray for others
              }}
            />
          </div>
          <span
            className={`${styles.stepText}
              ${index === currentStep ? styles.stepTextActive : ''}
              ${index < currentStep ? styles.stepTextCompleted : ''}`}
          >
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
  
};

export default StepIndicator;