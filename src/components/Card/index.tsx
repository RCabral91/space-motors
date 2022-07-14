import { Link } from 'react-router-dom';

import { VehiclesType } from '../../@types/Vehicles';

interface IVehiclesTypeProps {
  vehicle: VehiclesType;
}

const Card: React.FC<IVehiclesTypeProps> = ({ vehicle }) => {
  return (
    <div className="card border-5 w-100 bg-black">
      <div className="card-body">
        <Link
          className="text-decoration-none"
          to={
            vehicle?.cost_in_credits !== 'unknown'
              ? `/checkout/${vehicle.name}`
              : '#'
          }
        >
          <h6 className="card-subtitle mb-1 text-muted text-start">
            <small>{vehicle?.model}</small>
          </h6>

          <h5 className="text-warning text-start">{vehicle?.name}</h5>

          {vehicle?.length !== 'unknown' ? (
            <div className="text-white d-flex justify-content-between">
              Largura
              <div>{vehicle?.length}</div>
            </div>
          ) : (
            <div className="text-white d-flex text-start justify-content-between fs-6">
              Largura<div className="text-end">S/ Info</div>
            </div>
          )}

          {vehicle?.max_atmosphering_speed !== 'unknown' ? (
            <div className="text-white d-flex justify-content-between">
              Velocidade<div>{vehicle?.max_atmosphering_speed}</div>
            </div>
          ) : (
            <div className="text-white d-flex text-start justify-content-between fs-6">
              Velocidade<div className="text-end">S/ Info</div>
            </div>
          )}

          {vehicle?.crew !== 'unknown' ? (
            <div className="text-white d-flex justify-content-between">
              Equipe<div>{vehicle?.crew}</div>
            </div>
          ) : (
            <div className="text-white d-flex text-start justify-content-between fs-6">
              Equipe<div className="text-end">S/ Info</div>
            </div>
          )}

          {vehicle?.passengers !== 'unknown' ? (
            <div className="text-white d-flex justify-content-between">
              Passageiros<div>{vehicle?.passengers}</div>
            </div>
          ) : (
            <div className="text-white d-flex text-start justify-content-between fs-6">
              Passageiros<div className="text-end">S/ Info</div>
            </div>
          )}

          {vehicle?.cargo_capacity !== 'unknown' ? (
            <div className="text-white d-flex justify-content-between">
              Capacidade de carga<div>{vehicle?.cargo_capacity}</div>
            </div>
          ) : (
            <div className="text-white d-flex text-start justify-content-between fs-6">
              Capacidade de carga<div className="text-end">S/ Info</div>
            </div>
          )}

          {vehicle?.cost_in_credits !== 'unknown' ? (
            <div className="text-warning  align-items-stretch text-center fw-bold fs-4 mt-3">
              ¢ {vehicle?.cost_in_credits}
            </div>
          ) : (
            <div className="text-warning  align-items-stretch text-center fw-bold fs-6 mt-3">
              <div>Não há no estoque</div>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Card;
