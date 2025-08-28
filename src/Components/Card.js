import React from "react";

const Card = ({ menuData }) => {
  return (
    <>
      <section className="main-card--cointainer">
        {menuData.map((curElem) => {
          const { id, name, category, price, image, description, wlink } =
            curElem;

          return (
            <React.Fragment key={id}>
              <div className="card-container">
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle">{id}</span>
                    <span className="card-author"> {category}</span>
                    <h2 className="card-title"> {name} </h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                    <div className="card-read">{price}</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />

                  <span className="card-tag">
                    <a href={wlink}>KNOW MORE</a>
                  </span>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </section>
    </>
  );
};
export default Card;
