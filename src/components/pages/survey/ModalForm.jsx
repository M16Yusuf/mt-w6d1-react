import { useState } from "react";
import { useDispatch } from "react-redux";

function ModalForm({ modal, toggleModal }) {
  const dispatch = useDispatch();
  const [errorName, setErrorName] = useState("");

  const onSub = function (e) {
    e.preventDefault();
    const inputData = {};
    const data = e.target;

    const dataInput = {};

    const name = e.target.name.value;

    console.log(data);

    data.forEach((input) => {
      if (input.type === "checkbox") {
        let choices = [];
        if (Object.keys(inputData).includes(input.name)) {
          choices = inputData[input.name];
        }
        if (input.checked) {
          if (input.value === "other") {
            const otherBrand = form.querySelector("input#other-brands");
            choices.push(otherBrand.value);
          } else {
            choices.push(input.value);
          }
        }
        Object.assign(inputData, {
          [input.name]: choices,
        });
        return;
      }
      if (input.name === "other-brands") {
        return;
      }
      Object.assign(inputData, {
        [input.name]: e.target[input.name].value,
      });
    });

    const selects = form.querySelectorAll("select");
    selects.forEach((select) => {
      if (select.name === "smoker") {
        let isSmoker = false;
        if (e.target[select.name].value === "y") {
          isSmoker = true;
        }
        if (!isSmoker) {
          Object.assign(inputData, {
            brands: [],
          });
        }
        Object.assign(inputData, {
          [select.name]: isSmoker,
        });
        return;
      }
      Object.assign(inputData, {
        [select.name]: e.target[select.name].value,
      });
    });
    console.log(inputData);
  };

  function onChng(e) {
    let value = e.target.value;
    const re = /\d+/g;
    if (re.test(value)) {
      setErrorName("Nama tidak boleh mengandung angka");
    } else {
      setErrorName(" ");
    }
  }

  return (
    <div
      className={`absolute inset-0 bg-[rgb(0,0,0,0.8)] ${
        modal ? "block" : "hidden"
      }`}
    >
      <div className="absolute top-1/2 left-1/2 translate-[-50%] bg-white w-max p-1 rounded-lg">
        <form onSubmit={onSub}>
          <div className="p-2.5">
            <label htmlFor="name">Nama : </label>
            <input
              className="block border rounded-md w-full"
              type="text"
              name="name"
              id="name"
              onChange={onChng}
            />
            <label className="text-red-500 text-xs">{errorName}</label>
          </div>
          <div className="p-2.5">
            <label htmlFor="age"> Umur : </label>
            <input
              className="block border rounded-md w-full"
              type="text"
              name="umur"
              id="age"
            />
          </div>
          <div className="p-2.5">
            <label> jenis Kelamin</label> <br />
            <input type="radio" name="gender" id="1" value="m" />
            <label for="1"> laki-laki</label>
            <input type="radio" name="gender" id="p" value="f" />
            <label for="p"> perempuan</label>
          </div>
          <div className="p-2.5">
            <label for="perokok"> Apakah anda seorang perokok? </label>
            <br />
            <select
              className="border p-1 rounded-md"
              name="perokok"
              id="smoker"
            >
              <option value="" disabled selected></option>
              <option value="ya">ya</option>
              <option value="tidak">tidak </option>
            </select>
          </div>

          <div className="p-2.5">
            <label>If yes, What brand/s of cigarette do you use?</label>
            <br />
            <input
              type="checkbox"
              name="brands"
              id="marlboro"
              value="marlboro"
            />
            <label for="marlboro">Marlboro</label>
            <input type="checkbox" name="brands" id="camel" value="camel" />
            <label for="camel">Camel</label>
            <br />
            <input
              type="checkbox"
              name="brands"
              id="bensonhedges"
              value="bensonhedges"
            />
            <label for="bensonhedges">Benson & Hedges</label>
            <input
              type="checkbox"
              name="brands"
              id="pallmall"
              value="pallmall"
            />
            <label for="pallmall">Pall Mall</label>
            <br />
            <input
              type="checkbox"
              name="brands"
              id="luckystrike"
              value="luckystrike"
            />
            <label for="luckystrike">Lucky Strike</label>
            <input type="checkbox" name="brands" id="other" value="other" />
            <label for="other">Other:</label>
            <input
              type="text"
              className="border rounded-md"
              name="other-brands"
              id="other-brands"
            />
          </div>

          <div className="p-2.5">
            <button
              className="bg-blue-500 p-1 rounded-md text-white mr-2.5"
              type="submit"
            >
              Submit
            </button>
            <span
              className="p-1.5 border rounded-md hover:bg-gray-400 cursor-pointer"
              onClick={toggleModal}
            >
              Close
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
