import { useState } from "react";
import ModalForm from "./ModalForm";

function SurveyPerokok() {
  const [modal, setModal] = useState(false);

  const toggleModal = function () {
    setModal((modal) => {
      if (modal === false) return true;
      return false;
    });
  };

  return (
    <div className="flex flex-col m-10 gap-1.5 items-center">
      <div className="flex flex-row gap-5">
        <span className="text-2xl font-bold">
          Table survey perokok Koda Batch 3
        </span>
        <span
          className="p-1.5 border rounded-md hover:bg-gray-400 cursor-pointer"
          onClick={toggleModal}
        >
          add data+
        </span>
      </div>

      <ModalForm modal={modal} toggleModal={toggleModal} />

      <table className="border">
        <thead className="border">
          <tr>
            <th scope="col">No</th>
            <th scope="col">Nama</th>
            <th scope="col">Umur</th>
            <th scope="col">Jenis kelamin</th>
            <th scope="col">Seorang perokok</th>
            <th scope="col">Brand Roko</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. </td>
            <td>Muhammad Yusuf</td>
            <td>24</td>
            <td>Laki-laki</td>
            <td>tidak </td>
            <td></td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Farid</td>
            <td>28</td>
            <td>laki-laki</td>
            <td>ya</td>
            <td>djarum, camel, gudang garam</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default SurveyPerokok;
