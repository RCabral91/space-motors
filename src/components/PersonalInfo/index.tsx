/* eslint-disable jsx-a11y/label-has-associated-control */

// interface IPersonalInfoProps {
//   value: string;
// }

const PersonalInfo: React.FC = () => {
  return (
    <div className="col card bg-black p-3">
      <h3 className="text-warning fs-5">Informações Pessoais</h3>

      <div className="col text-white mt-2">
        <label htmlFor="formGroupExampleInput" className="form-label">
          Nome
        </label>
        <input
          type="text"
          className="form-control bg-secondary border-secondary"
        />
      </div>

      <div className="col text-white mt-2">
        <label htmlFor="validationDefaultUsername" className="form-label">
          E-mail
        </label>
        <div className="input-group has-validation">
          <input
            type="email"
            className="form-control bg-secondary border-secondary"
            id="validationDefaultUsername"
            required
          />
        </div>
      </div>

      <div className="col text-white mt-2">
        <label htmlFor="inputAddress" className="form-label">
          Telefone
        </label>
        <input
          type="text"
          className="form-control bg-secondary border-secondary"
        />
      </div>

      <div className="col text-white mt-2">
        <label htmlFor="validationDefault01" className="form-label">
          CPF/CNPJ
        </label>
        <div className="input-group has-validation">
          <input
            type="text"
            className="form-control bg-secondary border-secondary"
            id="validationDefault01"
            required
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;

// const cpf = (v) => {
//   v=v.replace(/\D/g,"")
//   v=v.replace(/(\d{3})(\d)/,"$1.$2")
//   v=v.replace(/(\d{3})(\d)/,"$1.$2")

//   v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
//   return v

// ----------------------------------------------------------------

// const cnpj = (v) => {
//   v=v.replace(/\D/g,"")
//   v=v.replace(/^(\d{2})(\d)/,"$1.$2")
//   v=v.replace(/^(\d{2})\.(\d{3})(\d)/,"$1.$2.$3")
//   v=v.replace(/\.(\d{3})(\d)/,".$1/$2")
//   v=v.replace(/(\d{4})(\d)/,"$1-$2")
//   return v

// ----------------------------------------------------------------

// const phoneMask = (v) => {

//   let r = v.replace(/\D/g, "");
//   r = r.replace(/^0/, "");

//   if (r.length = 11) {
//     r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
//   } else if (r.length > 7) {
//     r = r.replace(/^(\d\d)(\d{5})(\d{0,4}).*/, "($1) $2-$3");
//   } else if (r.length > 2) {
//     r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
//   } else if (v.trim() !== "") {
//     r = r.replace(/^(\d*)/, "($1");
//   } if (r.length < 11) {
//       r = r.replace(/^(\d\d)(\d{4})(\d{4}).*/, "($1) $2-$3");
//     } else if (r.length > 7) {
//       r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
//     } else if (r.length > 2) {
//       r = r.replace(/^(\d\d)(\d{0,4})/, "($1) $2");
//     } else if (v.trim() !== "") {
//       r = r.replace(/^(\d*)/, "($1");
//     }
//   return r;
