import "./DelModal.scss";
import Close from "../../assets/images/Icons/close-24px.svg";

const DelModal = ({
  show,
  onCloseHandler,
  onDeleteHandler,
  itemId,
  itemName,
  warehouseId,
  warehouseName,
}) => {
  if (!show) {
    return null;
  } 

  return (
    <div className="modal-del">
      <div className="modal-del-content">
        <img
          className="modal-del__close"
          src={Close}
          alt="x mark to close"
          onClick={onCloseHandler}
        />

        <div className="modal-del-header">
          <h4 className="modal-del__title">
            Delete{" "}
            {itemName
              ? `${itemName} inventory item?`
              : `${warehouseName} warehouse?`}
          </h4>
          <div className="modal-del__content">
            Please confirm that you'd like to delete{" "}
            {itemName ? itemName : warehouseName} from the{" "}
            {itemName ? "inventory list." : "list of warehouses."} You won't be
            able to undo this action.
          </div>
          <div className="modal-del-footer">
            <button
              className="modal-del-footer__cancel"
              onClick={onCloseHandler}
            >
              Cancel
            </button>
            <button
              className="modal-del-footer__delete"
              onClick={() =>
                itemId ? onDeleteHandler(itemId) : onDeleteHandler(warehouseId)
              }
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DelModal;
