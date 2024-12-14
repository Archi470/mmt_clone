'use client';
import { Fromtocss } from "./Fromtocss";

const Fromto = () => {  
  return (
    <Fromtocss>
      <div className="fromtodiv">
        <div>
          <h3>FROM</h3>
        </div>
        <div>
          <h3>TO</h3>
        </div>
      </div>

      <div className="fromtodiv2">
        <div>
          <h3>DEPARTURE</h3>
          <input type="date" className="date" />
        </div>
        <div>
          <h3>RETURN</h3>
          <input type="date" className="date" />
        </div>
        <div>
          <h3>TRAVLLER & CLASS</h3>
          <select name="" id="">
          <option value="">Select</option>

            <option value="">Economy</option>
            <option value="">Premium</option>

          </select>
        </div>
      </div>
    </Fromtocss>
  );
};
export default Fromto;