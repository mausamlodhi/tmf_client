import { useState } from "react";
import { HomeComponent } from "../components";

function HomePage() {
  const [isModalOpen,setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <HomeComponent 
        setIsModalOpen={setIsModalOpen}
      />
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="modal-title">Make a Payment</h2>
            <form className="modal-form">
              <input
                type="text"
                placeholder="To *"
                className="modal-input"
                required
              />
              <select className="modal-input" required>
                <option value="">From *</option>
                <option value="account1">BTC</option>
                <option value="account2">ETH</option>
              </select>
              <input
                type="number"
                placeholder="Amount *"
                className="modal-input"
                required
              />
              <textarea
                placeholder="Description"
                className="modal-textarea"
              ></textarea>
              <div className="modal-actions">
                <button
                  type="button"
                  className="modal-button cancel"
                  onClick={closeModal}
                >
                  CANCEL
                </button>
                <button type="submit" className="modal-button submit" disabled>
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
export default HomePage;
