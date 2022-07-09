const OrderByCreditCard: React.FC = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="pb-4 w-50">
          <div className="card bg-black">
            <div className="card-body text-start">
              <div className="text-center">
                <p className="card-text text-warning">
                  Compra relizada com sucesso!
                </p>

                <p className="text-white">
                  <small>
                    Confirmamos o seu pedido. Em breve você receberá um e-mail
                    com código para acompanhamento do seu produto.
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderByCreditCard;
