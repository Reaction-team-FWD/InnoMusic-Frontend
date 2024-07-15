import styles from "./plans.module.scss";
import Image from "next/image";
import "../../globals.scss";
import upi from "/public/img/upi.png";
import amex from "/public/img/amex.png";
import diners from "/public/img/diners.png";
import visa from "/public/img/visa.png";
import paytm from "/public/img/paytm.png";
import mc from "/public/img/mc.png";

export default function PlansPage() {
  return (
    <div className={styles.plansContainer}>
      <div className={styles.plansInformation}>
        <div className={styles.plansTitle}>Pick your plan</div>
        <div className={styles.plansTitleDescription}>
          Listen without limits on your phone, speaker, and other devices.
        </div>
        <div className={styles.plansInformationIcons}>
          <Image src={upi} width={29} height={20} alt="payment-type" />
          <Image src={paytm} width={29} height={20} alt="payment-type" />
          <Image src={visa} width={29} height={20} alt="payment-type" />
          <Image src={mc} width={29} height={20} alt="payment-type" />
          <Image src={amex} width={29} height={20} alt="payment-type" />
          <Image src={diners} width={29} height={20} alt="payment-type" />
        </div>
      </div>
      <div className={styles.planTypes}>
        <div className={styles.planType}>
          <div className={styles.planInfo}>
            <div className={styles.planDiscount}>1 month free</div>
            <div className={styles.planTitle}>Free</div>
          </div>
        </div>
        <div className={styles.planType}>
          <div className={styles.planInfo}>
            <div className={styles.planDiscount}>1 month free</div>
            <div className={styles.planTitle}>Student</div>
            <div className={styles.planCost}>From 5$/month</div>
            <div className={styles.planConstraints}>1 account on mobile only</div>
          </div>
        </div>
        <div className={styles.planType}>
          <div className={styles.planInfo}>
            <div className={styles.planTitle}>Family</div>
          </div>
        </div>
      </div>
    </div>
  );
}
