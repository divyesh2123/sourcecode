import React, { useState, useEffect } from "react";
import { Col, FormFeedback, FormGroup, Input, Row } from "reactstrap";



const ItemSettingForm = (props) => {
    const {formik} = props;

   


    return (
        <>

<Col md="2">
                              <Col>
                                <FormGroup  >
                                  <input
                                    className="form-check-input"

                                    type="checkbox"
                                    id="NonDiscount"
                                    name="NonDiscount"
                                    onChange={formik.handleChange}
                                    value={formik.values.NonDiscount}
                                  />
                                  <label
                                    className="form-check-label text-dark ms-3 mt-1"

                                    htmlFor="NonDiscount"
                                  >
                                    Non Discountable
                                  </label>
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <input
                                    className="form-check-input "
                                    type="checkbox"
                                    id="DepositeItem"
                                    name="DepositeItem"
                                    onChange={formik.handleChange}
                                    value={formik.values.DepositeItem}
                                  />
                                  <label
                                    className="form-check-label text-dark ms-3  mt-1"
                                    htmlFor="DepositeItem"
                                  >
                                    Deposite Item
                                  </label>
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <input
                                    className="form-check-input "

                                    type="checkbox"
                                    id="AcceptFoodStamp"
                                    name="AcceptFoodStamp"
                                    onChange={formik.handleChange}
                                    value={formik.values.AcceptFoodStamp}
                                  />
                                  <label
                                    className="form-check-label text-dark ms-3  mt-1"

                                    htmlFor="AcceptFoodStamp"
                                  >
                                    Accept Food Stamp
                                  </label>
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <input
                                    className="form-check-input "

                                    type="checkbox"
                                    id="NonRevenue"
                                    name="NonRevenue"
                                    onChange={formik.handleChange}
                                    value={formik.values.NonRevenue}
                                  />
                                  <label
                                    className="form-check-label text-dark ms-3  mt-1"

                                    htmlFor="NonRevenue"
                                  >
                                    Non Revenue
                                  </label>
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <input
                                    className="form-check-input "

                                    type="checkbox"
                                    id="NonCountable"
                                    name="NonCountable"
                                    onChange={formik.handleChange}
                                    value={formik.values.NonCountable}
                                  />
                                  <label
                                    className="form-check-label text-dark ms-3  mt-1"

                                    htmlFor="NonCountable"
                                  >
                                    Non Countable
                                  </label>
                                </FormGroup>
                              </Col>

                            </Col>

                            <Col md="4">

                              <Col>
                                <FormGroup>
                                  <input
                                    className="form-check-input "

                                    type="checkbox"
                                    id="AcceptWicCheck"
                                    name="AcceptWicCheck"
                                    onChange={formik.handleChange}
                                    value={formik.values.AcceptWicCheck}
                                  />
                                  <label
                                    className="form-check-label text-dark ms-3  mt-1"
                                    htmlFor="AcceptWicCheck"
                                  >
                                    Accept Wic Check
                                  </label>
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <input
                                    className="form-check-input "
                                    type="checkbox"
                                    id="CountWithNoDisc"
                                    name="CountWithNoDisc"
                                    onChange={formik.handleChange}
                                    value={formik.values.ShowInOpenPrice}
                                  />
                                  <label
                                    className="form-check-label text-dark ms-3  mt-1"

                                    htmlFor="CountWithNoDisc"
                                  >
                                    Count With No Disc
                                  </label>
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <input
                                    className="form-check-input "

                                    type="checkbox"
                                    id="WeightedItem"
                                    name="WeightedItem"
                                    onChange={formik.handleChange}
                                    value={formik.values.WeightedItem}
                                  />
                                  <label
                                    className="form-check-label text-dark ms-3  mt-1"

                                    htmlFor="WeightedItem"
                                  >
                                    Weighted Item
                                  </label>
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <input
                                    className="form-check-input "

                                    type="checkbox"
                                    id="WebItem"
                                    name="WebItem"
                                    onChange={formik.handleChange}
                                    value={formik.values.WebItem}
                                  />
                                  <label
                                    className="form-check-label text-dark ms-3  mt-1"
                                    htmlFor="WebItem"
                                  >
                                    Web Item
                                  </label>
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <input
                                    className="form-check-input "

                                    type="checkbox"
                                    id="ReturnItem"
                                    name="ReturnItem"
                                    onChange={formik.handleChange}
                                    value={formik.values.ReturnItem}
                                  />
                                  <label
                                    className="form-check-label text-dark ms-3  mt-1"

                                    htmlFor="ReturnItem"
                                  >
                                    Return Item
                                  </label>
                                </FormGroup>
                              </Col>

                            </Col>

        </>








    );
};

export default ItemSettingForm;
