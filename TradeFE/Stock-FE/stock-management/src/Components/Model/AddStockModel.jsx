import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import {
  createTradeDetails,
} from "../AxiosAPI/tradeAPI";

const AddStockModel = (props) => {
  const handleClose = () => props.setShow(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const postData = async (data) => {
    try {
      await createTradeDetails(data);
    } catch (error) {
      console.error("Error fetching trade details:", error);
    }
  };

  const onSubmit = async (data) => {
    console.log(data)
    try {
      await new Promise(() => postData(data));
      console.log(data);
    } catch (error) {
      setError("name", {
        message: "",
      });
      setError("email", {
        message: "This email is already taken",
      });
      setError("password", {
        message: "This  is wrong password",
      });
      setError("root", {
        message: "Invalid credentials",
      });
    }
  };
  return (
    <div>
      <Modal show={props.show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Trade</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Stock name</label>
            <br />
            <input
              type="text"
              placeholder="Enter stock name"
              className="form-control"
              {...register("stockName", {
                required: "Stock Name is required",
              })}
            />
            {errors.name && (
              <div className="error-massage">{errors.name.message}</div>
            )}
            <br />
            <label>Quantity</label>
            <br />
            <input
              type="number"
              placeholder="Enter quantity"
              className="form-control"
              {...register("quantity", {
                required: "Quantity is required",
              })}
            />
            <br />
            <label>Listing price</label>
            <br />
            <input
              type="number"
              step="0.01"
              placeholder="Enter listing price"
              className="form-control"
              {...register("listingPrice", {
                required: "listing price is required",
              })}
            />
            <br />
            <label>Price per unit</label>
            <br />
            <input
              type="number"
              step="0.01"
              placeholder="Enter price per unit"
              className="form-control"
              {...register("pricePerUnit", {
                required: "priceper unit is required",
              })}
            />
            <br />
            <label>Type</label>
            <br />
            <select className="form-control" {...register("type")}>
              <option value="BUY">Buy</option>
              <option value="SELL">Sell</option>
            </select>
            <button
              className="btn btn-primary submit-btn"
              type="submit"
            >
              Submit
            </button>
            {errors.root && (
              <div className="error-massage">{errors.root.message}</div>
            )}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddStockModel;
