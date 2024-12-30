import { useState } from "react";
import 'animate.css'

export default function Size({handleSizeClick,activeSize}){

    const sizes = [8, 9, 10, 11, 12];
    const [selectedSize, setSelectedSize] = useState(activeSize || "");

  function handleDropdownChange(event) {
    const newSize = event.target.value;
    setSelectedSize(newSize);
    handleSizeClick(newSize); // Pass the selected size to the handler
  }


    return (<>
         <div className="wholeSizeComponent animate__animated animate__fadeInUp">
        <div className="dropdown">
          <label htmlFor="sizeDropdown">
            <h3>Sizes</h3>
          </label>
          <select
            id="sizeDropdown"
            className="sizeDropdown"
            value={selectedSize}
            onChange={handleDropdownChange}
          >
            <option value="" disabled>
              Select Size
            </option>
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
      </div>
        </>
    )
}