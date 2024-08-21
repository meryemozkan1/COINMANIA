import { MdCurrencyBitcoin } from "react-icons/md";
import CardView from "./CardView";

const MainPageView = ({ popular, coins }) => {
  return (
    <div>
      <h3 className="d-flex align-items-center gap-2">
        <span>
          <MdCurrencyBitcoin />
        </span>
        Bitcoin'in Yükselişi
      </h3>
      <p>
        Bitcoin, kripto para dünyasında büyük bir çıkış yakaladı. Son birkaç
        haftada değeri hızla arttı ve birçok yatırımcı tarafından ilgiyle takip
        ediliyor. Peki, bu yükseliş ne anlama geliyor?
      </p>
      {/* Populerleri listele */}
      <div>
        {popular?.map((i) => {
          <CardView key={i.id} data={i} />;
        })}
      </div>
    </div>
  );
};

export default MainPageView;
