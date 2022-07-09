const OrderSuccessfullyCard: React.FC = () => {
  return (
    <div className="d-flex justify-content-center">
      <div className="pb-4 w-50">
        <div className="card bg-black">
          <div className="card-body text-start">
            <div className="text-center">
              <p className="card-text text-warning">
                Pedido realizado! <br /> Efetue o pagamento do boleto abaixo
                para finalizar sua compra
              </p>

              <button type="button" className="btn btn-warning mb-3">
                <small>Imprimir boleto</small>
              </button>
              <p className="text-white">
                <small>
                  Um e-mail será enviado à você assim que o pagamento for
                  confirmado e você receberá um código para acompanhamento do
                  seu produto.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccessfullyCard;
