import react from "react";
import ReactDom from "react-dom/client";
import { Link } from 'react-router-dom';
import json from '../models/webdevtest-data.json';

const Promo1 = () => {
  const data = json.promotion_objects.map((data, i) => {
    return (
      <section className="promo02" key={i}>
        <div className="container mb-5">
          <img className="rounded mx-auto d-block" src={"../"+ data.promo_image_url} alt="" /><br />
          <Link to={`/Promo/${i}`} >{data.promotion_name}</Link><br />
          <small className="text-muted">{data.summary}</small>
          <p className="text-secondary">
          {
            data.drawings.map((element, i) => {
              return(<p>{element.drawing_date}</p>)
            })
          }
          </p>
        </div>
      </section>
      )
  })
  return data;
}

export default Promo1;
