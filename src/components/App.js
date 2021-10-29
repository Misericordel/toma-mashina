import "./App.css";

const App = () => {
  return (
    <div className="main-field-wrapper">
      <div className="main-field">
        <div className="additional-info">
          <div className="grid-header">Additional Information</div>
          <div className="options">
            <div className="section-title">Duration of the trip</div>
            <div className="date-picker-wrapper">
              <span className="date-picker-label">Start</span>
              <input type="date" className="date-picker"></input>
            </div>
            <div className="date-picker-wrapper">
              <span className="date-picker-label">End</span>
              <input type="date" className="date-picker"></input>
            </div>
            <div className="section-title people-quantity-div">
              Number of people
              <input
                type="number"
                min="0"
                className="people-quantity-input"
              ></input>
            </div>
            <div className="section-title">Breaks</div>
            <div>
              <div className="ui checkbox breaks-options">
                <input type="checkbox" className="options-button-input"></input>
                <label className="options-checkbox">Direct navigation</label>
              </div>
              <div className="ui checkbox breaks-options">
                <input type="checkbox" className="options-button-input"></input>
                <label className="options-checkbox">Include breaks</label>
              </div>
              <div></div>
            </div>
            <div className="section-title">Further information</div>
            <div>
              <div className="ui checkbox breaks-options">
                <input type="checkbox" className="options-button-input"></input>
                <label className="options-checkbox">Carrying bicycles</label>
              </div>
              <div className="ui checkbox breaks-options">
                <input type="checkbox" className="options-button-input"></input>
                <label className="options-checkbox">
                  Carrying other heavy things
                </label>
              </div>
              <div></div>
            </div>
          </div>
          <div></div>
          <div className="options-button">
            <button className="ui blue button">Apply selection</button>
          </div>
        </div>
        <div className="packages">
          <div className="grid-header">Packages</div>
          <div className="packages-wrapper">
            <div className="packages-item">
              <div className="package-item-left">
                <div>
                  <i className="wifi icon packages-icon"></i>
                </div>
                <div className="packages-option">A</div>
              </div>
              <div className="package-item-right">
                <div className="packages-button">
                  Information and Purchasing
                </div>
                <div className="package-type">Wider range</div>
              </div>
            </div>
            <div className="packages-item">
              <div className="package-item-left">
                <div>
                  <i className="shipping fast icon packages-icon"></i>
                </div>
                <div className="packages-option">B</div>
              </div>
              <div className="package-item-right">
                <div className="packages-button">
                  Information and Purchasing
                </div>
                <div className="package-type">Higher speed</div>
              </div>
            </div>
            <div className="packages-item">
              <div className="package-last-item-left">
                <div className="packages-icon-combo">
                  <i className="wifi icon packages-last-icon"></i>
                  <i className="shipping fast icon packages-last-icon"></i>
                </div>
                <div className="packages-last-option">C</div>
              </div>
              <div className="package-item-right">
                <div className="packages-button">
                  Information and Purchasing
                </div>
                <div className="package-type">Combination</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
