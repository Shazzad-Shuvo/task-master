import { IoMdClose } from "react-icons/io";

const TaskModal = ({open, onClose, children}) => {
    return (
        // backdrop
        <div
        className={`fixed inset-0 flex justify-center items-center transition-colors
        ${open ? "visible bg-black/40" : "invisible"}`}>
            {/* modal */}
            <div
            className={`bg-white rounded-xl shadow p-6 transition-all
            ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}>
                <button
                onClick={onClose}
                className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-100 hover:text-gray-600">
                    <IoMdClose></IoMdClose>
                </button>
                {children}
            </div>
            
        </div>
    );
};

export default TaskModal;