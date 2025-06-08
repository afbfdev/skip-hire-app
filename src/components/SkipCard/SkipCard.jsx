import React, { useMemo } from 'react';
import styles from './SkipCard.module.css';
import { formatCurrency, calculateTotalPrice } from '../../utils/helpers';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTriangleExclamation
} from '@fortawesome/free-solid-svg-icons';


const SkipCard = React.memo(({ skip, isSelected, onSelect }) => {
  const totalPrice = useMemo(() => calculateTotalPrice(skip), [skip]);

  const handleCardClick = () => {
    if (isSelected) {
      onSelect(null);
    } else {
      onSelect(skip.id);
    }
  };

  return (
    <div
      className={`${styles.skipCard} ${isSelected ? styles.skipCardSelected : ''}`}
      onClick={handleCardClick}
      role="button"
      tabIndex={0} 
      onKeyDown={(e) => { 
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
    >
      <img
        src={skip.imageUrl}
        alt={`${skip.size} Yard Skip`}
        className={styles.skipImage}
      />

      {!skip.allowed_on_road && (
        <div className={styles.notAllowedBadge}>
          <span className={styles.notAllowedBadgeText}>
            <FontAwesomeIcon icon={faTriangleExclamation} className={styles.badgeIcon} />
            {' '}
            Not Allowed On The Road
          </span>
        </div>
      )}

     <div className={styles.sizeBadge}>
        <span className={styles.sizeBadgeText}>{skip.size} Yards</span>
      </div>

      <h3 className={styles.skipSizeText}>{skip.size} Yard Skip</h3>
      <p className={styles.skipHirePeriod}>{skip.hire_period_days} day hire period</p>
      <p className={styles.skipPrice}>{formatCurrency(totalPrice)}</p>
      {isSelected && (
        <div className={styles.selectedBadge}>
          <span className={styles.selectedBadgeText}>Selected</span>
        </div>
      )}
    </div>
  );
});

export default SkipCard;