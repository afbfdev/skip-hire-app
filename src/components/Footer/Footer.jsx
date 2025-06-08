import React from 'react';
import styles from './Footer.module.css';
import { formatCurrency, calculateTotalPrice } from '../../utils/helpers';

const Footer = ({ selectedSkip, onBack, onContinue }) => {
  const displayPrice = selectedSkip ? formatCurrency(calculateTotalPrice(selectedSkip)) : 'N/A';
  const displaySize = selectedSkip ? `${selectedSkip.size} Yard Skip` : 'No skip selected';
  const displayHirePeriod = selectedSkip ? `${selectedSkip.hire_period_days} days` : '';

  return (
    <footer className={styles.footer}>
      <div className={styles.footerSummary}>
        <p className={styles.footerText}>
          {displaySize} {' '}
          <span className={styles.footerPrice}>
            {selectedSkip ? displayPrice : ''}
          </span>
          {selectedSkip ? ` for ${displayHirePeriod}` : ''}
        </p>
      </div>
      <div className={styles.footerButtons}>
        <button className={styles.backButton} onClick={onBack}>
          Back
        </button>
        <button
          className={`${styles.continueButton} ${!selectedSkip ? styles.continueButtonDisabled : ''}`}
          onClick={onContinue}
          disabled={!selectedSkip}
        >
          Continue &rarr;
        </button>
      </div>
    </footer>
  );
};

export default Footer;