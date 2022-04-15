import React, { FC, useEffect } from "react";
import { useActions } from "../../../lib/hooks/useActions";
import { useTypedSelector } from "../../../lib/hooks/useTypedSelector";
import SimpleLoader from "../../UI/loader/SimpleLoader";
import SliderBook from "../../UI/swiper/SliderBook/SliderBook";

const MainBody: FC = () => {
  const { setFetchCatalogBooks } = useActions();
  const { catalogBooks, isCatalogLoading } = useTypedSelector(
    (s) => s.catalogReducer
  );

  useEffect(() => {
    setFetchCatalogBooks();
  }, []);

  return (
    <div className="main-body">
      <div className="_container main-body__container">
        {isCatalogLoading ? (
          <div className="main-body__loader">
            <SimpleLoader blockSize="50px" />
          </div>
        ) : (
          <>
            {Object.keys(catalogBooks).map((it: string) => (
              <div className="slider-container" key={it}>
                <SliderBook title={it} books={catalogBooks[it]} />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MainBody;
