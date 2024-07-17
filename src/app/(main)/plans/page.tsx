import styles from "./plans.module.scss";
import Image from "next/image";
import "../../globals.scss";
import upi from "/public/img/upi.png";
import amex from "/public/img/amex.png";
import diners from "/public/img/diners.png";
import visa from "/public/img/visa.png";
import paytm from "/public/img/paytm.png";
import mc from "/public/img/mc.png";
import benefit from "/public/svg/benefit.svg";

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
            <div className={styles.planNotification}>Trial version</div>
            <div className={styles.planTitle}>Free</div>
            <div className={styles.planCost}>₹0/month</div>
            <div className={styles.planConstraints}>
              1 account on mobile only
            </div>
            <div className={styles.delimeter}></div>
          </div>
          <div className={styles.planBenefits}>
            <div className={styles.planBenefit}>
              <Image src={benefit} width={24} height={26} alt="benefit" />
              <div className={styles.planBenefitText}>For broke students</div>
            </div>
            <div className={styles.planBenefit}>
              <Image src={benefit} width={24} height={26} alt="benefit" />
              <div className={styles.planBenefitText}>
                Only Russian songs are available
              </div>
            </div>
            <div className={styles.planBenefit}>
              <Image src={benefit} width={24} height={26} alt="benefit" />
              <div className={styles.planBenefitText}>
                Ad break every 10 seconds
              </div>
            </div>
            <div className={styles.planBenefit}>
              <Image src={benefit} width={24} height={26} alt="benefit" />
              <div className={styles.planBenefitText}>
                No background listening
              </div>
            </div>
            <div className={styles.planBenefit}>
              <Image src={benefit} width={24} height={26} alt="benefit" />
              <div className={styles.planBenefitText}>Almost free plan</div>
            </div>
            <div className={styles.delimeter}></div>
          </div>
          <div className={styles.buyButtonContainer}>
            <button className={styles.buyButton}>CHOOSE PLAN</button>
          </div>
        </div>
        <div className={styles.planType}>
          <div className={styles.planInfo}>
            <div className={styles.planDiscount}>1 month free</div>
            <div className={styles.planTitle}>Student</div>
            <div className={styles.planCost}>₹119/month after offer period</div>
            <div className={styles.planConstraints}>
              1 account on mobile only
            </div>
            <div className={styles.delimeter}></div>
          </div>
          <div className={styles.planBenefits}>
            <div className={styles.planBenefit}>
              <Image src={benefit} width={24} height={26} alt="benefit" />
              <div className={styles.planBenefitText}>
                For frontend students only
              </div>
            </div>
            <div className={styles.planBenefit}>
              <Image src={benefit} width={24} height={26} alt="benefit" />
              <div className={styles.planBenefitText}>Block explicit music</div>
            </div>
            <div className={styles.planBenefit}>
              <Image src={benefit} width={24} height={26} alt="benefit" />
              <div className={styles.planBenefitText}>
                Ad-free music listening on mobile
              </div>
            </div>
            <div className={styles.planBenefit}>
              <Image src={benefit} width={24} height={26} alt="benefit" />
              <div className={styles.planBenefitText}>Group Session</div>
            </div>
            <div className={styles.planBenefit}>
              <Image src={benefit} width={24} height={26} alt="benefit" />
              <div className={styles.planBenefitText}>
                Download 30 songs on 1 mobile device
              </div>
            </div>
            <div className={styles.delimeter}></div>
          </div>
          <div className={styles.buyButtonContainer}>
            <button className={styles.buyButton}>CHOOSE PLAN</button>
          </div>
        </div>
        <div className={styles.planType}>
          <div className={styles.planInfo}>
            <div className={styles.planDiscount}>1 month free</div>
            <div className={styles.planTitle}>Family</div>
            <div className={styles.planCost}>₹179/month after offer period</div>
            <div className={styles.planConstraints}>Up to 5 accounts</div>
            <div className={styles.delimeter}></div>
          </div>
          <div className={styles.planBenefits}>
            <div className={styles.planBenefit}>
              <Image src={benefit} width={24} height={26} alt="benefit" />
              <div className={styles.planBenefitText}>
                For family who live together
              </div>
            </div>
            <div className={styles.planBenefit}>
              <Image src={benefit} width={24} height={26} alt="benefit" />
              <div className={styles.planBenefitText}>Block explicit music</div>
            </div>
            <div className={styles.planBenefit}>
              <Image src={benefit} width={24} height={26} alt="benefit" />
              <div className={styles.planBenefitText}>
                Ad-free music listening
              </div>
            </div>
            <div className={styles.planBenefit}>
              <Image src={benefit} width={24} height={26} alt="benefit" />
              <div className={styles.planBenefitText}>Group Session</div>
            </div>
            <div className={styles.planBenefit}>
              <Image src={benefit} width={24} height={26} alt="benefit" />
              <div className={styles.planBenefitText}>
                Download 10k songs/device on 5 devices
              </div>
            </div>
            <div className={styles.delimeter}></div>
          </div>
          <div className={styles.buyButtonContainer}>
            <button className={styles.buyButton}>CHOOSE PLAN</button>
          </div>
        </div>
      </div>
    </div>
  );
}
