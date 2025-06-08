import React, { useState, useMemo, useCallback } from 'react';
import Header from '../../components/Header/Header';
import StepIndicator from '../../components/StepIndicator/StepIndicator';
import SkipCard from '../../components/SkipCard/SkipCard';
import Footer from '../../components/Footer/Footer';
import SKIP_DATA from '../../data/skipData';
import styles from './SkipSelectionPage.module.css';
import { calculateTotalPrice } from '../../utils/helpers';

const SkipSelectionPage = () => {
  const [selectedSkipId, setSelectedSkipId] = useState(SKIP_DATA[0]?.id || null);

  const handleSelectSkip = useCallback((id) => {
    setSelectedSkipId(id);
  }, []);

  const selectedSkip = useMemo(() => {
    return SKIP_DATA.find((skip) => skip.id === selectedSkipId);
  }, [selectedSkipId]);

  const handleContinue = useCallback(() => {
    if (selectedSkip) {
      alert(`Proceeding with ${selectedSkip.size} Yard Skip for £${calculateTotalPrice(selectedSkip).toFixed(2)}`);
    } else {
      alert('Please select a skip first.');
    }
  }, [selectedSkip]);

  const handleBack = useCallback(() => {
    alert('Navigating back...');
  }, []);

  return (
    <div className={styles.pageContainer}>
      <Header />
      <StepIndicator currentStep={2} />
      
      <div className={styles.skipCardsGrid}>
        {SKIP_DATA.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            isSelected={skip.id === selectedSkipId}
            onSelect={handleSelectSkip}
          />
        ))}
      </div>

      <Footer
        selectedSkip={selectedSkip}
        onBack={handleBack}
        onContinue={handleContinue}
      />
    </div>
  );
};

export default SkipSelectionPage;