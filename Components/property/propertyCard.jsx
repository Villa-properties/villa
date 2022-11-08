import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PlaceIcon from "@mui/icons-material/Place";
import PaymentIcon from "@mui/icons-material/Payment";

import KingBedIcon from "@mui/icons-material/KingBed";
import { useState } from "react";

export default function PropertyCard() {
  const [img_position, setimg_position] = useState(0);
  const [nexting, setnexting] = useState(false);
  const [preving, setpreving] = useState(false);

  return (
    <div className="property_card">
      <div className="property_display">
        <p>RENT</p>
        <KeyboardArrowLeftIcon
          className="prev"
          onClick={() => {
            console.log(img_position);
            setnexting(false);
            setpreving(true);
            setimg_position(img_position - 1);
          }}
        />
        <KeyboardArrowRightIcon
          className="next"
          onClick={() => {
            console.log(img_position);
            setnexting(true);
            setpreving(false);
            setimg_position(img_position + 1);
          }}
        />

        <div
          className={`property_imgs ${
            nexting
              ? img_position == 1
                ? "next_image1"
                : img_position == 2
                ? "next_image2"
                : img_position == 3
                ? "next_image3"
                : img_position == 4
                ? "next_image4"
                : ""
              : preving
              ? img_position == 3
                ? "prev_image4"
                : img_position == 2
                ? "prev_image3"
                : img_position == 1
                ? "prev_image2"
                : img_position == 0
                ? "prev_image1"
                : ""
              : ""
          }`}
        >
          <img src="/assets/images/lvr.jpg" alt="" />
          <img src="/assets/images/bed.jpg" alt="" />
          <img src="/assets/images/home.jpg" alt="" />
          <img src="/assets/images/apartment.jpg" alt="" />
          <img src="/assets/images/house.png" alt="" />
          <img src="/assets/images/kitchen.jpg" alt="" />
        </div>
      </div>
      <div className="property_info">
        <p>Semi-detached duplex</p>
        <p>
          <PlaceIcon className="icon" />

          <span>Mobolaji Bank Anthony way, Lagos</span>
        </p>
        <p>
          <KingBedIcon className="icon" />

          <span>3 bd | 2 Bath | 2 Toilet | 960 sqft</span>
        </p>
        <p>
          <PaymentIcon className="icon" />

          <span>
            <span>₦3,500,500</span> per annum
          </span>
        </p>
      </div>
    </div>
  );
}
