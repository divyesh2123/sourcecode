import Cleave from "cleave.js/react";
import React, { useEffect } from "react";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";

const StockForm = ({validation}) => {


  
 
  useEffect(() => {
   
  }, []);

  return (
    <React.Fragment>
       <Row>
       <h6>Stocks</h6>
                                <Col>
                                  <div className="mb-0">
                                    <label
                                      htmlFor="onhand"
                                      className="form-label"
                                    >
                                      On Hand
                                    </label>
                                    <div className="input-group">
                                      <Cleave
                                        // placeholder="Enter numeral"
                                        options={{
                                          numeral: true,
                                          numeralThousandsGroupStyle: "ten",
                                        }}

                                      
                                        className="form-control text-end"
                                        keyboardType="decimal-pad"
                                        id="onhand"
                                      />
                                      <span className="input-group-text">$</span>
                                    </div>
                                  </div>
                                </Col>
                                <Col>
                                  <div className="mb-0">
                                    <label
                                      htmlFor="Margin"
                                      className="form-label"
                                    >
                                      Re Order
                                    </label>
                                    <div className="input-group">
                                      <Cleave
                                        options={{
                                          numeral: true,
                                          numeralThousandsGroupStyle: "ten",
                                        }}
                                       
                                        name="ReOrder"
                                        
                                        className="form-control text-end"
                                        keyboardType="decimal-pad"
                                        id="ReOrder"
                                      />
                                      <span className="input-group-text">%</span>
                                    </div>
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <div className="mb-0">
                                    <label
                                      htmlFor="MinWarnQty"
                                      className="form-label"
                                    >
                                      Unit Price
                                    </label>
                                    <div className="input-group">
                                      <Cleave
                                        options={{
                                          numeral: true,
                                          numeralThousandsGroupStyle: "ten",
                                        }}

                                       
                                        className="form-control text-end"
                                        keyboardType="decimal-pad"
                                        name="MinWarnQty"
                                        id="MinWarnQty"
                                      />
                                      <span className="input-group-text">$</span>
                                    </div>
                                  </div>
                                </Col>
                                <Col className="mt-3">
                              
              <button
                className="btn btn-primary mt-1"
                type="button"
                onClick={() => {
                 
                }}
               
                
              >
                Enter Stock
              </button>

            
            
                                </Col>
                              </Row>
      
    </React.Fragment>
  );
};

export default StockForm;
