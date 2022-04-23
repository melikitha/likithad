import React from 'react';
import ReactDom from 'react-dom/client';
import {useParams} from 'react-router-dom';
import json from '../models/webdevtest-data.json';

const Promo = () => {

  let {promo_no} = useParams();
  let data = json.promotion_objects[promo_no];
  let drawings = data.drawings.map ((data, i) => {
    return (
      <tr>
        <td>
          <p>{data.prize}</p>
        </td>
        <td>
          <p>{data.entry_deadline}</p>
        </td>
        <td>
          <p>{data.drawing_date}</p>
        </td>
      </tr>
    );
  });

  let entries = data.entries.map ((data, i) => {
    return (
      <tr>
        <td>
          <p>{data.entry_number}</p>
        </td>
        <td>
          <p>{data.date}</p>
        </td>
      </tr>
    );
  });
  return (
    <section className="promo01">
      <div class="container">
        <img class="rounded mx-auto d-block" src={"../"+ json.promotion_objects[promo_no].promo_image_url} />
        <p class="text-grey mb-0 mt-4">
          <strong>{json.promotion_objects[promo_no].promotion_name}</strong>
        </p>
        <small class="text-secondary">{json.promotion_objects[promo_no].summary}</small>
      </div>
      <div class="container text-center mt-4">
        <p>
          <strong>Drwing Schedule</strong>
        </p>
        <table class="table table-secondary table-bordered border-white">
          <thead class="table-active">
            <td>
              <p>PROZE</p>
            </td>
            <td>
              <p>ENTRY DEADLINE</p>
            </td>
            <td>
              <p>DRAWING DATE</p>
            </td>
          </thead>
          <tbody>{drawings}</tbody>

        </table>
        <p class="text-muted text-left">{json.promotion_objects[promo_no].entry_info}</p>
      </div>
      <div class="container text-center mt-4">
        <p class="mb-1">
          <strong>Your Total Tickets Entered: 2</strong>
        </p>
        <small class="text-muted ">
          All entries are locked in at the time they are submitted and cannot be
          deleted
        </small>
        <table class="table table-secondary table-bordered border-white">
          <thead class="table-active">
            <td>
              <p>ENTRY NUMBER</p>
            </td>
            <td>
              <p>DATE</p>
            </td>
          </thead>
          <tbody>
            {entries}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Promo;
